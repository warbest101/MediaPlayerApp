import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground
} from 'react-native';
import { Constants } from 'expo';
import {
  createStackNavigator,
  createAppContainer,
  StackActions,
  NavigationActions,
} from 'react-navigation';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions=({navigation}) => {
    return {
      header: () => null
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 40, textAlign: 'center', fontWeight:'bold', color:'gray' }}>MEDIA PLAYER</Text>
        <View style={{height:30}} />
        <View style={{paddingLeft:60,paddingRight:60}}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Play', { index: 0 })}>
            <Text style={{fontSize: 20, borderWidth: 1, padding: 15, textAlign: 'center', borderColor:"gray"}}>PLAY MUSIC</Text>
          </TouchableOpacity>
        </View>
        <View style={{height:20}} />
        <View style={{paddingLeft:60,paddingRight:60}}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('List')}>
            <Text style={{fontSize: 20, borderWidth: 1, padding: 15, textAlign: 'center', borderColor:"gray"}}>MUSIC LIST</Text>
          </TouchableOpacity>
        </View>
        <View style={{height:20}} />
        <View style={{paddingLeft:60,paddingRight:60}}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('About')}>
            <Text style={{fontSize: 20, borderWidth: 1, padding: 15, textAlign: 'center', borderColor:"gray"}}>ABOUT US</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 60
  },
});
