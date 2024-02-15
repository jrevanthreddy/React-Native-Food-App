import { SafeAreaView, Text, View, StyleSheet, TextInput, TouchableOpacity, Pressable, Image, Modal } from "react-native";

export default function ChangePassword({navigation}) {
  return (
    <View style={{ padding: 20, flex: 1, backgroundColor: 'white' }}>
      <Text style={{ paddingTop: 20, fontSize: 16 }}>
        Enter new password and confirm.
      </Text>
      <View style={styles.view_textInput}>
        <TextInput
          style={styles.textInput}
          textContentType="password"
          secureTextEntry />
        <Text style={styles.email_border}>NEW PASSWORD</Text>
      </View>
      <View style={styles.view_textInput}>
        <TextInput
          style={styles.textInput}
          textContentType="password"
          secureTextEntry />
        <Text style={styles.email_border}>CONFIRM PASSWORD</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("PasswordRestDone")}
        style={styles.button}>
        <Text style={styles.sign_in_btn}>CHANGE PASSWORD</Text>
      </TouchableOpacity>
    </View>

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