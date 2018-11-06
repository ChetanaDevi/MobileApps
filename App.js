import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import {ButtonBasics} from './others/TouchButton';
// import {NavigatorIOSApp} from './others/NavigatorIOSApp';
 
export default class App extends React.Component {

  

  render() {

    return (
      <View style={styles.container}>
        <View style={{flex: 0.1, flexDirection: 'row',height: 20,
          padding: 10,}}>
          <View style={{width: 50, height: 70}} >
            <Image source={require('./img/headerImage.png')} style={{width:'80%', height:'50%'}} />
          </View>
          <View style={{width: '100%', height: 50}} >
            <Text style = {styles.header}>This is Mobile app</Text>
          </View>
        </View>
        
        <ButtonBasics />
               
       
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


