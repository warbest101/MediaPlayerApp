import React, { Component } from 'react';
import {Button, Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { Constants } from 'expo';
import {StackActions, NavigationActions} from 'react-navigation';
import MusicData from './MusicData';


export default class DetailScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loadImage: true,
      currentMusic: this.props.navigation.getParam('index')
    }
  }
  static navigationOptions = ({ navigation }) => ({
    title:  'Music Info',
    headerLeft:(
      <TouchableOpacity onPress={() => {navigation.goBack()} }>
        <Image
          style={{width:30,height:30}} 
          source={require('./assets/go-back-icon.png')} />
      </TouchableOpacity>
    )
  });

  loadImageError(){
    this.setState({loadImage: false});
  }

  previousDetail(){
    if(this.state.currentMusic != 0){
      this.setState({ currentMusic: this.state.currentMusic - 1 })
    }
    else{
      this.setState({currentMusic: MusicData.length - 1})
    }
  }

  nextDetail(){
    if(this.state.currentMusic < MusicData.length - 1){
      this.setState({ currentMusic: this.state.currentMusic + 1 })
    }
    else{
      this.setState({currentMusic:0})
    }
  }

  render() {
    return (
      <View style={{flex:1}}>
        <View style={{flex:1}}>
          <View style={{flex:1,height:'85%',width:'100%'}}>
            
            <View style = {{paddingLeft: 20,paddingRight: 20,paddingTop: 10,flexDirection: 'row'}}>
              <TouchableOpacity style = {{paddingRight: 10}}>
                <Image 
                  style = {{height: 160,width: 120}} 
                  source =  {this.state.loadImage 
                              ? {uri:MusicData[this.state.currentMusic].imgUrl} 
                              : require('./assets/image-not-found-icon.png')
                            } 
                  onError = {this.loadImageError.bind(this)} 
                />
              </TouchableOpacity>
              <View style = {{flexDirection: 'column',flex: 1}}>
                <Text style = {{fontWeight: 'bold',fontSize: 18}}>{MusicData[this.state.currentMusic].TacPham}</Text>
                <Text>Artist: {MusicData[this.state.currentMusic].TacGia}</Text>
                <Text>Published: {MusicData[this.state.currentMusic].Year}</Text>
                <Text>Type: {MusicData[this.state.currentMusic].Type}</Text>
              </View>
            </View>
            <View style = {{paddingLeft: 20}}>
              <Text style = {{fontSize: 18,fontWeight: 'bold'}}>Description:</Text>
              <Text style = {{fontSize: 16}}>{MusicData[this.state.currentMusic].Description}</Text>
            </View>
          </View>
          <View style={{height: '15%',width: '100%',justifyContent: "center",flexDirection: "row",alignItems: "center"}}>
            <TouchableOpacity style = {{justifyContent: "center",paddingRight: 20}} onPress = {this.previousDetail.bind(this)}>
              <Image source={require('./assets/back-icon.png')} style={{height: 30,width: 30}}  />
            </TouchableOpacity>
            <TouchableOpacity 
              style = {{borderWidth: 1,height: 50,width: 80,justifyContent: "center"}}
              onPress = {() => this.props.navigation.navigate('Play',{index:MusicData[this.state.currentMusic].ID})}
            >
              <Text style = {{fontSize: 20,fontWeight: "bold",textAlign: "center"}}>PLAY</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {{justifyContent: "center",paddingLeft: 20}} onPress = {this.nextDetail.bind(this)}>
              <Image source = {require('./assets/next-icon.png')} style = {{height: 30,width: 30}}  />
            </TouchableOpacity>
            
          </View>
        </View>
      </View>
    );
  }
}

