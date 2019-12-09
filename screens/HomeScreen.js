import React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  SegmentedControlIOS, Button
} from 'react-native';
import { Image, SearchBar  } from 'react-native-elements';
import { Component } from 'react';
// import {connect} from "react-redux";

export default class HomeScreen extends Component {
  state = {
    search: '',
    selectedIndex: 0 
  };
  medcenters = [
    {
      id: 1,
      name: "Медицинский центр \"Gastroclinic\"",
      skills: [
        "Медицинский центр ", " Многопрофильная клиника"
      ],
      location: "ул. Шолом Алейхем, д. 19",
      time: "08:00 - 18:00",
      review: "Отличный медцентр и услужливый персонал.",
      img: "https://idoctor.kz/images/pvYKkfyT1dxsdJ1ajaCarUAdYimNJ0uMdG6icBmh_180x180.png",
      star: 385
    },
    {
      id:2,
      name: "Медицинский Центр \"Тау Сункар\" на Шаляпина\"",
      skills: [
        "Медицинский центр ", " Многопрофильная клиника ", "Стоматология "
      ],
      location: "мкр. Айнабулак-1, 1а",
      time: "08:00 - 18:00",
      review: "Хорошая клиника.Меня все устраивает",
      img: "https://idoctor.kz/images/medcenters/1/24/80XQMwlTyi17VrRKTJF0bvT63ZNyCZKACeBrNIX9.gif",
      star: 114
    },
    {
      id:3,
      name: "Медицинский центр \"РАДА\" на Торайгырова",
      skills: [
        "Медицинский центр ", " Многопрофильная клиника ", "Травмпункт "
      ],
      location: "ул.Торайгырова, 49/1",
      time: "09:00 - 18:00",
      review: "Удобный район, чистая клиника и самое главное вежливый персонал. Я считаю, что врачи в этой клинике- профессионалы",
      img: "https://idoctor.kz/images/medcenters/1/108/B8KJLkMaR827exsBUwooaGj6zBpC1X2jAPEInmuT_180x180.png",
      star: 271
    },
    {
      id:4,
      name: "Центральная семейная поликлиника г. Алматы",
      skills: [
        "Поликлиника", " Центр семейного здоровья", " Глазная клиника"
      ],
      location: "ул. Толе би, д. 249-249а, 1 этаж, Тастак 2",
      time: "08:00 - 20:00 ",
      review: "Здесь недавно, клиника нравится, запись без проблем, прием во время.",
      img: "https://idoctor.kz/images/medcenters/1001/569/3pptrOVV42MPZmFmkARqLZBW7fMLaGWwswu3dhPn_180x180.png",
      star: 14
    },
    {
      id:5,
      name: "Медицинский Центр \"Emirmed\"",
      skills: [
        "Медицинский центр ", " Многопрофильная клиника ", " Глазная клиника"
      ],
      location: "ул. Манаса, 59 (уг. Жандосова)",
      time: "00:00 - 00:00 ",
      review: "Хорошая клиника. Все врачи добрые и отзывчивые",
      img: "https://idoctor.kz/images/AoYyPMH179N7tp6NxO3CqBp5MyKfQd4NWNZJehMH_180x180.png",
      star: 231
    },
    {
      id:6,
      name: "Медицинский Центр \"Авторская Медицина\"",
      skills: [
        "Травмпункт ", " Глазная клиника"
      ],
      location: "ул. Карасай батыра, 152 (уг. Нурмакова)",
      time: "09:00 - 17:00",
      review: "Не так давно я обратилась за помощью к Зинаиде Григорьевне и ни капли не пожалела. Я люблю когда все чётко и по делу, в наше время к",
      img: "https://idoctor.kz/images/medcenters/1/96/JI9qOrf1TuzAfCCStsGtelSEYEWge83ZjkhdvvyO_180x180.png",
      star: 5
    },
    {
      id:7,
      name: "Медицинский центр \"АМИТРУД ДАРИГА\" на Казыбек би",
      skills: [
        " Медицинский центр", "Многопрофильная клиника "
      ],
      location: "ул. Казыбек би, 20Б",
      time: "08:00 - 17:00 ",
      review: "Хорошая клиника. Есть парковка. Есть оплата безнал. Удобно расположен. Есть стационар и врачи все доценты, К.М.Н. и профессора.",
      img: "https://idoctor.kz/images/optimized/shH21wfoVRyQQfvElms0R5V2bFf18DDH4zL7hdnn_180x180-q-85.jpeg",
      star: 1
    },
    {
      id:8,
      name: "Городской центр репродукции человека",
      skills: [
        "Центр планирования семьи", "Мужское и женское здоровье "
      ],
      location: "ул. Жибек-Жолы, 124",
      time: "08:00 - 19:00",
      review: "Врач Опара Н В 💪🏻👍🏻",
      img: "https://idoctor.kz/images/0F0zcwU3viF8msvH95KEZTEn4PbIY5f7iVQXdb5y.gif",
      star: 1
    },
    {
      id:9,
      name: "Медицинский Центр \"Тау Сункар\" на Розыбакиева",
      skills: [
        "Медицинский центр", "Многопрофильная клиника"
      ],
      location: "",
      time: "09:00 - 17:00",
      review: "Врач от бога! Профессионал своего дела💪",
      img: "https://idoctor.kz/images/medcenters/1/295/DkBwbxH5yJZib5cLb9rNJv3BGFdDv4TVlxBCW7FC.gif",
      star: 1
    }
  ]
  updateSearch = search => {
    this.setState({ search });
  };

