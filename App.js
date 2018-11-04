import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Greeting} from './others/Greeting';
 
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} ></View> */}
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{width:'100%', backgroundColor: 'skyblue'}} >
            <Image source={require('./img/headerImage.png')} style={{width:'10%', height:'10%'}} />
            <Text style = {styles.header}>This is Mobile app</Text>
          </View>
        </View>     
        <Image
          source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'}}
          style={{width: 320, height:180 }}
        />

        <Greeting name='Hi' />
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
    alignItems: 'flex-end',
  }
});


