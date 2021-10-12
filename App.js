import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Touchable } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Image
        source={require('../my-project/assets/logo_usuario3.png')}
        style={styles.logo} 
      />
      <StatusBar style="auto" />

      <Text style={styles.texto}>Login</Text>
      <TextInput
        style={styles.input} 
        placeholder="Digite seu email"
      />

      <Text style={styles.texto}>Senha</Text>
      <TextInput
        style={styles.input}
        secureTextEntry={true} 
        placeholder="Digite sua senha"
      />

      <TouchableOpacity style={styles.botao}>
        <Text style={styles.botaoText}>Login</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3e5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 100
  },
  input: {
    marginTop: 10,
    padding: 10,
    width: 300,
    backgroundColor: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 3
  },
  botao: {
    width: 300,
    height: 42,
    backgroundColor: '#3498db',
    marginTop: 10,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  botaoText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff'
  },
  texto: {
    marginRight: 240,
    fontWeight: 'bold', 
    fontSize: 20,
  }
});