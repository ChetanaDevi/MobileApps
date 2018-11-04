import React from 'react';
import { Text, View } from 'react-native';
import {Blink} from './Advertisement';

export class Greeting extends React.Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text>Hello {this.props.name}!</Text>
        <Blink text={this.props.name}/>
      </View>
    );
  }
}