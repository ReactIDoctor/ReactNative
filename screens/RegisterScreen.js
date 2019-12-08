import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text, Button, TextInput } from 'react-native';
import { Image  } from 'react-native-elements';


export default class RegistrationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '' ,phone: '', password: '' };

  };
  onSubmit = () => {
    const {phone, password, name } = this.state;

    if(name !== '' &&  phone !== '' && password !== '' ){
      this.props.navigation.navigate('Home');
    }
  }

  render() {
    const {phone, password, name} = this.state;
    return (
        <View style={{backgroundColor: '#fafbfd'}}>
          <Image
              style={{height: 200, width: 400}}
              source={{uri: 'https://cabinet.idoctor.kz/img/bg/mobile.png'}}
          />
          <View style={{position: 'absolute', top: 100, left: 120 }}>
            <Text style={{color: 'white', width: 150, fontSize: 20, textAlign: 'center'}}>Регистрация нового пользователя</Text>
            <Image
                style={{height: 100, width: 100}}
                source={{uri: 'https://cabinet.idoctor.kz/img/auth_img.png'}}
            />
          </View>
          <View style={{alignSelf: 'center', marginTop: 80}}>
            <Text style={{fontSize: 15, textAlign: 'left', marginBottom: 10}}>Ваше имя:</Text>
            <TextInput
                style={{height: 40, width: 250, borderColor: 'gray', borderRadius: 10, borderWidth: 1}}
                onChangeText={(name) => this.setState({name})}
                value={this.state.name}
            />
            <Text style={{fontSize: 15, textAlign: 'left', marginBottom: 10}}>Ваш телефон:</Text>
            <TextInput
                style={{height: 40, width: 250, borderColor: 'gray', borderRadius: 10, borderWidth: 1}}
                onChangeText={(phone) => this.setState({phone})}
                value={this.state.phone}
            />
            <Text style={{fontSize: 15, textAlign: 'left', marginBottom: 10, marginTop: 20}}>Ваш пароль:</Text>
            <TextInput
                style={{height: 40, width: 250, borderRadius: 10, borderColor: 'gray', borderWidth: 1}}
                onChangeText={(password) => this.setState({password})}
                value={this.state.password}
            />
            <Button title='Зарегистрироваться' onPress={this.onSubmit}/>
            <Button title='Назад' onPress={()=> {this.props.navigation.navigate('Home')}}/>
          </View>
        </View>
    )
  }
}
