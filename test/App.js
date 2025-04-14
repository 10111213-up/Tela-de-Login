import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Feather from '@expo/vector-icons/Feather';

function App(){

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [input, setInput] = useState('');
  const [input2, setInput2] = useState('');
 
  function SaveInfo(){

    if (input == '' || input2 == ''){
      alert('Preencha os campos vazios')
      return
    }
    setEmail(input);
    setSenha(input2);
  }
 
  return(
  <View style={styles.container}> 
    <Feather size={100} color="black" name='camera' marginBottom={30}></Feather>
    <View>
    <TextInput style={styles.input} placeholder='Telefone, nome de usuário ou email' onChangeText={(text) => setInput(text)}/>
    <TextInput style={styles.input} placeholder='Senha' onChangeText={(text) => setInput2(text)}/>
    <TouchableOpacity style={styles.botao} onPress={SaveInfo}>
      <Text style={{color: '#fff'}}>Log in</Text>
    </TouchableOpacity>
    <View style={{alignItems: 'flex-end'}}>
    <Text style={{color: '#1E90FF', fontWeight:'bold', marginTop: 20}}>Esqueceu a senha?</Text>
    </View>
    </View>
  </View>

  );
}
 
export default App;
 
let styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff'
  },

  input:{
    color: '#A9A9A9',
    borderRadius: 10,
    fontStyle: 'bold',
    width: 300,
    height: 40,
    marginTop: 20,
    padding: 9,
    fontSize: 16,
    backgroundColor: '#F5F5F5',
  },

  boxTop:{
    flex: 1,
    marginBottom: -20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    width: '100%',
  },

  boxBottom:{
    flex: 1,
    height: 200,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  botao:{
    height: 40,
    color: '#fff',
    fontStyle: 'bold',
    borderRadius: 10,
    marginTop: 20,
    fontSize: 10,
    width: 300,
    backgroundColor: '#1E90FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
 