import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./assets/fotoawal.jpeg')} style={styles.headerImage} />
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Fashion sale</Text>
          <TouchableOpacity style={styles.checkButton}>
            <Text style={styles.checkButtonText}>Check</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.newSection}>
        <Text style={styles.newSectionTitle}>New</Text>
        <Text style={styles.newSectionSubtitle}>You’ve never seen it before!</Text>
        <ScrollView horizontal>
          <Image source={require('./assets/fotocewek.jpeg')} style={styles.productImage} />
          <Image source={require('./assets/fotocowok.jpeg')} style={styles.productImage} />
          <Image source={require('./assets/fotocewek2.jpeg')} style={styles.productImage} />
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    position: 'relative',
  },
  headerImage: {
    width: '100%',
    height: 300,
  },
  headerTextContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  headerText: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
  },
  checkButton: {
    marginTop: 10,
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  checkButtonText: {
    color: 'white',
    fontSize: 16,
  },
  newSection: {
    padding: 20,
  },
  newSectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  newSectionSubtitle: {
    fontSize: 16,
    color: 'gray',
  },
  productImage: {
    width: 150,
    height: 150,
    marginRight: 10,
  },
});

export default HomeScreen;
