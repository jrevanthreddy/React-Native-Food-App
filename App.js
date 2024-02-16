import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import signIn from './screens/SignIn';
import Home from './screens/Home'
import Forgot from './screens/Forgot';
import SignUp from './screens/SignUp';
import VerifyPhoneNum from './screens/VerifyPhoneNum';
import VerifyOtp from './screens/VerifyOTP';
import ChangePassword from './screens/ChangePassword';
import PasswordRestDone from './screens/PasswordRestDone';
import EditProfile from './screens/EditProfile';
import OrderHistory from './screens/Orders';
import PaymentMethod from './screens/PaymentMethod';
import AddNewCard from './screens/AddNewCard';
import Address from './screens/Address';
import Favorite from './screens/Favorite';
import PromoCodes from './screens/PromoCodes';
import Slider from './Slider/Slider';



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='signIn'>

        <Stack.Screen name="signIn" component={signIn} options={{ title: 'Sign In', headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Forgot" component={Forgot} options={{ title: 'Forgot Password' }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ title: 'Sign Up' }} />
        <Stack.Screen name="VerifyPhoneNum" component={VerifyPhoneNum} options={{ title: 'Verify your Phone Number' }} />
        <Stack.Screen name="VerifyOtp" component={VerifyOtp} options={{ title: 'Verify your OTP' }} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} options={{ title: 'Change Password' }} />
        <Stack.Screen name="PasswordRestDone" component={PasswordRestDone} options={{ headerShown: false }} />
        <Stack.Screen name="EditProfile" component={EditProfile} options={{ title: 'Edit Profile' }} />
        <Stack.Screen name='OrderHistory' component={OrderHistory} options={{ title: 'OrderHistory' }} />
        <Stack.Screen name='PaymentMethod' component={PaymentMethod} options={{ title: 'Payment Method' }} />
        <Stack.Screen name='Address' component={Address} options={{ title: 'My Address' }} />
        <Stack.Screen name='AddNewCard' component={AddNewCard} options={{ title: 'Card Details' }} />
        <Stack.Screen name='Favorite' component={Favorite} options={{ title:'My Favorite'}} />
        <Stack.Screen name='PromoCodes' component={PromoCodes} />
        <Stack.Screen name='Slider' component={Slider} options={{headerShown:false}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
