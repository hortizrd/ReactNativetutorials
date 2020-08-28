import { StatusBar } from "expo-status-bar";
import React, { useState,Component } from "react";
import { StyleSheet, Text, View, ScrollView, Button, FlatList,TouchableOpacity } from "react-native";
import { Platform } from "react-native";
import Header from './components/header'


import { Appbar, Divider, TextInput } from "react-native-paper";
import TodoItems from "./components/todoItems";

export default function App() {

const [todos, setTodos] = useState([
  {text: 'buy coffe',key: '1'},
  {text: 'create an app',key: '2'},
  {text: 'play on the switch',key: '3'},
])

const pressHandler =(key) =>{
  setTodos((prevTodos) => {
    return prevTodos.filter(todo => todo.key !=key)
  })
   
}


  return (
    <View style={styles.container}>
      
      <Header/>
      <View style={styles.content}>
         {/*to form */}
         <View style={styles.list}>
           <FlatList
           data={todos}
           renderItem={({item})=>(
         <TodoItems item={item} pressHandler={pressHandler}/>
           ) }
           />
       
         </View>
      

      </View>
   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
   
  },
  content:{
    padding: 40,
  },
  list:{
    marginTop: 20,

  }
  
 
  
 
  
});
