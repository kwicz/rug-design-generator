'use client';

import {
  JSXElementConstructor,
  PromiseLikeOfReactNode,
  ReactElement,
  ReactNode,
  ReactPortal,
  useState,
} from 'react';

export default function Shapes() {
  const [activeShape, setActiveShape] = useState(null);

  const shapeOptions = {
    Square: 'square',
    Rectangle: 'rectangle',
    Circle: 'circle',
    // Oval: 'oval',
    Pentagon: 'pentagon',
    Star: 'star-five',
    Heart: 'heart',
    Cloud: 'cloud',
    Droplet: 'droplet',
  };

  return (
    <div className='shapes__options flex flex-wrap'>
      {Object.keys(shapeOptions).map((shape: string) => (
        <div
          key={shape}
          className='shapes__option m-3'
          onClick={() => setActiveShape(shape)}
        >
          <div id={shapeOptions[shape]} className={shapeOptions[shape]}></div>
          {shape}
        </div>
      ))}
      <p>The active shape is: {activeShape}</p>
    </div>
  );
}
