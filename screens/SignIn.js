import { SafeAreaView, Text, View, StyleSheet, TextInput, TouchableOpacity, Pressable, Image, Modal } from "react-native";
// import { useState } from "react";

export default function App({navigation}) {

  // const [signUp, setSignUp] = useState(false)
  // const [forgorPassword, setForgotPassword] = useState(false)
  // const [phoneNumber, setPhoneNumber] = useState(false)
  // const [otp, setOtp] = useState(false)
  // const [changePassword, setChangePassword] = useState(false)
  // const [passwordResetDone, setPasswordResetDone] = useState(false)

  return (
    <View style={styles.safeAreaView}>
      <SafeAreaView>
        <Text style={styles.text_sign_in}>
          Sign In
        </Text>
        <View style={styles.view_textInput}>
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            keyboardType="email-address" />
          <Text style={styles.email_border}>EMAIL</Text>
        </View>
        <View style={styles.view_textInput}>
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            secureTextEntry />
          <Text style={styles.email_border}>PASSWORD</Text>
        </View>
        <Pressable>
          <Text style={styles.forgot_password}
            onPress={() => navigation.navigate("Forgot")}>
            Forgot password?
          </Text>
        </Pressable>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={styles.button}>
          <Text style={styles.sign_in_btn}>SIGN IN</Text>
        </TouchableOpacity>
        <Text>
        </Text>
        <Text style={{ fontSize: 16, paddingTop: 25 }}>
          Don't have an account?
          <Text style={{ color: 'red' }}
            onPress={() => navigation.navigate("SignUp")}>
            Sign up.
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



      {/* <Modal visible={signUp}
        onRequestClose={() => setSignUp(false)}>
        <View style={styles.safeAreaView}>
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
            onPress={() => setSignUp(false)}
            style={styles.button}>
            <Text style={styles.sign_in_btn}>SIGN UP</Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 16, paddingTop: 25 }}>
            Already have an account?
            <Text style={{ color: 'red' }}
              onPress={() => setSignUp(false)}>
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
              source={require("../assets/facebook.png")} />
          </View>
        </View>
      </Modal> */}




      {/* <Modal
        visible={forgorPassword}
        onRequestClose={() => setForgotPassword(false)}>
        <View style={{ margin: 20 }}>
          <View style={{ flexDirection: 'row' }}>
            <Pressable
              onPress={() => setForgotPassword(false)}>
              <Image style={styles.backward_left_image}
                source={require("../assets/back_left.png")} />
            </Pressable>
            <Text style={{ fontWeight: 'bold', fontSize: 20, alignSelf: 'center', paddingLeft: 60 }}>
              Forgot Password
            </Text>
          </View>
          <Text style={{ color: 'grey', paddingTop: 20 }}>
            Please enter your email address .You will receive a link to create a new password via emial.
          </Text>
          <View style={styles.view_textInput}>
            <TextInput
              style={styles.textInput}
              keyboardType="email-address"
              textContentType="emailAddress" />
            <Text style={styles.email_border}>EMAIL</Text>
          </View>
          <TouchableOpacity
            onPress={() => setPhoneNumber(true)}
            style={styles.button}>
            <Text style={styles.sign_in_btn}>SEND</Text>
          </TouchableOpacity>
        </View>
      </Modal> */}




      {/* <Modal
        visible={phoneNumber}
        onRequestClose={() => setPhoneNumber(false)}>
        <View style={{ margin: 20 }}>
          <View style={{ flexDirection: 'row' }}>
            <Pressable
              onPress={() => setPhoneNumber(false)}>
              <Image style={styles.backward_left_image}
                source={require("../assets/back_left.png")} />
            </Pressable>
            <Text style={{ fontWeight: 'bold', fontSize: 20, alignSelf: 'center', paddingLeft: 30 }}>
              Verify your phone number
            </Text>
          </View>
          <Text style={{ color: 'grey', paddingTop: 20 }}>
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
            onPress={() => setOtp(true)}
            style={styles.button}>
            <Text style={styles.sign_in_btn}>CONFIRM</Text>
          </TouchableOpacity>
        </View>
      </Modal> */}


      {/* <Modal visible={otp}
        onRequestClose={() => setOtp(false)}>
        <View style={{ margin: 20 }}>
          <View style={{ flexDirection: 'row' }}>
            <Pressable
              onPress={() => setOtp(false)}>
              <Image style={styles.backward_left_image}
                source={require("../assets/back_left.png")} />
            </Pressable>
            <Text style={{ fontWeight: 'bold', fontSize: 20, alignSelf: 'center', paddingLeft: 30 }}>
              Verify your phone number
            </Text>
          </View>
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
            <Text style={{ color: 'red' }}>
              Resend.
            </Text>
          </Text>
          <TouchableOpacity
            onPress={() => setChangePassword(true)}
            style={styles.button}>
            <Text style={styles.sign_in_btn}>VERIFY</Text>
          </TouchableOpacity>
        </View>
      </Modal> */}



      {/* <Modal visible={changePassword}
        onRequestClose={() => setChangePassword(false)}>
        <View style={{ margin: 20 }}>
          <Pressable
            onPress={() => setChangePassword(false)}>
            <Image style={styles.backward_left_image}
              source={require("../assets/back_left.png")} />
          </Pressable>
          <Text style={{ paddingTop: 20 }}>
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
            onPress={() => setPasswordResetDone(true)}
            style={styles.button}>
            <Text style={styles.sign_in_btn}>CHANGE PASSWORD</Text>
          </TouchableOpacity>
        </View>
      </Modal> */}


{/* 
      <Modal visible={passwordResetDone}
        onRequestClose={() => setPasswordResetDone(false)}>
        <View style={{ margin: 20 }}>
          <Image 
          style={{width:100,height:100,backgroundColor:'black'}}
          source={{ uri: "https://www.figma.com/file/sCG5EppVptj1RKt8xmOgsW/food-app?type=design&node-id=84-4738&mode=design&t=WYQBThpmFy33bMkz-4" }} />
          <Text style={{ fontSize: 20, color: 'red', fontWeight: 'bold', alignItems: 'center' }}>
            Your password has been reset!
          </Text>
          <TouchableOpacity
            onPress={() => setSignUp(true)}
            style={styles.button}>
            <Text style={styles.sign_in_btn}>DONE</Text>
          </TouchableOpacity>
        </View>
      </Modal> */}



    </View>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor:'white',
    padding:20
  },
  text_sign_in: {
    height: 'auto',
    height: 'auto',
    fontWeight: 'bold',
    fontSize: 25,
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
  icon: {
    alignSelf: 'flex-end',
    position: 'absolute',

  },
  forgot_password: {
    fontSize: 16,
    color: 'red',
    textAlign: 'right',
    paddingTop: 10
  },
  image: {
    width: 40,
    height: 40,
    margin: 5
  },
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
  }
});