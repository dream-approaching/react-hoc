import React from 'react';
import simpleHoc from './simpleHoc';

class Com1 extends React.Component {
  render() {
    const { handleClick } = this.props;
    return <p onClick={handleClick}>我被高阶组件包裹着</p>;
  }
}

export default simpleHoc(Com1);
