import { StyleSheet, Text, View } from "react-native";
import React from "react";

const TextInputCostum =({placeholder, color, typeKeybooard}) => {
  return(
    <TextInput  
    placeholder={placeholder}
    keyboardType={typeKeybooard}
    style ={{
      width :250,
      height : 50,
      borderColor : color,
      borderWidth : 1,
      borderRadius : 10,
      marginBottom :10,
      paddingLeft : 10
    }}></TextInput>
  )
}

const App = () => {
  return (
    <View style ={{
      flex : 1,
      justifyContent : 'center',
      alignItems : 'center',
    }}>
      <TextInputCostum placeholder = "Name" color = "blue" />
      <TextInputCostum placeholder = "Email" color = "blue" />
      <TextInputCostum placeholder = "Password" color = "blue" />
    </View>
  )
}

export default App

