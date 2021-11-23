import { RefObject, useCallback, useEffect, useRef, useState } from 'react';

type CarouselControl = {
    size: number;
    refTrack: RefObject<any>;
    refNav: RefObject<any>;
    prev: () => void;
    next: () => void;
    nav: (i: number) => () => void;
    hidePrev: () => string;
    hideNext: () => string;
};

export const useCarousel = (): CarouselControl => {
    const [current, setCurrent] = useState(0);
    const [size, setSize] = useState(0);
    const refTrack = useRef<any>();
    const refNav = useRef<any>();

    useEffect(() => {
        const slides = refTrack.current.children;
        setSize(slides.length);
        const slideWidth = slides[0].getBoundingClientRect().width;
        Array.from(slides).forEach((slide: any, i: number) => {
            slide.style.left = i * slideWidth + 'px';
        });
        refTrack.current.style.width = slideWidth * (slides.length - 1);
    }, []);

    const moveTo = useCallback(
        (index: number) => {
            const slides = refTrack?.current?.children;
            if (index === current) return;
            slides?.[current]?.classList.remove('current');
            slides?.[index]?.classList.add('current');
            if (refTrack && refTrack.current)
                refTrack.current.style.transform = 'translateX(-' + slides?.[index]?.style.left + ')';
            refNav?.current?.children[current]?.classList.remove('current');
            refNav?.current?.children[index]?.classList.add('current');
            setCurrent(index);
        },
        [current]
    );

    const moveBy = useCallback(
        (shift: number) => moveTo(Math.min(Math.max(current + shift, 0), refTrack?.current?.children.length - 1)),
        [current, moveTo]
    );

    const next = useCallback(() => {
        moveBy(1);
    }, [moveBy]);

    const prev = useCallback(() => {
        moveBy(-1);
    }, [moveBy]);

    const nav = useCallback(
        (i: number) => () => {
            moveTo(i);
        },
        [moveTo]
    );

    const keyUp = useCallback(
        (e: any) => {
            switch (e.key) {
                case 'ArrowLeft':
                    prev();
                    break;
                case 'ArrowRight':
                    next();
                    break;
            }
        },
        [next, prev]
    );

    useEffect(() => {
        document.addEventListener('keyup', keyUp);
        return () => document.removeEventListener('keyup', keyUp);
    });

    const hidePrev = useCallback(() => (current === 0 ? 'carousel__button--hidden' : ''), [current]);

    const hideNext = useCallback(
        () => (current === refTrack?.current?.children.length - 1 ? 'carousel__button--hidden' : ''),
        [current]
    );

    return { size, refTrack, refNav, prev, next, nav, hidePrev, hideNext };
};
