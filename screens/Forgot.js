import { SafeAreaView, Text, View, StyleSheet, TextInput, TouchableOpacity, Pressable, Image, Modal } from "react-native";


export default function Forgot({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ margin: 20 }}>
                <Text style={{ color: 'grey', paddingTop: 20 }}>
                    Please enter your email address .You will receive a link to create a new password via emial.
                </Text>
                <View style={styles.view_textInput}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter Email"
                        keyboardType="email-address"
                        textContentType="emailAddress" />
                    <Text style={styles.email_border}>EMAIL</Text>
                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate("VerifyPhoneNum")}
                    style={styles.button}>
                    <Text style={styles.sign_in_btn}>SEND</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    backward_left_image: {
        width: 30,
        height: 30
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