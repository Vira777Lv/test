import React from 'react';
import  LazyLoad  from 'react-lazy-load';

const DummyChart = () => {
  return (
    <div>
      <LazyLoad height={762}>
        <h2>DummyChart</h2>
      </LazyLoad>
    </div>
  );
};

export default DummyChart;
