import { View, Image, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";

const { width, height } = Dimensions.get('screen');


export default function SlideItem({ item }) {
    return (
            <View style={styles.container}>
                <Image
                    source={item.Image} />


            <View style={styles.content}>
                <Text style={styles.title}>{item.Title}</Text>
                <Text style={styles.discription}>{item.Discription}</Text>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width,
        height,
        alignItems: 'center'
    },
    image: {
        width: '100%',
        flex:0.6,
    },
    content: {
        flex:0.4,
        alignItems:'center',
        margin:15,
        textAlign:'justify'
    },
    title: {
        fontSize: 34,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center'
    },
    discription: {
        fontSize: 18,
        textAlign: 'center',
        color: '#333'
    },
})