import { View, StyleSheet, Text, Image, Pressable, FlatList } from "react-native";
import slides from '../index';
import SlideItem from "./SlideItem";

export default function Slider({navigation}) {
    return (
        <View style={styles.container}>
            <Pressable
                style={{ flexDirection: 'row', justifyContent: 'flex-end',margin:30}}
                onPress={() => navigation.navigate("signIn") }>
                <Text style={styles.textSkip}>
                    skip
                </Text>
                <Image
                    style={styles.imageArrow}
                    source={require('../assets/rightarrow.png')} />
            </Pressable>


            <View>
                <FlatList
                    data={slides}
                    renderItem={({ item }) => <SlideItem item={item} />} 
                    horizontal
                    pagingEnabled
                    snapToAlignment="center"/>
            </View>



        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    textSkip: {
        textAlign: 'right',
        fontSize: 17
    },
    imageArrow: {
        width: 16,
        height: 16,
        marginTop: 6
    }
})