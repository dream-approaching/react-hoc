import React from 'react';

const simpleHoc = Component => {
  return class extends React.Component {
    render() {
      console.log('这是高阶组件');
      return <Component {...this.props} />;
    }
  };
};

export default simpleHoc;
