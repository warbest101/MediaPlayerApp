import React, { Component } from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { Constants } from 'expo';

export default class AboutScreen extends React.Component {
  constructor(props){
    super(props);
  }
  static navigationOptions = ({ navigation }) => ({
    title:  'About Us',
    headerLeft:(
      <TouchableOpacity onPress={() => {navigation.goBack()} }>
        <Image
          style={{width:30,height:30}} 
          source={require('./assets/go-back-icon.png')} />
      </TouchableOpacity>
    )
  });
  render() {
    return (
      <View style={styles.container}>
          <Text style={{fontSize:30,textAlign:'center'}}>Media Player</Text>
          <View style={{height:30}} />
          <Text style={{textAlign:'left',fontSize:18}}>
            This is Media Player App Online. An app with you can listening Online to 100+ Song. It make with Expo, Snack and has been maded by our Group. The group includes the following members:
          </Text>
          <Text style={{fontSize:18}}>- Trần Thiên Phúc</Text>
          <Text style={{fontSize:18}}>- Lục Giang Tuấn Huy</Text>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 70,
  },
});