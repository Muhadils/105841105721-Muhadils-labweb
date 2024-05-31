import { StyleSheet, Text, View } from "react-native";
import React from "react";

const App = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.box1]}>
        <Text style={styles.text}>Red Section</Text>
      </View>
      <View style={[styles.box, styles.box2]}>
        <Text style={styles.text}>Green Section</Text>
      </View>
      <View style={[styles.box, styles.box3]}>
        <Text style={styles.text}>Blue Section</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f0f0f0",
  },
  box: {
    flex: 1,
    margin: 5,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  box1: {
    backgroundColor: "red",
  },
  box2: {
    backgroundColor: "green",
  },
  box3: {
    backgroundColor: "blue",
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default App;

