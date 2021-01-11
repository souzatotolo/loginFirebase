import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, StyleSheet } from 'react-native';
import firebase from '../firebaseConnection';
import {useNavigation} from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  async function handleLogout(){
    alert('Deslogado com Sucesso!');
    await firebase.auth().signOut()
    navigation.navigate('Login');
    
  }


 return (
   <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center', margin: 10, }}>
     <Text style={{fontSize: 20, fontWeight: 'bold',  marginBottom: 700, marginTop: 20,}}>Bem-vindo(a)</Text>
     <TouchableOpacity 
          style={styles.btn}
          onPress={handleLogout}>
          <Text style={styles.textBtn}>Logout</Text>

        </TouchableOpacity>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  btn: {
    height: 45,
    width: '100%',
    backgroundColor: '#ea5b44',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 5,
  },
  textBtn: {
    fontSize: 17,
    color: '#FFF'
  }
});