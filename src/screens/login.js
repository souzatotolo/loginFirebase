import React, { useState } from 'react';
import { View, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, Button , ActivityIndicator, Image } from 'react-native';
import firebase from '../firebaseConnection';
import {useNavigation} from '@react-navigation/native';

console.disableYellowBox = true;

export default function Login() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [user,setUser] = useState('Nenhum Usuario Logado');
  const navigation = useNavigation();
 
  

  async function handleLogin(){
    await firebase.auth().signInWithEmailAndPassword(email,password)
    .then((value)=> {
      alert(`Bem-vindo: ${value.user.email}`);
      setUser(value.user.email);
      navigation.navigate('Home');
      
    })
    .catch((error)=>{
      alert('Digite um e-mail e uma senha valida');
      return; 
    })

    setEmail('');
    setPassword('');
  }


 return (
   <SafeAreaView style={styles.container}>

     <Image style={styles.img} source={require('../../src/assets/loginapp.png')}/>

     <Text style={styles.texto}>E-mail</Text>
     <TextInput
      value={email}
      style={styles.input}
      onChangeText={(texto) => setEmail(texto)}
      placeholder='ex. nome@nome.com'
     />

     <Text style={styles.texto}>Senha</Text>
     <TextInput
      placeholder='****'
      value={password}
      style={styles.input}
      secureTextEntry={true}
      onChangeText={(texto) => setPassword(texto)}
     />
     <TouchableOpacity 
     style={styles.btn}
     onPress={handleLogin}>
       <Text style={styles.textBtn}>Acessar</Text>
     </TouchableOpacity>
     <Button
     title = 'Criar uma conta'
     onPress = {()=> navigation.navigate('Register')}
     />
     
     
   
   </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  texto:{
    fontSize: 20,
    fontWeight: 'bold',
    margin: 5,
    marginTop: 20,
  },
  input: {
    marginBottom: 5,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#121212',
    height: 45,
    fontSize: 17,
  },
  btn: {
    height: 45,
    width: '100%',
    backgroundColor: '#30a5df',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 5,
    //margin: 10,
  },
  textBtn: {
    fontSize: 17,
    color: '#FFF'
  },
  img: {
    width: 500,
    height: 500,
  }
})