  render(){
    const { search } = this.state;
    const {navigate} = this.props.navigation;
    let { medcenters } = this;


    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
            <View>
              <View style={{flexDirection: 'row', marginLeft: 150}}>
                <Button
                    title='Войти'
                    onPress={() => navigate('SignIn')}
                />
                  <Button
                      title='Регистрация'
                      onPress={() => navigate('Register')}
                  />
              </View>
              <View>
                <SearchBar
                    placeholder="Type Here..."
                    onChangeText={this.updateSearch}
                    value={search}
                />
              </View>
              <View>
                <Text style={styles.homeTitle}>Бесплатный сервис по поиску {this.state.selectedIndex === 0 ? 'врачей' : 'медцентров'} в Алматы</Text>
              </View>
              <SegmentedControlIOS
                  tintColor="#1f8efa"
                  values={['Врачи','Медцентры']}
                  selectedIndex={this.state.selectedIndex}
                  onChange={(event) => {
                    this.setState({selectedIndex: event.nativeEvent.selectedSegmentIndex});}}
              />
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
                    <Text style={styles.QuoterTitle}>Мы поможем найти проверенного врача и записаться на прием в удобное
                      для Вас время </Text>
                  </View>
              {this.state.selectedIndex === 0 ?
                  <View style={styles.doctorList}>
                    <View style={styles.doctorListItem}>
                      <Image
                          source={{uri: 'https://idoctor.kz/img/skills/nevrolog_140x140.png'}}
                          style={{width: 100, height: 100, borderRadius: 100}}
                      />
                      <View style={styles.doctorItem}>
                        <Text style={styles.ratingTitle}>Невролог</Text>
                        <Text style={styles.ratingTitle}>(Невропатолог)</Text>
                        <Text style={styles.doctorCount}>234 врача</Text>
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
                  :
                  <View>
                    <FlatList
                        data={medcenters}
                        renderItem={({ item }) => (
                            <View style={{backgroundColor: '#E8E8E8', marginTop: 20, paddingBottom: 20, borderRadius: 10}}>
                              <View style={{flexDirection: 'row', marginLeft: 20, marginTop: 40}}>
                                <Image
                                    source={{uri: `${item.img}` }}
                                    style={{width: 120, height: 120}}
                                />
                                <View>
                                    <Text style={{textAlign:'center', fontWeight: 'bold', fontSize: 15, width: 200, marginTop: 10}}>{item.name}</Text>
                                    <View style={{flexDirection: "row", marginTop: 10}}>
                                    <Image
                                        style={{width: 150, height: 30, marginLeft: 10}}
                                        source={{uri: 'https://icon-library.net/images/star-rating-icon/star-rating-icon-7.jpg'}}
                                    />
                                    <Text style={{fontSize: 15, fontWeight: 'bold'}}>5.00</Text>
                                    </View>
                                </View>
                              </View>
                                <View>
                                    <View style={{flexDirection: 'row', marginLeft: 60, marginTop: 20}}>
                                        <Image
                                            source={{uri: 'https://i7.pngguru.com/preview/227/735/613/computer-icons-map-symbol-map-icon.jpg'}}
                                            style={{width: 40, height: 40}}
                                        />
                                        <Text style={{width: 220, fontSize: 15, marginLeft: 30, marginTop: 20}}>{item.location}</Text>
                                    </View>
                                    <View style={{flexDirection: 'row', marginLeft: 60, marginTop: 20}}>
                                        <Image
                                            source={{uri: 'https://icon-library.net/images/icon-clock/icon-clock-21.jpg'}}
                                            style={{width: 40, height: 40}}
                                        />
                                        <Text style={{width: 220, fontSize: 15, marginLeft: 30, marginTop: 20}}>{item.time}</Text>
                                    </View>
                                </View>
                            </View>
                        )}
                        keyExtractor={item => `${item.id}`}
                    />
                  </View>
              }
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
    marginTop: 50
  }
});

// const mapStateToProps = (state) => ({
//   medcenters: state.medcenters.medcenters,
//   doctors: state.doctors.doctors,
// })
//
//
// export default connect(
//     mapStateToProps,
// )(HomeScreen);