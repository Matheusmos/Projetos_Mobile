import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { 
  View, 
  KeyboardAvoidingView, 
  Image, 
  TextInput, 
  Text, 
  TouchableOpacity, 
  StyleSheet,
  Animated
} from 'react-native';
import logo from './assets/logo.png'


export default function App() {


  const [offset] = useState(new Animated.ValueXY({x: 0, y: 90}))
  const [opacity] = useState(new Animated.Value(0))

  useEffect(() => {

    

    Animated.spring(offset.y, {
      toValue: 0,
      speed: 4,
      bounciness: 20,
    }).start();
  },[]);
    
  
  
  return (
    <KeyboardAvoidingView style={styles.background}>
      <StatusBar hidden/>
      <View style={styles.containerLogo}>
        <Image style={styles.image}
          source={require('./assets/logo.png')}
        />
      </View>
      <Animated.View 
        style={[
          styles.container,
          {
            
            transform: [
              {translateY: offset.y}
            ]
          }
        ]}
      
      >
        <TextInput style={styles.input}
          placeholder="Email"
          autoCorrect={false}
          onChangeText={()=> {}}
        />

        <TextInput style={styles.input}
          placeholder="Senha"
          autoCorrect={false}
          onChangeText={()=> {}}
        />

        <TouchableOpacity style={styles.btnSubmit}>
          <Text style={styles.submitText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnRegister}>
          <Text style={styles.submitText}>Cadastro</Text>
        </TouchableOpacity>

      </Animated.View>
    </KeyboardAvoidingView>
  )
}


const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain'
},
background: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'black'
},
containerLogo: {
  flex: 1,
  justifyContent: 'center',
},
container: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  width: '90%',
  paddingBottom: 50,
},
input: {
  backgroundColor: 'white',
  width: '90%',
  marginBottom: 15,
  color: '#222',
  fontSize: 20,
},
btnSubmit: {
  backgroundColor: '#35AAFF',
  width: '90%',
  height: 45,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 7
    
},

submitText: {
  color: '#FFF',
  fontSize: 18,
},

btnRegister: {
  marginTop: 20,

}
});
