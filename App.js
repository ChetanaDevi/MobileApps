import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Greeting} from './others/Greeting';
 
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style = {styles.header}>This is Mobile app</Text>
        <Image
          source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'}}
          style={{width: 320, height:180 }}
        />

        <Greeting name='Rexxar' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top : '4%' ,
    backgroundColor: '#fff',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 30,
    backgroundColor: 'rgb(128,128,128)',
    width: '100%',
  }
});


