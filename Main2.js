import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';


class Home extends Component {
    render() {
        const mainImage = require('./assets/model/pp.png');
        const newImages = [
            { source: require('./assets/model/merah.png'), title: 'Red Dress', subtitle: '10$' },
            { source: require('./assets/model/putih.png'), title: 'Sport Dress', subtitle: '12$' },
            { source: require('./assets/model/abu.png'), title: 'Sundress', subtitle: '15$' },
            { source: require('./assets/model/pp3.png'), title: 'Pink drees', subtitle: '15$' },

            
        ];
        const twoimage = [
            { source: require('./assets/model/pp.png'), title: 'cool', subtitle: '15$' },
            { source: require('./assets/model/pose1.png'), title: 'cool', subtitle: '15$' },
            { source: require('./assets/model/abu.png'), title: 'cool', subtitle: '15$' },
            { source: require('./assets/model/merah.png'), title: 'cool', subtitle: '15$' },
        ];

        return (
            <SafeAreaView style={{
                flex: 1,ckgroundColor: '#ffffff',
            }}>
                <ScrollView>
                    <View style={{position: 'relative',}}>
                        <Image source={mainImage} style={{width: '100%',height: 200,resizeMode: 'cover',}} />
                        <View style={{
                            position: 'absolute',
                            buttom: 40,
                            left: 20,
                            right: 20,
                            alignItems: 'flex-start',
                            marginTop: 120,
                    
                        }}>
                            <Text style={{
                                color: '#ffffff',
                                fontSize: 40,
                                fontWeight: 'bold',
                            }}>Street Clotes</Text>
            
                        </View>
                    </View>
                    <View style={{padding: 20,}}>
                        <Text style={{fontSize: 24,fontWeight: 'bold',}}>Sale</Text>
                        <Text style={{
                            color: '#888888',
                            marginVertical: 10,
                            fontSize: 20,
                        }}>You've never seen it before!</Text>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{flexDirection: 'row',}}>
                            {newImages.map((item, index) => (
                                <View key={index} style={{marginRight: 16, alignItems: 'center',}}>
                                    <Image source={item.source} style={{
                                        width: 150,
                                        height: 200,
                                        resizeMode: 'cover',
                                        borderRadius: 10,
                                
                                    }} />
                                    <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 5,}}>{item.title}</Text>
                                    <Text style={{fontSize: 15, color: 'red',}}>{item.subtitle}</Text>
                                </View>
                            ))}
                        </ScrollView>
                    </View>
                    <View style={{padding: 20,}}>
                        <Text style={{fontSize: 24,fontWeight: 'bold',}}>New</Text>
                        <Text style={{
                            color: '#888888',
                            marginVertical: 10,
                            fontSize: 20,
                        }}>You've never seen it before!</Text>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{flexDirection: 'row',}}>
                            {twoimage.map((item, index) => (
                                <View key={index} style={{marginRight: 16, alignItems: 'center',}}>
                                    <Image source={item.source} style={{
                                        width: 150,
                                        height: 200,
                                        resizeMode: 'cover',
                                        borderRadius: 10,
                                
                                    }} />
                                    <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 5,}}>{item.title}</Text>
                                    <Text style={{fontSize: 15, color: 'red',}}>{item.subtitle}</Text>
                                </View>
                            ))}
                        </ScrollView>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

export default Home;