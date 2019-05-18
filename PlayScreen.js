import React, { Component } from 'react';
import {Button, Text, View, StyleSheet,TouchableOpacity,Image,Alert} from 'react-native';
import { Slider } from 'react-native-elements';
import {Video, Constants, Audio } from 'expo';
import {StackActions,NavigationActions} from 'react-navigation';
import MusicData from './MusicData';

function pad(n, width, z=0) {
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

const minutesAndSeconds = (position) => ([
  pad(Math.floor(position / 60), 2),
  pad(position % 60, 2),
]);

export default class PlayScreen extends React.Component {


  constructor(props){
    super(props);
    this.state = {
      shouldPlay: true,
      isLooping:false,
      shuffle: false,
      musicstatus:{},
      total:0,
      working:0,
      currentMusic: this.props.navigation.getParam('index') ,
      loadImage : true
    };
    
  }
  musicStatus(status){
    if(status['isLoaded']){
      let time = Math.floor(status.positionMillis/1000);
      let fulltime = Math.floor(status.durationMillis/1000);
      let random = Math.floor(Math.random() * (MusicData.length - 1)) + 0;
      this.setState({musicstatus: status,working: time,total: fulltime});
      if(status['didJustFinish'] && !this.state.isLooping){
        this.vid.playFromPositionAsync(0);
        this.setState({isChanging: true});
        if(this.state.currentMusic < MusicData.length - 1){ 
          setTimeout(() => this.setState({
            shouldPlay: true,
            isChanging: false,
            currentMusic: this.state.shuffle ? random : this.state.currentMusic + 1,
          }),0);
        }
        else{
          setTimeout(() => this.setState({
            shouldPlay: true,
            isChanging: false,
            currentMusic: this.state.shuffle ? random : 0,
          }),0);
        }
      }
    }
    else{ 
      Alert.alert(
        'Error', 'Failed to load Music',
        [{text: 'Back', onPress: () => this.props.navigation.goBack()}], 
        {cancelable: false}
      ) 
    }
  }

  seek(time){
    time = Math.round(time*1000);
    this.vid.playFromPositionAsync(time);
    this.setState({
      working: time,
      shouldPlay: true
    });
  }

  loadImageError(){
    this.setState({loadImage: false});
  }

  forwardButton(){
    this.vid.playFromPositionAsync(0);
    this.setState({isChanging: true});
    if(this.state.currentMusic < MusicData.length - 1){
      setTimeout(() => this.setState({
        shouldPlay: true,
        isChanging: false,
        currentMusic: this.state.currentMusic + 1,
      }),0);
    }
    else{
      setTimeout(() => this.setState({
        shouldPlay: true,
        isChanging: false,
        currentMusic: 0,
      }),0);
    }
  }

  backButton(){
    this.vid.playFromPositionAsync(0);
    this.setState({isChanging: true});
    if(this.state.currentMusic != 0){
      setTimeout(() => this.setState({
        shouldPlay: true,
        isChanging: false,
        currentMusic: this.state.currentMusic - 1,
      }),0);
    }
    else{
      setTimeout(() => this.setState({
        shouldPlay: true,
        isChanging: false,
        currentMusic: MusicData.length - 1,
      }),0);
    }
  }

  static navigationOptions = ({ navigation }) => ({
    title:  'Playing Music',import React, { Component } from 'react';
import {Button, Text, View, StyleSheet,TouchableOpacity,Image,Alert} from 'react-native';
import { Slider } from 'react-native-elements';
import {Video, Constants, Audio } from 'expo';
import {StackActions,NavigationActions} from 'react-navigation';
import MusicData from './MusicData';

function pad(n, width, z=0) {
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

const minutesAndSeconds = (position) => ([
  pad(Math.floor(position / 60), 2),
  pad(position % 60, 2),
]);

export default class PlayScreen extends React.Component {


  constructor(props){
    super(props);
    this.state = {
      finish: true,
      shouldPlay: true,
      isLooping:false,
      shuffle: false,
      musicstatus:{},
      total:0,
      working:0,
      currentMusic: this.props.navigation.getParam('index') ,
      loadImage : true
    };
    
  }
  musicStatus(status){
    if(status['isLoaded']){
      let time = Math.floor(status.positionMillis/1000);
      let fulltime = Math.floor(status.durationMillis/1000);
      let random = Math.floor(Math.random() * (MusicData.length - 1)) + 0;
      this.setState({musicstatus: status,working: time,total: fulltime});
        if(status['didJustFinish'] && !this.state.isLooping){
          this.vid.playFromPositionAsync(0);
          this.setState({isChanging: true});
          if(this.state.currentMusic < MusicData.length - 1){ 
            setTimeout(() => this.setState({
              shouldPlay: true,
              isChanging: false,
              currentMusic: 
                ( this.state.shuffle && !this.state.finish
                    ? random 
                    : this.state.currentMusic + 1
                ),
            }),0);
          }
          else{
            setTimeout(() => this.setState({
              shouldPlay: true,
              isChanging: false,
              currentMusic: 
                ( this.state.shuffle && !this.state.finish
                    ? random 
                    : 0
                ),
            }),0);
          }
        }
    }
    else{ 
      Alert.alert(
        'Error', 'Failed to load Music',
        [{text: 'Back', onPress: () => this.props.navigation.goBack()}], 
        {cancelable: false}
      ) 
    }
  }

  seek(time){
    time = Math.round(time*1000);
    this.vid.playFromPositionAsync(time);
    this.setState({
      working: time,
      shouldPlay: true
    });
  }

  loadImageError(){
    this.setState({loadImage: false});
  }

  forwardButton(){
    this.vid.playFromPositionAsync(0);
    this.setState({isChanging: true});
    if(this.state.currentMusic < MusicData.length - 1){
      setTimeout(() => this.setState({
        shouldPlay: true,
        isChanging: false,
        currentMusic: this.state.currentMusic + 1,
      }),0);
    }
    else{
      setTimeout(() => this.setState({
        shouldPlay: true,
        isChanging: false,
        currentMusic: 0,
      }),0);
    }
  }

  backButton(){
    this.vid.playFromPositionAsync(0);
    this.setState({isChanging: true});
    if(this.state.currentMusic != 0){
      setTimeout(() => this.setState({
        shouldPlay: true,
        isChanging: false,
        currentMusic: this.state.currentMusic - 1,
      }),0);
    }
    else{
      setTimeout(() => this.setState({
        shouldPlay: true,
        isChanging: false,
        currentMusic: MusicData.length - 1,
      }),0);
    }
  }

  static navigationOptions = ({ navigation }) => ({
    title:  'Playing Music',
    headerLeft:(
      <TouchableOpacity onPress={() => {navigation.goBack()} }>
        <Image
          style={{width:30,height:30}} 
          source={require('./assets/go-back-icon.png')} />
      </TouchableOpacity>
    )
  });
  
  render() {
    const elapsed=minutesAndSeconds(this.state.working);
    const totalTime=minutesAndSeconds(this.state.total);
    const music = this.state.isChanging ? null : (
      <Video
        ref = {ref=>this.vid=ref}
        source = {{uri:MusicData[this.state.currentMusic].audioUrl}}
        shouldPlay = {this.state.shouldPlay}
        resizeMode="cover"
        isLooping = {this.state.isLooping}
        onPlaybackStatusUpdate={(e) => {this.musicStatus(e)}}
        style={  { width: 0, height: 0 } }
      />
    )

    return (
      <View style={{flex: 1}}>
        <View style={{height: '75%'}}>
            <View style={{paddingLeft: 24, paddingRight: 24, justifyContent: 'center', alignItems: "center"}}>
              <TouchableOpacity>
                <Image 
                  style = {{height: 300 ,width: 300 }} 
                  source =  {this.state.loadImage 
                              ? {uri: MusicData[this.state.currentMusic].imgUrl} 
                              : require('./assets/image-not-found-icon.png')
                            } 
                  onError = {this.loadImageError.bind(this)}  
                />
              </TouchableOpacity>
            </View>
            {music}
          <Details 
            TacPham = {MusicData[this.state.currentMusic].TacPham} 
            TacGia = {MusicData[this.state.currentMusic].TacGia} 
          />
        </View>
        <View style={{flex:1,height:'25%'}}>
          <View style = {{paddingLeft:16, paddingRight:16, paddingTop:16}}>
            <View style = {{flexDirection: 'row'}}>
              <Text style = {{fontSize: 12, textAlign:'center'}}>
                {elapsed[0] + ":" + elapsed[1]}
              </Text>
              <View style = {{flex: 1}} />
              <Text style = {{fontSize: 12,textAlign:'center',width: 40}}>
                {totalTime[0] + ":" + totalTime[1]}
              </Text>
            </View>
            <Slider
              onSlidingStart = {() => this.setState({shouldPlay: false})}
              onSlidingComplete = {this.seek.bind(this)}
              style = {{width:'100%',marginTop:-12}}
              maximumValue = {this.state.total}
              value = {this.state.working}
              trackStyle = {{height:2,borderRadius:1}}    
            />
          </View>
          <Controls 
            onPressPlay = {() => this.setState({shouldPlay: true})}
            onPressPause = {() => this.setState({shouldPlay: false})}
            onPressBack = {this.backButton.bind(this)}
            onPressForward = {this.forwardButton.bind(this)} 
            onPressLooping = {() => this.setState({isLooping:true,shuffle:false,finish:false})}
           // onPressNotLooping = {() => this.setState({isLooping:false})}
            onPressShuffle = {() => this.setState({shuffle:true, isLooping:false,finish:false})}
            //onPressNotShuffle = {() => this.setState({shuffle:false})} 
            isLooping = {this.state.isLooping}
            shuffle={this.state.shuffle}
            shouldPlay = {this.state.shouldPlay}
            finish={this.state.finish}
            onPressFinishNext = {() => this.setState({finish:true,shuffle:false})}
          />
        </View>
      </View>
    );
  }
}

const Details = ({
  TacPham,
  TacGia,
  onTenNhacPress,
  onTacGiaPress,
}) => (
  <View style={styles.container1}>
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:18,textAlign:'center',fontWeight:'bold'}} onPress={onTenNhacPress} >{TacPham}</Text>
      <Text style={{fontSize:14,marginTop:4}} onPress={onTacGiaPress} >{TacGia}</Text>
    </View>
  </View>
);

const Controls = ({
  onPressLooping,
  onPressNotLooping,
  isLooping,
  shouldPlay,
  shuffle,
  onPressPlay,
  onPressPause,
  onPressBack,
  onPressForward,
  onPressShuffle,
  onPressNotShuffle,
  onPressFinishNext,
  finish
}) => (
  <View style={styles.container2}>
    { isLooping ?
      ( shuffle ?
        ( finish ?
          <TouchableOpacity onPress={onPressLooping}>
            <Image style={styles.image} source={require('./assets/looping-icon.png')} />
          </TouchableOpacity>
          :
          <TouchableOpacity onPress={onPressFinishNext}>
            <Text style={{height:30,width:30}}>NEXT</Text>
          </TouchableOpacity>
        )
        :
        <TouchableOpacity onPress={onPressShuffle}>
          <Image style={styles.image} source={require('./assets/shuffle-icon.png')} />
        </TouchableOpacity>
      )
      :
      ( shuffle ?
        ( finish ?
          <TouchableOpacity onPress={onPressLooping}>
            <Image style={styles.image} source={require('./assets/looping-icon.png')} />
          </TouchableOpacity>
          :
          <TouchableOpacity onPress={onPressFinishNext}>
            <Text style={{height:30,width:40}}>NEXT</Text>
          </TouchableOpacity>
        )
        :
        <TouchableOpacity onPress={onPressLooping}>
          <Image style={styles.image} source={require('./assets/looping-icon.png')} />
        </TouchableOpacity>
      )
    }
    
    <View style={{width:25}} />
    <TouchableOpacity onPress={onPressBack}>
        <Image style={styles.image} source={require('./assets/back-previous-icon.png')} />
    </TouchableOpacity>
    {shouldPlay ?
      <TouchableOpacity onPress={onPressPause}>
        <View style={styles.playButton}>
          <Image style={styles.image} source={require('./assets/pause-icon.png')} />
        </View>
      </TouchableOpacity> 
      : 
      <TouchableOpacity onPress={onPressPlay}>
        <View style={styles.playButton}>
          <Image style={styles.image} source={require('./assets/play-icon.png')} />
        </View>
      </TouchableOpacity>
    }
    <TouchableOpacity onPress={onPressForward}>
        <Image style={styles.image} source={require('./assets/next-forward-icon.png')} />
    </TouchableOpacity>
    <View style={{width:50}} />
  </View>

);

const styles = StyleSheet.create({
  container1: {
    paddingTop: 24,
    flexDirection: 'row',
    paddingLeft: 20,
    alignItems: 'center',
    paddingRight: 20,
  },
  container2: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 8,
  },
  playButton: {
    height: 72,
    width: 72,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 72 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    height:40,
    width:40,
  },
});


    headerLeft:(
      <TouchableOpacity onPress={() => {navigation.goBack()} }>
        <Image
          style={{width:30,height:30}} 
          source={require('./assets/go-back-icon.png')} />
      </TouchableOpacity>
    )
  });
  
  render() {
    const elapsed=minutesAndSeconds(this.state.working);
    const totalTime=minutesAndSeconds(this.state.total);
    const music = this.state.isChanging ? null : (
      <Video
        ref = {ref=>this.vid=ref}
        source = {{uri:MusicData[this.state.currentMusic].audioUrl}}
        shouldPlay = {this.state.shouldPlay}
        resizeMode="cover"
        isLooping = {this.state.isLooping}
        onPlaybackStatusUpdate={(e) => {this.musicStatus(e)}}
        style={  { width: 0, height: 0 } }
      />
    )

    return (
      <View style={{flex: 1}}>
        <View style={{height: '75%'}}>
            <View style={{paddingLeft: 24, paddingRight: 24, justifyContent: 'center', alignItems: "center"}}>
              <TouchableOpacity>
                <Image 
                  style = {{height: 300 ,width: 300 }} 
                  source =  {this.state.loadImage 
                              ? {uri: MusicData[this.state.currentMusic].imgUrl} 
                              : require('./assets/image-not-found-icon.png')
                            } 
                  onError = {this.loadImageError.bind(this)}  
                />
              </TouchableOpacity>
            </View>
            {music}
          <Details 
            TacPham = {MusicData[this.state.currentMusic].TacPham} 
            TacGia = {MusicData[this.state.currentMusic].TacGia} 
          />
        </View>
        <View style={{flex:1,height:'25%'}}>
          <View style = {{paddingLeft:16, paddingRight:16, paddingTop:16}}>
            <View style = {{flexDirection: 'row'}}>
              <Text style = {{fontSize: 12, textAlign:'center'}}>
                {elapsed[0] + ":" + elapsed[1]}
              </Text>
              <View style = {{flex: 1}} />
              <Text style = {{fontSize: 12,textAlign:'center',width: 40}}>
                {totalTime[0] + ":" + totalTime[1]}
              </Text>
            </View>
            <Slider
              onSlidingStart = {() => this.setState({shouldPlay: false})}
              onSlidingComplete = {this.seek.bind(this)}
              style = {{width:'100%',marginTop:-12}}
              maximumValue = {this.state.total}
              value = {this.state.working}
              trackStyle = {{height:2,borderRadius:1}}    
            />
          </View>
          <Controls 
            onPressPlay = {() => this.setState({shouldPlay: true})}
            onPressPause = {() => this.setState({shouldPlay: false})}
            onPressBack = {this.backButton.bind(this)}
            onPressForward = {this.forwardButton.bind(this)} 
            onPressLooping = {() => this.setState({isLooping:true, shuffle:false})}
            onPressNotLooping = {() => this.setState({isLooping:false})}
            onPressShuffle = {() => this.setState({shuffle:true, isLooping:false})}
            onPressNotShuffle = {() => this.setState({shuffle:false})} 
            isLooping = {this.state.isLooping}
            shuffle={this.state.shuffle}
            shouldPlay = {this.state.shouldPlay}
          />
        </View>
      </View>
    );
  }
}

