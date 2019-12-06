import React from 'react';
import { 
  ScrollView,
  StyleSheet ,
  Image,
  Platform,
  Text,
  TouchableOpacity,
  View,
  Button
} from 'react-native';
import { Avatar } from 'react-native-elements';
import { ExpoLinksView } from '@expo/samples';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
       style={styles.container}
       contentContainerStyle={styles.contentContainer}>
        <View style={styles.profileContainer} >

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

          <View style={styles.profileInfo}>
            <View style={styles.info}>
              <Text style={styles.infoStyle}>
                Кокпанбаев Бексултан
              </Text>
            </View>

            <View style={styles.info}>
              <Text style={styles.infoStyle}>
                E-mail: beksultan@gmail.com
              </Text>

            <View style={styles.info}>
              <Text style={styles.infoStyle}>
                Номер телефонвЖ +1 343 654 22
              </Text>
            </View>
              
            <View style={styles.info}>
              <Text style={styles.infoStyle}>
                Помощь
              </Text>
            </View>
          </View>
            
            <View style={styles.info}>
              <View>
                <Text style={styles.infoStyle}>
                  Политика конфиденциальности
                </Text>
              </View>

              <View style={styles.info}>
                <Text style={styles.infoStyle}>
                  Правила использоания
                </Text>
              </View>

              <View style={styles.info}>
                <Text style={styles.infoStyle}>
                  О приложении
                </Text>
              </View>
            </View>

            <View style={styles.info}>
              <Text style={styles.infoStyle}>
                Выйти
              </Text>
            </View>
          </View>



        </View>


      </ScrollView>
    </View>
  );
}

ProfileScreen.navigationOptions = {
  title: 'Профиль',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
   
  },
  contentContainer: {
    paddingTop: 30,

  },
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
  infoStyle:{
    fontSize:20,
  }
});