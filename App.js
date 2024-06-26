import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ButtonCostum = ({text,color}) => {
  return (
    <View style ={{
      backgroundColor : color,
      width : 250,
      height : 100,
      borderRadius : 10,
      justifyContent : 'center',
      marginBottom :10
    }}>
      <Text style ={{
        textAlign : 'center',
        color : 'white',
        fontSize : 30,
        fontWeight : 'bold',
      }}>
        {text}
      </Text>
    </View>
  )
}
const App = () => {
  return (
    <View style ={{
      flex : 1,
      justifyContent : 'center',
      alignItems : 'center',
    }}>
      <ButtonCostum text = "LOGIN" color = "red" />
      <ButtonCostum text = "LOGIN" color = "orange" />
      <ButtonCostum text = "REGIS" color = "purple" />
    </View>
  )
}

export default App