const Details = ({
  TacPham,
  TacGia,
  onTenNhacPress,
  onTacGiaPress,
}) => (
  <View style={styles.container1}>
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:18,textAlign:'center',fontWeight:'bold'}} onPress={onTenNhacPress} >{TacPham}</Text>
      <Text style={{fontSize:14,marginTop:4}} onPress={onTacGiaPress} >{TacGia}</Text>
    </View>
  </View>
);

const Controls = ({
  onPressLooping,
  onPressNotLooping,
  isLooping,
  shouldPlay,
  shuffle,
  onPressPlay,
  onPressPause,
  onPressBack,
  onPressForward,
  onPressShuffle,
  onPressNotShuffle,
}) => (
  <View style={styles.container2}>
    { isLooping ? 
      <TouchableOpacity onPress={onPressNotLooping}>
        <Image style={styles.image} source={require('./assets/looping-blue-icon.png')} />
      </TouchableOpacity>
      :
      <TouchableOpacity onPress={onPressLooping}>
        <Image style={styles.image} source={require('./assets/looping-icon.png')} />
      </TouchableOpacity>
    }
    <View style={{width:25}} />
    <TouchableOpacity onPress={onPressBack}>
        <Image style={styles.image} source={require('./assets/back-previous-icon.png')} />
    </TouchableOpacity>
    {shouldPlay ?
      <TouchableOpacity onPress={onPressPause}>
        <View style={styles.playButton}>
          <Image style={styles.image} source={require('./assets/pause-icon.png')} />
        </View>
      </TouchableOpacity> 
      : 
      <TouchableOpacity onPress={onPressPlay}>
        <View style={styles.playButton}>
          <Image style={styles.image} source={require('./assets/play-icon.png')} />
        </View>
      </TouchableOpacity>
    }
    <TouchableOpacity onPress={onPressForward}>
        <Image style={styles.image} source={require('./assets/next-forward-icon.png')} />
    </TouchableOpacity>
    {shuffle ?
      <TouchableOpacity onPress={onPressNotShuffle}>
        <View style={styles.playButton}>
          <Image style={styles.image} source={require('./assets/shuffle-blue-icon.png')} />
        </View>
      </TouchableOpacity> 
      : 
      <TouchableOpacity onPress={onPressShuffle}>
        <View style={styles.playButton}>
          <Image style={styles.image} source={require('./assets/shuffle-icon.png')} />
        </View>
      </TouchableOpacity>
    }
  </View>
);

const styles = StyleSheet.create({
  container1: {
    paddingTop: 24,
    flexDirection: 'row',
    paddingLeft: 20,
    alignItems: 'center',
    paddingRight: 20,
  },
  container2: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 8,
  },
  playButton: {
    height: 72,
    width: 72,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 72 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    height:40,
    width:40,
  },
});

