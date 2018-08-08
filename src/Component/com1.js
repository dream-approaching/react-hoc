import React from 'react';
import simpleHoc from './simpleHoc';

class Com1 extends React.Component {
  render() {
    return <p>我被高阶组件包裹着</p>;
  }
}

export default simpleHoc(Com1);
