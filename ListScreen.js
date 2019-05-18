import React, { Component,PureComponent } from 'react';
import {Text, View, StyleSheet,TouchableOpacity,FlatList,Image} from 'react-native';
import { Constants } from 'expo';
import {StackActions,NavigationActions} from 'react-navigation';
import MusicData from './MusicData';

export default class ListScreen extends React.Component {
  constructor(props){
    super(props);
    this.state={
      loadImage:true,
      data: MusicData
    }
  }
  static navigationOptions = ({ navigation }) => ({
    title:  'Music List',
    headerLeft:(
      <TouchableOpacity onPress={() => {navigation.goBack()} }>
        <Image
          style={{width:30,height:30}} 
          source={require('./assets/go-back-icon.png')} />
      </TouchableOpacity>
    )
  });
  
  loadImageError(){
    this.setState({loadImage:false});
  }

  render() {
    return (
        <View style={styles.container}>
          <View style={{flexDirection:'row',justifyContent:'center'}}>
          </View>
            <FlatList
              data={this.state.data}
              enableEmptySections={true}
              initialNumToRender={5}
              windowSize={7}
              renderItem={({item,index}) => (
/*                return (
                  <View style = {{flexDirection:'row'}}>       
                    <TouchableOpacity style = {{width:'93%'}} onPress={() => this.props.navigation.navigate('Play', {index})}>
                      <View style = {styles.row}>
                        <View style = {{flex:3}}>
                          <Image 
                            source = {this.state.loadImage ? {uri:item.imgUrl} : require('./assets/image-not-found-icon.png')} 
                            style = {styles.image}
                            onError = {this.loadImageError.bind(this)} />
                        </View>
                        <View style = {{flexDirection: 'column',flex: 10,padding: 10}}>
                          <Text style = {{fontSize: 20,fontWeight: 'bold'}}>{item.TacPham}</Text>
                          <Text style = {{fontSize: 16}}>{item.TacGia}</Text>             
                        </View>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity 
                      style = {{flex: 1, justifyContent: 'center',width: '7%',borderColor: 'lightgray'}}
                      onPress = {() => this.props.navigation.navigate('Details',{ index })}>
                      <Image source = {require('./assets/info-icon.png')} style = {{height: 20,width: 20}} />
                    </TouchableOpacity>
                  </View> 
                  
                ); */
                <ListItems 
                	item={item} 
                	index={index} 
                	loadImage={this.state.loadImage}
                	loadImageError={this.loadImageError.bind(this)} 
                	navigation={this.props.navigation} 

                />
              )}
              keyExtractor={(item,index) => index.toString()}
              ItemSeparatorComponent={(sectionID,rowID,adjacentRowHighlighted) => <View key={rowID} style={{height:1,backgroundColor:'lightgray'}} /> }
            /> 
          
          
        </View>
    );
  
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginBottom:10,
    padding: 10,
  },
  row:{
    flexDirection:'row',
    height:100,
    marginBottom:10,
    marginTop:10,
  },
  image:{
    height:80,
    width:60,
  },
});

class ListItems extends PureComponent{
	render(){
		const { item, index, loadImage, loadImageError , navigation  } = this.props;
		return (
	        <View style = {{flexDirection:'row'}}>       
	            <TouchableOpacity style = {{width:'93%'}} onPress={() => navigation.navigate('Play',{index})}>
		            <View style = {styles.row}>
		                <View style = {{flex:3}}>
		                    <Image 
		                     	source = {loadImage ? {uri:item.imgUrl} : require('./assets/image-not-found-icon.png')} 
		                        style = {styles.image}
		                        onError = {loadImageError} />
		                </View>
		                <View style = {{flexDirection: 'column',flex: 10,padding: 10}}>
		                    <Text style = {{fontSize: 20,fontWeight: 'bold'}}>{item.TacPham}</Text>
		                    <Text style = {{fontSize: 16}}>{item.TacGia}</Text>             
		                </View>
		            </View>
	            </TouchableOpacity>
	            <TouchableOpacity 
	                style = {{flex: 1, justifyContent: 'center',width: '7%',borderColor: 'lightgray'}}
	                onPress = {() => navigation.navigate('Details',{ index })}>
	                <Image source = {require('./assets/info-icon.png')} style = {{height: 20,width: 20}} />
	            </TouchableOpacity>
	        </View>
	    );
	}
}
