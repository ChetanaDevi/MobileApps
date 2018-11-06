import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Greeting} from './others/Greeting';
 
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{width: 50, height: 70}} >
            <Image source={require('./img/headerImage.png')} style={{width:'80%', height:'50%'}} />
          </View>
          <View style={{width: '100%', height: 50}} >
            <Text style = {styles.header}>This is Mobile app</Text>
          </View>
        </View>
        <View style={{flex: 1, flexDirection: 'column', marginTop: -150}}>
          <Image
            source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'}}
            style={{width: 320, height:180 }}
          />

          <Greeting name='Hi' />
        </View>        
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    top : '4%' ,
    backgroundColor: '#fff',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 30,
    alignItems: 'flex-end',
  }
});


