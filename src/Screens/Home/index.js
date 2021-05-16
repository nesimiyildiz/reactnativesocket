import React, {Component} from 'react';
import {FlatList, StyleSheet, SafeAreaView, View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app';
import Icon from 'react-native-vector-icons/FontAwesome5';
import database from "@react-native-firebase/database";
import RoomItem from "../../Components/Rooms/RoomItem";
export default class Index extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitleStyle: {alignSelf: 'center'},
      title: 'Rooms',
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            auth()
              .signOut()
              .then(() => {
                navigation.navigate('Auth');
              });
          }}
          style={{marginRight: 15, padding: 5}}>
          <Icon color={'#ddd'} name={'sign-out-alt'} size={25} />
        </TouchableOpacity>
      ),
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ChatRoomCreate');
          }}
          style={{marginLeft: 15, padding: 5}}>
          <Icon color={'#ddd'} size={25} name={'plus'} />
        </TouchableOpacity>
      ),
    };
  };
  constructor() {
      super();
      this.state={
          rooms:[]
      };
  }
  getData=()=>{
      database()
          .ref('/rooms/')
          .orderByChild('name')
          .on('value',snapshot=> {
              var rooms=[]
              snapshot.forEach((item)=> {
                  rooms.push({
                      name:item.val().name,
                      userName:item.val().userName,
                      userId:item.val().userId,
                      id:item.key
                  })

              })
              this.setState({rooms});

          });
  }
  componentDidMount() {

    const user = firebase.auth().currentUser;
      this.getData();
      /*this.props.navigation.addListener('willFocus',()=>{
          this.getData();
      })*/
  }

  renderItem=({item})=>{
      return <RoomItem item={item}/>
  }

  render() {

    return <SafeAreaView style={{flex:1}}>
        <FlatList style={{flex:1,padding:5}} data={this.state.rooms}
                  renderItem={this.renderItem}/>
    </SafeAreaView>
  }
}
