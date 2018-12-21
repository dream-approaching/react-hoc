import React from 'react';

const simpleHoc = Component => {
  return class extends React.Component {
    componentDidMount() {
      const ref = this.instanceComponent;
      console.log(ref.constructor.name);
    }

    handleClick = () => {
      console.log('111')
      const ref = this.instanceComponent;
      console.log(`${ref.constructor.name}实例点了我`);
    };

    render() {
      return (
        <Component
          ref={ref => (this.instanceComponent = ref)}
          handleClick={this.handleClick}
          {...this.props}
        />
      );
    }
  };
};

export default simpleHoc;
