import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList, SegmentedControlIOS
} from 'react-native';
import { Image, SearchBar  } from 'react-native-elements';
import { MonoText } from '../components/StyledText';
import { Component } from 'react';


const DATA = [
  {
    id: '1',
    title: 'First Notify',
    text: 'qweqweqweqweqwe'
  },
  {
    id: '2',
    title: 'Second Notify',
    text: 'qweqweqweqweqwe'
  },
  {
    id: '3',
    title: 'Third Notify',
    text: 'qweqweqweqweqwe'
  },
  {
    id: '4',
    title: 'First Notify',
    text: 'qweqweqweqweqwe'
  },
  {
    id: '5',
    title: 'Second Notify',
    text: 'qweqweqweqweqwe'
  },
  {
    id: '6',
    title: 'Third Notify',
    text: 'qweqweqweqweqwe'
  },
  {
    id: '7',
    title: 'First Notify',
    text: 'qweqweqweqweqwe'
  },
  {
    id: '8',
    title: 'Second Notify',
    text: 'qweqweqweqweqwe'
  },
  {
    id: '9',
    title: 'Third Notify',
    text: 'qweqweqweqweqwe'
  },
];

function Item({ title, text}) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>

  );
}


export default class NotificationScreen extends Component {
  state = {
    active: 1,
  };

  render(){
    return(
      <ScrollView style={styles.container}>
          <SafeAreaView style={styles.container}>
            <FlatList
              data={DATA}
              renderItem={({ item }) =>
                  <View
                      onChange={(event) => {
                        this.setState({active: item.id});}}
                  >
                  <View
                      style={this.state.active === item.id ? styles.notificationActive : styles.notification}
                  >
                    <View style={{marginTop:30, marginLeft: 30 }}>
                      <Image
                          style={{width: 40, height: 40, paddingTop: 30}}
                          source={{uri: 'https://icon-library.net/images/notification-icon/notification-icon-3.jpg'}}
                      />
                    </View>
                  <Item title={item.title} text={item.text}/>
                  </View>
                  </View>
              }
              keyExtractor={item => item.id}
            />
          </SafeAreaView>
      </ScrollView>
    );
  }
}

NotificationScreen.navigationOptions = {
  title: 'Уведомления',
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    color: '#fff',
  },
  notification: {
    backgroundColor: '#4169E1',
    flexDirection: 'row',
    width: 320,
    margin: 20,
    borderRadius: 10,
  },
  notificationActive :{
    backgroundColor: 'grey',
    flexDirection: 'row',
    width: 320,
    margin: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    color: '#fff'
  },
  text:{
    fontSize: 15,
    color: '#fff'
  }
});