import React from 'react';

const ColorButtonGroup = () => {
  const changeBackgroundColor = (color) => {
    document.body.style.backgroundColor = color;
  };

  return (
    <div className='mt-4 flex space-x-4'>
      <button
        className='rounded bg-red-500 px-4 py-2 text-white'
        onClick={() => changeBackgroundColor('red')}
      >
        Red
      </button>
      <button
        className='rounded bg-green-500 px-4 py-2 text-white'
        onClick={() => changeBackgroundColor('green')}
      >
        Green
      </button>
      <button
        className='rounded bg-blue-500 px-4 py-2 text-white'
        onClick={() => changeBackgroundColor('blue')}
      >
        Blue
      </button>
    </div>
  );
};

export default ColorButtonGroup;
