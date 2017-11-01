import React from 'react';
import  LazyLoad  from 'react-lazy-load';

const DummyTable = () => (
  <div>
    <LazyLoad height={762}>
      <table>
        <tbody><tr><td>Dummy</td><td>Table</td></tr></tbody>
      </table>
    </LazyLoad>
  </div>
);

export default DummyTable;
