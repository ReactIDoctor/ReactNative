import React from 'react';
import {
  ScrollView,
  StyleSheet ,
  Image,
  Text,
  View,
} from 'react-native';
import { Avatar } from 'react-native-elements';

export default function ProfileScreen() {
  return (
        <ScrollView>
            <View style={{backgroundColor: '#4169E1', height: 300, width: 380, alignItems: 'center', borderRadius: 100}}>
              <View style={{marginTop: 50}}>
              <Avatar
                  size = {100}
                  rounded
                  title="KB"
                  onPress={() => console.log("Works!")}
                  activeOpacity={0.7}
                  source={{
                    uri:
                        'https://images.unsplash.com/photo-1489084917528-a57e68a79a1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
                  }}
              />
              </View>
                <View style={styles.info}>
                  <Text style={{textAlign: 'center', marginTop: 20, fontSize: 30, color: 'white'}}>
                    Кокпанбаев Бексултан
                  </Text>
                </View>
            </View>
            <View style={{marginLeft: 20}}>
              <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                <Image
                    source={{
                      uri:
                          'https://www.iconpacks.net/icons/1/free-mail-icon-142-thumb.png'
                    }}
                    style={{width: 40, height: 40}}
                />
                <Text style={{fontSize: 20, marginLeft: 40}}>
                  beksultan@gmail.com
                </Text>
              </View>
              <View style={{height: 5, width:300, backgroundColor: '#4169E1'}} />
              <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                <Image
                    source={{
                      uri: 'https://img.icons8.com/carbon-copy/2x/phone.png'
                    }}
                    style={{width: 40, height: 40}}
                />
                <Text style={{fontSize: 20, marginLeft: 40}}>
                  +1 343 654 22
                </Text>
              </View>
              <View style={{height: 5, width:300, backgroundColor: '#4169E1'}} />
              <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                <Image
                    source={{
                      uri: 'https://icon-library.net/images/get-help-icon/get-help-icon-19.jpg'
                    }}
                    style={{width: 40, height: 40}}
                />
                <Text style={{fontSize: 20, marginLeft: 40}}>
                  Помощь
                </Text>
              </View>
              <View style={{height: 5, width:300, backgroundColor: '#4169E1'}} />
              <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                <Image
                    source={{
                      uri: 'https://cdn2.iconfinder.com/data/icons/privacy-policy/512/privacy-data-policy-security-12-512.png'
                    }}
                    style={{width: 40, height: 40}}
                />
                <Text style={{fontSize: 20, marginLeft: 20}}>
                  Политика конфиденциальности
                </Text>
              </View>
              <View style={{height: 5, width:330, backgroundColor: '#4169E1'}} />
              <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                <Image
                    source={{
                      uri: 'https://icon-library.net/images/terms-of-use-icon/terms-of-use-icon-20.jpg'
                    }}
                    style={{width: 40, height: 40}}
                />
                <Text style={{fontSize: 20, marginLeft: 40}}>
                  Правила использоания
                </Text>
              </View>
              <View style={{height: 5, width:300, backgroundColor: '#4169E1'}} />
              <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                <Image
                    source={{
                      uri: 'https://cdn1.iconfinder.com/data/icons/ecommerce-app-ui-vol-1/64/Ecommerce_App_UI-31-512.png'
                    }}
                    style={{width: 40, height: 40}}
                />
                <Text style={{fontSize: 20, marginLeft: 40}}>
                  О приложении
                </Text>
              </View>
              </View>
                <Text style={{textAlign: 'center', backgroundColor: '#4169E1', width: 200, fontSize: 30, color: 'white', borderRadius: 10, margin: 100, height: 60, padding: 10}}>
                  Выйти
                </Text>
        </ScrollView>
  );
}

ProfileScreen.navigationOptions = {
  title: 'Профиль',
};

const styles = StyleSheet.create({
  profileContainer:{
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  profileInfo:{
    marginLeft: 20,

  },
  info:{
    marginTop: 20
  },
});