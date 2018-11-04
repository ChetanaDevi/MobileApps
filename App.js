import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Bananas } from './Bananas';
 
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is new app</Text>
        <Image
          source={{uri: 'https://i.chzbgr.com/full/7345954048/h7E2C65F9/'}}
          style={{width: 300, height:180 }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
