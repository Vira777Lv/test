import React from 'react';
import  LazyLoad  from 'react-lazy-load';
import img1 from '../../../public/img/cheetah-003.jpg';
import img2 from '../../../public/img/image-154.jpeg';
import img3 from '../../../public/img/wallpapers.jpg';


const filler = {
  height: '10px'
};

const DummyList = () => {
  return (
    <div>
      <h1>DummyList</h1>
      <div style={filler} />
      <LazyLoad height={762}>
        <img src={img1} width={1024} />
      </LazyLoad>
      <div style={filler} />
      <LazyLoad height={762}>
        <img src={img2} width={1024} />
      </LazyLoad>
      <div style={filler} />
      <LazyLoad height={762}>
        <img src={img3} width={1024} />
      </LazyLoad>
      <div style={filler} />
    </div>
  );
};

export default DummyList;
