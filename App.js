/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Image } from 'react-native';

const App = () => {

  const [alas, setAlas] = useState(0);
  const [tinggi, setTinggi] = useState(0);

  const hasil = parseFloat(alas) * parseFloat(tinggi) * 0.5;

  const submit = () => {
    Alert.alert('Hasil', 'Luas Segitiga =  ' + hasil ,[{text: 'Tutup'}])
  }

  const reset = () => {
    setAlas("");
    setTinggi("");
    Alert.alert('Berhasil', 'Form Berhasil Di Reset!', [{text: 'Tutup'}])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.judul} >Pertemuan 2 Menghitung Luas Segitiga</Text>
      <Text style={styles.judul} >Danang Prasetyo</Text>
      <Text style={styles.judul} >181011450501</Text>
      <Image style={styles.image}
      source={require('./img/segitiga2.gif')}
      />
      <View style={styles.container2}>
          <Text style={styles.label}>Masukkan Alas</Text>
          <TextInput style={styles.input} onChangeText={(text)=>setAlas(text)} value={alas} placeholder="Alas"/>
          <Text style={styles.label}>Masukkan Tinggi</Text>
          <TextInput style={styles.input} onChangeText={(text)=>setTinggi(text)} value={tinggi} placeholder="Tinggi"/>
          <TouchableOpacity onPress={()=>submit()}  style={styles.button}>
            <Text style={styles.buttontext}>Hitung</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>reset()}  style={styles.button2}>
            <Text style={styles.buttontext}>Reset</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
    container: {
      textAlign: "center",
      paddingTop: 30,
      backgroundColor: "white"
    },
    judul:{
      textAlign: "center",
      textShadowColor: "black",
      fontSize: 15,
      fontWeight: "bold",
      color: "red"
    },
    container2:{
      padding: 40
    },
    input:{
      borderWidth: 0.5,
      borderRadius: 10,
      marginTop: 10
    },
    label: {
      fontSize: 16,
      fontWeight: "bold",
      color: "black",
      marginTop: 10
    },
    button: {
      backgroundColor: "#f42a",
      padding: 15,
      marginTop: 30,
      borderRadius: 20
    },
    button2: {
      backgroundColor: "#708090",
      padding: 15,
      marginTop: 30,
      borderRadius: 20
    },
    buttontext: {
      alignItems: "center",
      textAlign: "center",
      color: "white",
    },
    image: {
      width: 200,
      height: 200,
      alignSelf: "center",
      marginBottom: -20
    },
})