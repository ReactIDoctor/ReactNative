import React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SegmentedControlIOS
} from 'react-native';
import { Image, SearchBar  } from 'react-native-elements';
import { Component } from 'react';

export default class HomeScreen extends Component {
  state = {
    search: '',
    selectedIndex: 0 
  };
  updateSearch = search => {
    this.setState({ search });
  };

  render(){
    const { search } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
            <View>
              <SegmentedControlIOS
                tintColor="#1f8efa"
                values={['Врачи','Медцентры']}
                selectedIndex={this.state.selectedIndex}
                onChange={(event) => {
                  this.setState({selectedIndex: event.nativeEvent.selectedSegmentIndex});}}
              />
              <View>
                <Text style={styles.homeTitle}>Бесплатный сервис по поиску врачей в Алматы</Text>
              </View>
              <View>
                <SearchBar
                    placeholder="Type Here..."
                    onChangeText={this.updateSearch}
                    value={search}
                />
              </View>
              <View style={styles.ratingWrap}>
                <View style={styles.rating}>
                  <Image source={{uri: 'https://cdn1.iconfinder.com/data/icons/health-51/24/healthcare-stethoscope-doctor-heart-health-exam-checkin-512.png'}}
                          style={{width: 40, height: 40, marginRight: 20}}
                  />
                  <Text style={styles.ratingCountNumber}>13 987</Text>
                  <Text style={styles.ratingTitle}> Врачей работают с нами</Text>
                </View>
                <View style={styles.rating}>
                  <Image source={{uri: 'https://cdn2.iconfinder.com/data/icons/city-landscape-1/100/City_Landscape-28-512.png'}}
                         style={{width: 40, height: 40, marginRight: 10}}
                  />
                  <Text style={styles.ratingCountNumber}>5210</Text>
                  <Text style={styles.ratingTitle}>  Клиник работают с нами</Text>
                </View>
                <View style={styles.rating}>
                  <Image source={{uri: 'https://icon-library.net/images/heart-icon/heart-icon-11.jpg'}}
                         style={{width: 40, height: 40, marginRight: 20}}
                  />
                  <Text style={styles.ratingCountNumber}>12 008</Text>
                  <Text style={styles.ratingTitle}>Реальных отзывов</Text>
                </View>
                <Text style={styles.ratingQuater}>Найти проверенного врача - Легко!</Text>
              </View>
              <View style={styles.doctor}>
                <Text style={styles.Quoter}>Быть здоровым - просто!</Text>
                <Text style={styles.QuoterTitle}>Мы поможем найти проверенного врача и записаться на прием в удобное для Вас время </Text>
              </View>
              <View style={styles.doctorList}>
                <View style={styles.doctorListItem}>
                  <Image
                      source={{uri: 'https://idoctor.kz/img/skills/nevrolog_140x140.png'}}
                      style={{width: 100, height: 100, borderRadius: 100}}
                  />
                  <View style={styles.doctorItem}>
                    <Text style={styles.ratingTitle}>Невролог</Text>
                    <Text style={styles.ratingTitle}>(Невропатолог)</Text>
                    <Text style={styles.doctorCount}>234  врача</Text>
                  </View>
                </View>
                <View style={styles.doctorListItem}>
                  <Image
                      source={{uri: 'https://idoctor.kz/img/skills/gematolog_140x140.png'}}
                      style={{width: 100, height: 100, borderRadius: 100}}
                  />
                  <View style={styles.doctorItem}>
                    <Text style={styles.ratingTitle}>Гинеколог</Text>
                    <Text style={styles.doctorCount}>228 врача</Text>
                  </View>
                </View>
                <View style={styles.doctorListItem}>
                  <Image
                      source={{uri: 'https://idoctor.kz/img/skills/gastroenterolog_140x140.png'}}
                      style={{width: 100, height: 100, borderRadius: 100}}
                  />
                  <View style={styles.doctorItem}>
                    <Text style={styles.ratingTitle}>Гастроэнтеролог</Text>
                    <Text style={styles.doctorCount}>117 врача</Text>
                  </View>
                </View>
                <View style={styles.doctorListItem}>
                  <Image
                      source={{uri: 'https://idoctor.kz/img/skills/dermatolog_140x140.png'}}
                      style={{width: 100, height: 100, borderRadius: 100}}
                  />
                  <View style={styles.doctorItem}>
                    <Text style={styles.ratingTitle}>Дерматолог</Text>
                    <Text style={styles.doctorCount}>148 врача</Text>
                  </View>
                </View>
                <View style={styles.doctorListItem}>
                  <Image
                      source={{uri: 'https://idoctor.kz/img/skills/urolog_140x140.png'}}
                      style={{width: 100, height: 100, borderRadius: 100}}
                  />
                  <View style={styles.doctorItem}>
                    <Text style={styles.ratingTitle}>Уролог</Text>
                    <Text style={styles.doctorCount}>191 врача</Text>
                  </View>
                </View>
              </View>
              <View style={styles.anketaBlank}>
                  <Text style={{textAlign: 'center', fontSize: 30, color: 'white', marginTop: 30}}>Хотите разместить анкету врача или клиники на сайте?</Text>
                  <View style={{flexDirection: 'row', marginTop: 30}}>
                    <Image
                        source={{uri: 'https://idoctor.kz/img/partner_step1.png'}}
                        style={{width: 80, height: 80}}
                    />
                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20, width: 240, marginLeft: 10}}>Пройдите регистрацию в Личном кабинете</Text>
                  </View>
                <View style={{flexDirection: 'row', marginTop: 30}}>
                  <Image
                      source={{uri: 'https://idoctor.kz/img/partner_step2.png'}}
                      style={{width: 80, height: 80}}
                  />
                  <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20, width: 240, marginLeft: 10}}>Загрузите подтверждающие документы</Text>
                </View>
                <View style={{flexDirection: 'row', marginTop: 30}}>
                  <Image
                      source={{uri: 'https://idoctor.kz/img/partner_step3.png'}}
                      style={{width: 80, height: 80}}
                  />
                  <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20, width: 240, marginLeft: 10}}>Начинайте получать записи на прием - БЕСПЛАТНО</Text>
                </View>
                <Text style={{backgroundColor: '#dae2ec', height: 40, width: 220, marginLeft: 90, marginTop: 40, borderRadius: 6, padding: 10, paddingLeft: 30}}>Разместить анкету</Text>
              </View>
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
  homeTitle: {
    color: '#1f8efa',
    marginTop: 50,
    marginBottom: 50,
    textAlign: 'center',
    fontSize: 40,
  },
  ratingWrap: {
    marginTop: 10,
  },
  rating: {
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 30,
  },
  ratingCountNumber: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  ratingTitle: {
    fontSize: 20,
  },
  ratingQuater: {
    fontSize: 25,
    marginTop: 50,
    marginBottom: 50,
    textAlign: 'center',
  },
  doctor: {
    marginTop: 30,
    marginLeft: 20,
  },
  Quoter: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  QuoterTitle: {
    fontSize: 15,
    color: '#919bab',
    marginTop: 50,
    textAlign: 'center',
  },
  doctorList: {
    marginTop: 100,
  },
  doctorListItem: {
    flexDirection: 'row',
    marginLeft: 30,
    marginTop: 50,
  },
  doctorItem: {
    marginLeft: 40,
  },
  doctorCount: {
    backgroundColor: '#f3f5f7',
    width: 100,
    height: 35,
    fontSize: 20,
    borderRadius: 6,
    marginTop: 10,
    textAlign: 'center',
  },
  anketaBlank: {
    height: 600,
    backgroundColor: '#1f8efa',

  }
});
