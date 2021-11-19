import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
// eslint-disable-next-line no-restricted-imports
import { nord } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';

export const ClickAway: React.VFC = () => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <div className={'recipe-header'} onClick={() => setOpen((o) => !o)}>
                Click away with useRef hook{' '}
                {open ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}
            </div>
            <div className={'recipe-text recipe-' + (open ? 'show' : 'hide')}>
                <p>
                    An implementation of the click away function, that can be used for example to create dropdown popup
                    menus and close on clicking on any other side of the page.
                </p>
                <SyntaxHighlighter language="javascript" style={nord}>
                    {rawCode}
                </SyntaxHighlighter>
                <p>In order to use it, assign the ref to the component:</p>
                <SyntaxHighlighter language="javascript" style={nord}>
                    {rawUse}
                </SyntaxHighlighter>
                <p>
                    Source:{' '}
                    <a
                        href={'https://stackoverflow.com/questions/32553158/detect-click-outside-react-component'}
                        target="_blank"
                    >
                        StackOverflow
                    </a>{' '}
                    based on the{' '}
                    <a href={'https://www.youtube.com/watch?v=J-g9ZJha8FE&feature=youtu.be&t=481'} target="_blank">
                        Tanner Linsley's talk at JSConf Hawaii 2020
                    </a>
                </p>
            </div>
        </div>
    );
};

const rawCode = String.raw`
export const  useOuterClick = (callback) => {
  const callbackRef = useRef(); // initialize mutable ref, which stores callback
  const innerRef = useRef(); // returned to client, who marks "border" element

  // update cb on each render, so second useEffect has access to current value 
  useEffect(() => { callbackRef.current = callback; });
  
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
    function handleClick(e) {
      if (innerRef.current && callbackRef.current && 
        !innerRef.current.contains(e.target)
      ) callbackRef.current(e);
    }
  }, []); // no dependencies -> stable click listener
      
  return innerRef; // convenience for client (doesn't need to init ref himself) 
}
`;

const rawUse = String.raw`
const Component = () => {
  const innerRef = useOuterClick(ev => {/*event handler code on outer click*/});
  return <div ref={innerRef}> Inside </div> 
};
`;
