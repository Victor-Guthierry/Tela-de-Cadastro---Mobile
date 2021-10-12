import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Touchable } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>

      <Image
        source={require('../my-project/assets/logo_usuario3.png')}
        style={styles.logo} 
      />
      <StatusBar style="auto" />

      <Text style={styles.texto}>Nome</Text>
      <TextInput
        style={styles.input} 
        placeholder="Digite seu nome"
      />

      <Text style={styles.textoCpf}>Cpf</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu cpf"
      />

      <Text style={styles.textoEmail}>Email</Text>
      <TextInput
        style={styles.input} 
        placeholder="Digite seu email"
      />

      <TouchableOpacity 
        style={styles.botao}
      >
        <Text style={styles.botaoText}>Salvar</Text>
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
  },
  textoCpf: {
    marginRight: 260,
    fontWeight: 'bold', 
    fontSize: 20,
  },
  textoEmail: {
    marginRight: 240,
    fontWeight: 'bold', 
    fontSize: 20,
  }

});