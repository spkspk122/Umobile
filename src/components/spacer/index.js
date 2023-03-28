import React, {Component} from 'react';
import {View} from 'react-native';
class Spacer extends Component {
  render() {
    const {height, width} = this.props;
    return <View height={height} width={width} />;
  }
}

export default Spacer;
