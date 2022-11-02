import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const URL = 'http://restapi.adequateshop.com/api/authaccount/login';

  const loginHandle = async () => {
    if (email === '') {
      console.warn('error');
      alert('Please enter your email');
    } else if (password === '') {
      alert('Please enter your password');
    }
    try {
      await fetch(URL, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
        .then(res => res.json())
        .then(res => {
          if (res.message === 'success') {
            AsyncStorage.setItem('user_id', res.data);
            navigation.replace('Dashboard');
          } else {
            console.warn('Please check your email id or password');
          }
        });
    } catch (error) {
      console.warn(error);
    }
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/images/friends.png')}
      />
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          onChangeText={email => setEmail(email)}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          style={styles.TextInput}
          value={email}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          onChangeText={password => setPassword(password)}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          style={styles.TextInput}
          value={password}
        />
      </View>
      {/* <TouchableOpacity>
        <Text style={styles.forget_button}>Forget Password</Text>
      </TouchableOpacity> */}
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText} onPress={loginHandle}>
          LogIn
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#307ecc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    marginTop: 40,
    marginBottom: 40,
    width: '40%',
    height: 150,
  },
  inputView: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    width: '70%',
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    height: 39,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  TextInput: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
  },
  loginBtn: {
    width: '30%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    marginBottom: 50,
  },
  loginText: {
    color : 'black'
  },
});

export default Login;
