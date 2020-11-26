import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import Heading from './components/heading'
import Input from './components/textInput'

export default function App() {

  const [inputValue,setInputValue] = useState("")
  const [toDos, setTodos] = useState([])
  const [type,setType] = useState("All")


  return (
    <View style={styles.container}>
      <ScrollView keyboardShouldPersistTaps='always' style={styles.content}>
        <Heading />
        <Input
          
        />

      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  content: {
    flex: 1,
    paddingTop: 60
  },

});
