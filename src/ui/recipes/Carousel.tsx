import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
// eslint-disable-next-line no-restricted-imports
import { nord } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

export const Carousel: React.VFC = () => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <div className={'recipe-header'} onClick={() => setOpen((o) => !o)}>
                Simple carousel implementation{' '}
                {open ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}
            </div>
            <div className={'recipe-text recipe-' + (open ? 'show' : 'hide')}>
                <p>
                    An implementation of a simple carousel, done with CSS and React Hooks:{' '}
                    <a href={'https://github.com/DemonRax/Website/tree/main/src/ui/carousel'} target="_blank">
                        see GitHub repository.
                    </a>
                </p>
                <p>
                    A simple React component with basic API, which generates the carousel based on the provided images.
                    Can be controlled by buttons on the side, page selectors in the bottom and left-right keyboard
                    buttons. The control component is using React hooks and can be extended. Basic CSS to provide basic
                    styling, can be modified fully.
                </p>
                <p>TODO: add regular automatic slides and looping.</p>
                <p>In order to use it, create the list of images and pass as props:</p>
                <SyntaxHighlighter language="javascript" style={nord}>
                    {rawUse}
                </SyntaxHighlighter>
            </div>
        </div>
    );
};

const rawUse = String.raw`
const images = [
    { src: img1, alt: 'First slide' },
    { src: img2, alt: 'Second slide' },
    { src: img3, alt: 'Third slide' },
];

export const App: React.VFC = () => {
   // ...the rest of the code
    <Carousel images={images} />
   // ...
`;
