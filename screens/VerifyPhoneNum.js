import { SafeAreaView, Text, View, StyleSheet, TextInput, TouchableOpacity} from "react-native";


export default function VerifyPhoneNum({navigation}) {
  return (
    <SafeAreaView style={{ padding: 20, flex: 1, backgroundColor: 'white' }}>
      <Text style={{ color: 'grey', paddingTop: 20 ,fontSize:16}}>
        We have sent you an SMS with a code to number +91 0123456789.
      </Text>
      <View style={styles.view_textInput}>
        <TextInput
          style={styles.textInput}
          keyboardType="email-address"
          textContentType="emailAddress" />
        <Text style={styles.email_border}>PHONE NUMBER</Text>
      </View>
      <TouchableOpacity
      style={styles.button}
       onPress={() => navigation.navigate("VerifyOtp")}>
        <Text style={styles.sign_in_btn}>CONFIRM</Text>
      </TouchableOpacity>
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