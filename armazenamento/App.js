import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput,   
  TouchableOpacity,
  Alert
} from 'react-native';

import AsyncStorage from "@react-native-community/async-storage"

export default function App() {

  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')


  function save(){
      const user = {
        email, pass
      }

      AsyncStorage.setItem("user", JSON.stringify(user));
  }

  async function mostrar(){
    const json = await AsyncStorage.getItem("user")
    const user = JSON.parse(json)

    console.log(user)

    Alert.alert(
      'Usuários',
      `Email: ${user.email} - Senha: ${user.pass}`
      );
  }

  async function deletar(){
    await AsyncStorage.removeItem("user")
  }

  return (
    <View style={styles.container}>
      <View style={{width: '90%'}}>
        <Text>Armazenamento</Text>
        <TextInput style={styles.input}
          value={email}
          placeholder = 'email...'
          onChangeText={text => setEmail(text)}
        />

        <TextInput style={styles.input}
          value={pass}
          placeholder = 'senha...'
          onChangeText={text => setPass(text)}
        />

        <TouchableOpacity style={styles.button}
          onPress={save}
        >
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}
          onPress={mostrar}
        >
          <Text style={styles.buttonText}>Armazenamento</Text>
        </TouchableOpacity>

      </View>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    margin: 5,
    padding: 5,
  },
  button:{
    borderRadius: 10,
    backgroundColor: 'black',
    padding: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText:{
    color: 'white',
    fontSize: 20,
    
  }
});
