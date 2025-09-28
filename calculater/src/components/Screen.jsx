import React from 'react';


const Screen = ({ values }) => {
  return (
    <Textfit className="screen h-full w-full mb-10 px-0 py-10" mode="single" max={70}>
      {values}
    </Textfit>
  );
};

export default Screen;
