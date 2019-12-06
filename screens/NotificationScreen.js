import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList
} from 'react-native';

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
  render(){
    return(
      <ScrollView style={styles.container}>
          <SafeAreaView style={styles.container}>
            <FlatList
              data={DATA}
              renderItem={({ item }) => <Item title={item.title} text={item.text}/>}
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
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
  },
  text:{
    fontSize: 15,
  }
});