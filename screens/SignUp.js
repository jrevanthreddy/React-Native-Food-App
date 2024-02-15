import { SafeAreaView, Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";


export default function SignUp({ navigation }) {
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <Text style={styles.text_sign_in}>
                Sign up
            </Text>
            <View style={styles.view_textInput}>
                <TextInput
                    style={styles.textInput}
                    textContentType="name" />
                <Text style={styles.email_border}>NAME</Text>
            </View>
            <View style={styles.view_textInput}>
                <TextInput
                    style={styles.textInput}
                    keyboardType="email-address"
                    textContentType="emailAddress" />
                <Text style={styles.email_border}>EMAIL</Text>
            </View>
            <View style={styles.view_textInput}>
                <TextInput
                    style={styles.textInput}
                    textContentType='newPassword'
                    secureTextEntry />
                <Text style={styles.email_border}>PASSWORD</Text>
            </View>
            <View style={styles.view_textInput}>
                <TextInput
                    style={styles.textInput}
                    textContentType='newPassword'
                    secureTextEntry />
                <Text style={styles.email_border}>CONFIRM PASSWORD</Text>
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate("signIn")}
                style={styles.button}>
                <Text style={styles.sign_in_btn}>SIGN UP</Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 16, paddingTop: 25 }}>
                Already have an account?
                <Text style={{ color: 'red' }}
                    onPress={() => navigation.navigate("signIn")}>
                    Sign in.
                </Text>
            </Text>
            <View style={{ flexDirection: 'row', alignSelf: 'center', paddingTop: 30 }}>
                <Image
                    style={styles.image}
                    source={require("../assets/facebook.png")} />
                <Image
                    style={styles.image}
                    source={require("../assets/twitter.png")} />
                <Image
                    style={styles.image}
                    source={require("../assets/google.png")} />
            </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
        padding: 20,
    },
    button: {
        backgroundColor: 'red',
        borderRadius: 30,
        marginTop: 25,
        padding: 15,
    },
    text_sign_in: {
        height: 'auto',
        height: 'auto',
        fontWeight: 'bold',
        fontSize: 25,
    },
    image: {
        width: 40,
        height: 40,
        margin: 5
    },
    textInput: {
        width: 350,
        borderWidth: 0.8,
        borderRadius: 30,
        borderColor: 'grey',
        padding: 12,
        marginTop: 20,
        paddingLeft: 20,
        position: 'relative'
    },
    view_textInput: {
        paddingTop: 10,
        position: 'relative',
    },
    email_border: {
        position: 'absolute',
        marginLeft: 20,
        marginTop: 20,
        backgroundColor: 'white',
        color: 'grey',
    },
    sign_in_btn: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
    },
})