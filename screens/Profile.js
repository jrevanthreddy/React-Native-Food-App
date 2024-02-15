import { Text, View, StyleSheet, Image, SafeAreaView, StatusBar, Pressable, TouchableOpacity } from "react-native";



export default function HomeTab({navigation}) {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white', position: 'relative' }}>
            <StatusBar backgroundColor='red' />
            <View style={{ backgroundColor: 'red', padding: 60, position: 'relative' }}>
                <Text style={styles.profile}>
                    My Profile
                </Text>
                <View style={styles.card}>
                    <Image
                        style={styles.image}
                        source={{ uri: 'https://images.pexels.com/photos/1130623/pexels-photo-1130623.jpeg?auto=compress&cs=tinysrgb&w=600' }} />
                    <View style={{ margin: 15 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Hunny Code</Text>
                        <Text>code.Hunny40@gmail.com</Text>
                    </View>
                    <Pressable onPress={() => navigation.navigate("EditProfile")}>
                        <Image
                            style={{ width: 20, height: 20 }}
                            source={require('../assets/edit.png')} />
                    </Pressable>
                </View>
            </View>


            <View style={{ marginTop: 90, margin: 30, }}>
                <View style={{ flexDirection: 'row' }}>
                    
                    <Image
                        style={styles.image1}
                        source={{ uri: 'https://w7.pngwing.com/pngs/892/187/png-transparent-solar-calendar-symbol-computer-icons-encapsulated-postscript-calendar-icon-miscellaneous-text-calendar-thumbnail.png' }} />
                    <TouchableOpacity onPress={() => navigation.navigate("OrderHistory")}>
                    <Text style={styles.text}>Order History</Text>
                    </TouchableOpacity>
                    <Image
                        style={styles.rightarrow}
                        source={{ uri: 'https://w7.pngwing.com/pngs/147/1012/png-transparent-arrow-button-icon-right-arrow-background-angle-english-web-design-thumbnail.png' }} />
                </View>
            </View>


            <View style={{ marginTop: 5, margin: 30, }}>
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        style={styles.image1}
                        source={{ uri: 'https://w7.pngwing.com/pngs/205/486/png-transparent-computer-icons-wallet-wallet-angle-text-rectangle-thumbnail.png' }} />
                    <TouchableOpacity onPress={() => navigation.navigate("PaymentMethod")}>
                    <Text style={styles.text}>Payment Method</Text>
                    </TouchableOpacity>
                    <Image
                        style={styles.rightarrow}
                        source={{ uri: 'https://w7.pngwing.com/pngs/147/1012/png-transparent-arrow-button-icon-right-arrow-background-angle-english-web-design-thumbnail.png' }} />
                </View>
            </View>



            <View style={{ marginTop: 5, margin: 30, }}>
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        style={styles.image1}
                        source={{ uri: 'https://w7.pngwing.com/pngs/213/871/png-transparent-location-logo-map-location-icon-road-map-black-symbol-thumbnail.png' }} />
                    <TouchableOpacity onPress={() => navigation.navigate("Address")}>
                    <Text style={styles.text}>My Address</Text>
                    </TouchableOpacity>
                    <Image
                        style={styles.rightarrow}
                        source={{ uri: 'https://w7.pngwing.com/pngs/147/1012/png-transparent-arrow-button-icon-right-arrow-background-angle-english-web-design-thumbnail.png' }} />
                </View>
            </View>



            <View style={{ marginTop: 5, margin: 30, }}>
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        style={styles.image1}
                        source={{ uri: 'https://w7.pngwing.com/pngs/355/39/png-transparent-gift-computer-icons-desktop-gift-miscellaneous-angle-text-thumbnail.png' }} />
                    <TouchableOpacity onPress={() => navigation.navigate("PromoCodes")}>
                    <Text style={styles.text}>My PromoCodes</Text>
                    </TouchableOpacity>
                    <Image
                        style={styles.rightarrow}
                        source={{ uri: 'https://w7.pngwing.com/pngs/147/1012/png-transparent-arrow-button-icon-right-arrow-background-angle-english-web-design-thumbnail.png' }} />
                </View>
            </View>



            <View style={{ marginTop: 5, margin: 30, }}>
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        style={styles.image1}
                        source={{ uri: 'https://w7.pngwing.com/pngs/475/31/png-transparent-silhouette-heart-silhouette-love-animals-shapes-thumbnail.png' }} />
                    <TouchableOpacity onPress={() => navigation.navigate("Favorite")}>
                    <Text style={styles.text}>My favorite</Text>
                    </TouchableOpacity>
                    <Image
                        style={styles.rightarrow}
                        source={{ uri: 'https://w7.pngwing.com/pngs/147/1012/png-transparent-arrow-button-icon-right-arrow-background-angle-english-web-design-thumbnail.png' }} />
                </View>
            </View>



            <View style={{ marginTop: 5, margin: 30, }}>
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        style={styles.image1}
                        source={{ uri: 'https://w7.pngwing.com/pngs/553/495/png-transparent-log-out-log-out-sign-logout-out-sign-out-signout-navigation-set-arrows-part-one-icon-thumbnail.png' }} />
                    <TouchableOpacity onPress={() => navigation.navigate("signIn")}>
                    <Text style={styles.text}>Sign out</Text>
                    </TouchableOpacity>
                </View>
            </View>




        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginTop: 90,
        flexDirection: 'row',
        position: 'absolute',
        alignSelf: 'center',
    },
    image: {
        width: 72,
        height: 72,
        backgroundColor: 'black',
        borderRadius: 100,
    },
    image1: {
        width: 20,
        height: 20,
        resizeMode: 'center'
    },
    rightarrow: {
        width: 20,
        height: 20,
    },
    profile: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        color: 'white'
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10,
        color: 'black'
    }
});