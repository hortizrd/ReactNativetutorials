import { StatusBar } from "expo-status-bar";
import React, { useState, Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Platform } from "react-native";
import Header from "./components/header";
import AddTodo from "./components/addTodo";
import Sandbox from './components/sandbox'

import { Appbar, Divider, TextInput } from "react-native-paper";
import TodoItems from "./components/todoItems";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy coffe", key: "1" },
    { text: "create an app", key: "2" },
    { text: "play on the switch", key: "3" },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };
  const submitHandler = (text) => {

    if(text.length > 3){
      const min = 10;
      const max = 1000;
      const rand = min + Math.random() * (max - min);
      setTodos((prevTodos) => {
        return [{ text: text, key: rand.toString() }, ...prevTodos];
      });

    }else{
      Alert.alert('Ups','Para poder agregar a ala lista la palabra debe ser mayor a tres',[
        {text:'entendido',onPress:()=> console.log('Alerta cerrada')}
      ])

    }
   
  };

  return (
 //  <Sandbox/>
     <TouchableWithoutFeedback onPress={()=>{
     Keyboard.dismiss()
    }}>
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItems item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </View>
    </TouchableWithoutFeedback> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
    
    flex:1,
    
  },
  list: {
    flex:1,
    marginTop: 20,
   
  },
});
