import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

 
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is Mobile app</Text>
        <Image
          source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'}}
          style={{width: 320, height:180 }}
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
