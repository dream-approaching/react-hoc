import React from 'react';

const simpleHoc = Component => {
  return class extends React.Component {
    handleClick = () => {
      console.log('这时Hoc里面的handleClick事件');
    };

    render() {
      return <Component handleClick={this.handleClick} {...this.props} />;
    }
  };
};

export default simpleHoc;
