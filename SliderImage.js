import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native';
import ImageSlider from 'react-native-image-slider';

const App = () => {
  const [position, setPosition] = useState(0);

  const images = [
    require('./assets/sepatu/sepatu1.jpg'),
    require('./assets/sepatu/sepatu2.jpg'),
    require('./assets/sepatu/sepatu3.jpg'),
    require('./assets/sepatu/sepatu4.jpg'),
  ];

  const handlePositionChanged = (position) => {
    setPosition(position);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ImageSlider
        images={images}
        autoPlayWithInterval={3000}
        onPositionChanged={handlePositionChanged}
        customButtons={(position) => (
          <View style={styles.pagination}>
            {images.map((image, index) => (
              <Text key={index} style={position === index ? styles.activeDot : styles.dot}>
                •
              </Text>
            ))}
          </View>
        )}
        customSlide={({ index, item, style, width }) => (
          <View key={index} style={[style, styles.customSlide, { width }]}>
            <Image source={item} style={styles.customImage} />
          </View>
        )}
        onPress={({ index }) => alert(`Pressed image ${index + 1}`)}
      />
      <View style={styles.productDetails}>
        <Text style={styles.productTitle}>Sepatu Olahraga</Text>
        <Text style={styles.productPrice}>Rp 750.000</Text>
        <Text style={styles.productDescription}>
          Sepatu olahraga berkualitas tinggi, dirancang untuk kenyamanan dan performa maksimal. Cocok untuk berbagai aktivitas olahraga.
        </Text>
        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buyButtonText}>Beli Sekarang</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  pagination: {
    position: 'absolute',
    bottom: -20,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  dot: {
    fontSize: 30,
    color: '#888',
    margin: 3,
  },
  activeDot: {
    fontSize: 30,
    color: '#fff',
    margin: 3,
  },
  customSlide: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  customImage: {
    width: Dimensions.get('window').width - 40,
    height: 300,
    resizeMode: 'cover',
  },
  productDetails: {
    marginTop: 20,
    alignItems: 'center',
  },
  productTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 20,
    color: '#e91e63',
    marginBottom: 20,
  },
  productDescription: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  buyButton: {
    backgroundColor: '#e91e63',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buyButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
