import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import { useCarousel } from './CarouselControl';

export type Image = {
    src: string;
    alt: string;
};

type CarouselProps = {
    images: Image[];
};

export const Carousel: React.VFC<CarouselProps> = ({ images }) => {
    const { size, refTrack, refNav, prev, next, nav, hidePrev, hideNext } = useCarousel();

    return (
        <div className="carousel">
            <button className={'carousel__button carousel__button--left ' + hidePrev()} onClick={prev}>
                <FontAwesomeIcon icon={faAngleLeft} size={'3x'} />
            </button>
            <div className="carousel__container">
                <ul className="carousel__track" ref={refTrack}>
                    {images.map((img, i) => (
                        <li key={i} className={i === 0 ? 'carousel__slide current' : 'carousel__slide'}>
                            <img className="carousel__image" src={img.src} width="800" height="400" alt={img.alt} />
                        </li>
                    ))}
                </ul>
            </div>
            <button className={'carousel__button carousel__button--right ' + hideNext()} onClick={next}>
                <FontAwesomeIcon icon={faAngleRight} size={'3x'} />
            </button>
            <div className="carousel__nav" ref={refNav}>
                {Array.from(Array(size).keys()).map((i: number) => (
                    <button
                        key={i}
                        className={i === 0 ? 'carousel__page current' : 'carousel__page'}
                        onClick={nav(i)}
                    />
                ))}
            </div>
        </div>
    );
};
