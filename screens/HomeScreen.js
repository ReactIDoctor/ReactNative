import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SegmentedControlIOS
} from 'react-native';

import { SearchBar } from 'react-native-elements';


import { MonoText } from '../components/StyledText';
import { Component } from 'react';

export default class HomeScreen extends Component {
  state = {
    search: '',
    selectedIndex: 0 
  };

  updateSearch = search => {
    this.setState({ search });
  };

  // getInitialState() {
  //   return {
  //     values: ['One', 'Two',],
  //     value: 'Not selected',
  //     selectedIndex: undefined
  //   };
  // }

  render(){
    const { search } = this.state;

    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>

          <SearchBar
            platform='ios'
            placeholder="Поиск..."
            onChangeText={this.updateSearch}
            value={search}
            inputContainerStyle ='#fff'
          />
    
            <View>
              <SegmentedControlIOS
                tintColor="#1f8efa"
                // values={this.state.values}
                values={['Врачи','Медцентры']}
                selectedIndex={this.state.selectedIndex}
                onChange={(event) => {
                  this.setState({selectedIndex: event.nativeEvent.selectedSegmentIndex});
                }}
                // onValueChange={(value)=> {
                //   this.setState({
                //     value:value,
                //   })
                // }}
              />
  
            </View>
        </ScrollView>
        
        
      </View>
    );

  }

}

HomeScreen.navigationOptions = {
  title: 'Главная',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
});
