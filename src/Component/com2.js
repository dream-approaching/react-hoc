import React from 'react';
import simpleHoc from './simpleHoc';

@simpleHoc
export default class extends React.Component {
  render() {
    const { handleClick } = this.props;
    return <p onClick={handleClick}>我是使用了装饰器的组件</p>;
  }
}
