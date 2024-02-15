import { SafeAreaView, Text, View, StyleSheet, TextInput, TouchableOpacity, Pressable, Image, Modal, Alert } from "react-native";

export default function VerifyOTP({navigation}) {
    return (
        <SafeAreaView style={{ padding: 20,flex:1,backgroundColor:'white' }}>
            <Text style={{ paddingTop: 30 }}>
                Enter your OTP code here.
            </Text>
            <View style={{ flexDirection: 'row', paddingTop: 20 }}>
                <TextInput
                    style={styles.otp_textinput}
                    placeholder=""
                    keyboardType="number-pad" />
                <TextInput
                    style={styles.otp_textinput}
                    placeholder=""
                    keyboardType="number-pad" />
                <TextInput
                    style={styles.otp_textinput}
                    placeholder=""
                    keyboardType="number-pad" />
                <TextInput
                    style={styles.otp_textinput}
                    placeholder=""
                    keyboardType="number-pad" />
                <TextInput
                    style={styles.otp_textinput}
                    placeholder=""
                    keyboardType="number-pad" />
            </View>
            <Text style={{ fontSize: 16, paddingTop: 25 }}>
                Didn't receive the OTP?
                <Text 
                onPress={() => Alert.alert("","OTP SENT")}
                style={{ color: 'red' }}>
                    Resend.
                </Text>
            </Text>
            <TouchableOpacity
            onPress={() => navigation.navigate("ChangePassword")}
                style={styles.button}>
                <Text style={styles.sign_in_btn}>VERIFY</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}



const styles=StyleSheet.create({
    backward_left_image: {
        width: 30,
        height: 30
      },
      otp_textinput: {
        backgroundColor: 'lightgrey',
        borderRadius: 100,
        textAlign: 'center',
        fontSize: 22,
        padding: 15,
        margin: 10
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