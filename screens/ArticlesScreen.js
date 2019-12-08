import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { Image, SearchBar  } from 'react-native-elements';

export default class  ArticlesScreen extends Component{
  state = {
    search: '',
    selectedIndex: 0
  };
  updateSearch = search => {
    this.setState({ search });
  };
  render() {
    const { search } = this.state;
    return (
        <ScrollView style={styles.container}>
          <View>
            <SearchBar
                placeholder="Type Here..."
                onChangeText={this.updateSearch}
                value={search}
            />
          </View>
          <View>
            <Text style={{fontSize: 40, textAlign: 'center', marginTop: 32}}>События в области медицины</Text>
            <View style={{margin: 50}}>
              <View style={{width: 300, marginTop: 35, backgroundColor: 'white'}}>
                <Image source={{uri: 'https://idoctor.kz/manager/images/optimized/45a24f631dea861309f4df139f8af760_540x320-q-85.jpg'}}
                style={{width: 300, height: 210}}/>
                <Text style={{fontSize: 25, margin: 30}}>Топ-4 вопроса об обязательном медицинском страховании</Text>
                <Text style={{color: '#999', borderTopColor: 'rgba(0,0,0,.1)', borderBottomWidth: 2, textAlign: 'center', width: 300, height: 30}}>27 ноя 2019</Text>
              </View>
              <View style={{width: 300, marginTop: 35, backgroundColor: 'white'}}>
                <Image source={{uri: 'https://idoctor.kz/manager/images/optimized/490a3ee978f1c35c2ca3debd0a9c8605_540x320-q-85.jpg'}}
                       style={{width: 300, height: 210}}/>
                <Text style={{fontSize: 25, margin: 30}}>Поздние ужины вредят здоровью сердца женщин</Text>
                <Text style={{color: '#999', borderTopColor: 'rgba(0,0,0,.1)', borderBottomWidth: 2, textAlign: 'center', width: 300, height: 30}}>18 ноя 2019</Text>
              </View>
              <View style={{width: 300, marginTop: 35, backgroundColor: 'white'}}>
                <Image source={{uri: 'https://idoctor.kz/manager/images/optimized/ffcfb0faac1791a1c05582312599ade1_540x320-q-85.jpg'}}
                       style={{width: 300, height: 210}}/>
                <Text style={{fontSize: 25, margin: 30}}>Какие профессии опасны для сердца женщин</Text>
                <Text style={{color: '#999', borderTopColor: 'rgba(0,0,0,.1)', borderBottomWidth: 2, textAlign: 'center', width: 300, height: 30}}>12 ноя 2019</Text>
              </View>
              <View style={{width: 300, marginTop: 35, backgroundColor: 'white'}}>
                <Image source={{uri: 'https://idoctor.kz/manager/images/optimized/bec2e8c62bec5ff28efdafedc2ab0d64_540x320-q-85.jpg'}}
                       style={{width: 300, height: 210}}/>
                <Text style={{fontSize: 25, margin: 30}}>Как застраховаться от рака</Text>
                <Text style={{color: '#999', borderTopColor: 'rgba(0,0,0,.1)', borderBottomWidth: 2, textAlign: 'center', width: 300, height: 30}}>11 ноя 2019</Text>
              </View>
            </View>
          </View>
        </ScrollView>
    );
  }
}

ArticlesScreen.navigationOptions = {
  title: 'Статьи',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#f8f9fa',
  },
});
