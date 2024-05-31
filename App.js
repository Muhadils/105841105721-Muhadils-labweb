import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Button, Alert } from 'react-native';

const products = [
  { id: '1', name: 'Laptop', price: 10000000, image: 'https://example.com/laptop.jpg' },
  { id: '2', name: 'Smartphone', price: 5000000, image: 'https://example.com/smartphone.jpg' },
  { id: '3', name: 'Headphones', price: 200000, image: 'https://example.com/headphones.jpg' },
];

const Stack = createStackNavigator();

const ProductListScreen = ({ navigation }) => {
  const renderProduct = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('ProductDetail', { product: item })}>
      <View style={styles.productContainer}>
        <Image source={{ uri: item.image }} style={styles.productImage} />
        <View style={styles.productDetails}>
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.productPrice}>Rp {item.price.toLocaleString()}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.productList}
      />
    </View>
  );
};

const ProductDetailScreen = ({ route, navigation }) => {
  const { product } = route.params;

  const addToCart = () => {
    Alert.alert(`${product.name} has been added to the cart`);
    navigation.navigate('Cart', { product });
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.productImageDetail} />
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productPrice}>Rp {product.price.toLocaleString()}</Text>
      <Button title="Add to Cart" onPress={addToCart} />
    </View>
  );
};

const CartScreen = ({ route }) => {
  const [cart, setCart] = useState(route.params ? [route.params.product] : []);

  const renderCartItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Text style={styles.cartItemText}>{item.name} - Rp {item.price.toLocaleString()}</Text>
    </View>
  );

  const checkout = () => {
    Alert.alert('Thank you for your purchase!');
    setCart([]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cart</Text>
      <FlatList
        data={cart}
        renderItem={renderCartItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.cartList}
      />
      <Text style={styles.total}>
        Total: Rp {cart.reduce((total, item) => total + item.price, 0).toLocaleString()}
      </Text>
      <Button title="Checkout" onPress={checkout} />
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProductList">
        <Stack.Screen name="ProductList" component={ProductListScreen} options={{ title: 'Tokopedia Clone' }} />
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} options={{ title: 'Product Detail' }} />
        <Stack.Screen name="Cart" component={CartScreen} options={{ title: 'Cart' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  productList: {
    paddingBottom: 20,
  },
  productContainer: {
    flexDirection: 'row',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  productDetails: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  productPrice: {
    fontSize: 18,
    color: '#888',
    marginBottom: 10,
  },
  productImageDetail: {
    width: 300,
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
  },
  cartItem: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  cartItemText: {
    fontSize: 18,
    color: '#333',
  },
  total: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
});

export default App;
