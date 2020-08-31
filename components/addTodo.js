import React, { useState, Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState("");

  const changeHandler = (val) => {
    setText(val);
    console.log("prueba de changeHandler");
  };

  return (
    <View>
      <TextInput
        placeholder="New todo...."
        onChangeText={changeHandler}
        style={styles.input}
      />
      <Button
        onPress={() => submitHandler(text)}
        title="Add todo"
        color="coral"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
