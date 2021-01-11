import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firebase from '../firebaseConnection';

export default function Register(){
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name,setName] = useState('');

  async function cadastrar(){
    await firebase.auth().createUserWithEmailAndPassword(email, password)
    .then( (value) => {
      
      firebase.database().ref('usuarios').child(value.user.uid).set({
        nome: name,
      })

      alert(`${name}, seu cadastro foi realizado com Sucesso!`);
      navigation.navigate('Home');
      //Navegando usuario para Home e levando o email do usuario para a tela home
    })
    .catch( (error) => {
        alert('Ops algo deu errado!');
        console.log(error);
        return;
    })

    setEmail('');
    setPassword('');
  }

  return(
    <View style={styles.container}>
      
      <Text style={styles.title}>Cadastrar</Text>

      <Text style={styles.texto}>Digite seu Email</Text>
      <TextInput
      style={styles.input}
      onChangeText={(texto) => setEmail(texto) }
      value={email}
      placeholder='ex. nome@nome.com'
      />

      <Text style={styles.texto}>Digite seu Nome</Text>
      <TextInput
      placeholder='ex. Maria'
      style={styles.input}
      onChangeText={(nome) => setName(nome)}
      value={name}
      />

      <Text style={styles.texto}>Digite uma Senha</Text>
      <TextInput
      placeholder='****'
      style={styles.input}
      onChangeText={(texto) => setPassword(texto) }
      secureTextEntry={true}
      value={password}
      />

      <Button
      title="Cadastrar"
      onPress={cadastrar}
      />

      <TouchableOpacity style={{marginTop: 10 }} onPress={ () => navigation.navigate('Login')}>
        <Text style={{textAlign: 'center' }}>Ja possuo uma conta</Text>
      </TouchableOpacity>


    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    margin: 10,
    justifyContent: 'center'
  },
  title:{
    textAlign: 'center', 
    fontSize: 29, 
    fontWeight: 'bold',
    margin: 10,
  },
  texto: {
    fontSize: 20,
    margin: 5,
  },
  input:{
    marginBottom: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#121212',
    height: 45,
    fontSize: 17
  }
});