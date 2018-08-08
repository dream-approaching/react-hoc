import React from 'react';
import simpleHoc from './simpleHoc';

@simpleHoc
export default class extends React.Component {
  render() {
    return <p>我是使用了装饰器的组件</p>;
  }
}
