import { SafeAreaView, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function VerifyPhoneNum({ navigation }) {
    return (

        <SafeAreaView style={{ padding: 20, flex: 1, backgroundColor: 'white' ,justifyContent:'center'}}>
            <Image
                source={require("../assets/passwordReset.png")}/>
            <TouchableOpacity
                onPress={() => navigation.navigate("signIn")}
                style={styles.button}>
                <Text style={styles.sign_in_btn}>DONE</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'red',
        borderRadius: 30,
        marginTop: 25,
        padding: 15,
    },
    sign_in_btn: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
    },
})