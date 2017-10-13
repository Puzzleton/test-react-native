import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Main from './src/components/Main/Main';

class Test extends Component {
  render() {
    return (
      <Main />
    );
  }
}

AppRegistry.registerComponent('test', () => Test);

export default Test;
