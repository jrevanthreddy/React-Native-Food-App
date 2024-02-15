import { ScrollView, Text, View, StyleSheet, Image, Pressable } from "react-native";

export default function ({navigation}) {
    return (
        <View style={styles.view}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.creditcard}>
                    Credit Card
                </Text>
                <Text style={{ marginLeft: 230, color: 'red' }}>
                    Add +
                </Text>
            </View>



            <ScrollView
                horizontal={true}
                contentContainerStyle={styles.horizentalscrollview}>



                    <Pressable onPress={() => navigation.navigate("AddNewCard")}>
                <View style={{ alignItems: 'center', margin: 15 }}>
                    <View style={styles.cardred}>
                        <Text style={styles.cardtext}>
                            1111 2222 3333 4444
                        </Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.cardtextname}>
                                Titanium Debit
                            </Text>
                            <View style={{ marginLeft: 40 }}>
                                <Text style={styles.cardtextexpire}>
                                    Exp.
                                </Text>
                                <Text style={{ color: 'white' }}>
                                    End 12/25
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                </Pressable>



                <Pressable onPress={() => navigation.navigate("AddNewCard")}>
                <View style={{ alignItems: 'center', margin: 15 }}>
                    <View style={styles.cardgreen}>
                        <Text style={styles.cardtext}>
                            9999 8888 7777 6666
                        </Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.cardtextname}>
                                Platinum Debit
                            </Text>
                            <View style={{ marginLeft: 40 }}>
                                <Text style={styles.cardtextexpire}>
                                    Exp.
                                </Text>
                                <Text style={{ color: 'white' }}>
                                    End 08/30
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                </Pressable>


                <Pressable onPress={() => navigation.navigate("AddNewCard")}>
                <View style={{ alignItems: 'center', margin: 15 }}>
                    <View style={styles.cardgrey}>
                        <Text style={styles.cardtext}>
                            1234 5678 9012 3456
                        </Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.cardtextname}>
                                Golden Debit
                            </Text>
                            <View style={{ marginLeft: 40 }}>
                                <Text style={styles.cardtextexpire}>
                                    Exp.
                                </Text>
                                <Text style={{ color: 'white' }}>
                                    End 08/30
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                </Pressable>



            </ScrollView>

            <View style={{ marginBottom: 230 }}>
                <View style={styles.border}>
                    <View>
                        <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>
                            Pay
                        </Text>
                        <Text>
                            paypal
                        </Text>
                    </View>
                    <Image
                        style={{ width: 20, height: 20, position: 'absolute', marginLeft: 300, marginTop: 30 }}
                        source={require('../assets/edit.png')} />
                </View>

                <View style={styles.border1}>
                    <View>
                        <Text style={{ color: 'blue', fontSize: 18, fontWeight: 'bold' }}>
                            pay<Text style={{color:'skyblue'}}>Free</Text>
                        </Text>
                        <Text>
                            payFree
                        </Text>
                    </View>
                    <Image
                        style={{ width: 20, height: 20, position: 'absolute', marginLeft: 300, marginTop: 30 }}
                        source={require('../assets/plus.png')} />
                </View>



            </View>



        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        padding: 20,
        backgroundColor:'white'
    },
    creditcard: {
        fontSize: 16
    },
    cardred: {
        borderRadius: 20,
        backgroundColor: 'red',
        width: 350,
        height: 220,
        marginTop: 20
    },
    cardgreen: {
        borderRadius: 20,
        backgroundColor: 'green',
        width: 350,
        height: 220,
        marginTop: 20
    },
    cardgrey: {
        borderRadius: 20,
        backgroundColor: 'grey',
        width: 350,
        height: 220,
        marginTop: 20
    },
    cardtext: {
        color: 'white',
        fontSize: 16,
        margin: 25
    },
    cardtextname: {
        color: 'white',
        fontSize: 16,
        margin: 25,
        marginTop: 80,
    },
    cardtextexpire: {
        color: 'white',
        fontSize: 16,
        marginTop: 80
    },
    horizentalscrollview: {
        flexDirection: 'row'
    },
    border: {
        borderRadius: 20,
        borderWidth: 1,
        padding: 20,
        borderColor: 'lightgrey',
        flexDirection: 'row',
        position: 'relative'
    },
    border1: {
        borderRadius: 20,
        borderWidth: 1,
        padding: 20,
        marginTop:15,
        borderColor: 'lightgrey',
        flexDirection: 'row',
        position: 'relative'
    },
})