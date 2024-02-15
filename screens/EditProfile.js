import { View, Image,Text,TextInput, TouchableOpacity,StyleSheet } from "react-native";

export default function EditProfile({navigation}) {
    return (
        <View style={{ flex: 1 ,backgroundColor:'white'}}>
            <View style={{alignSelf:'center',position:'relative',margin:30}}>
                <Image
                    style={styles.image}
                    source={{ uri: 'https://images.pexels.com/photos/1130623/pexels-photo-1130623.jpeg?auto=compress&cs=tinysrgb&w=600' }} />
                <Image
                    style={styles.image1}
                    source={require('../assets/edit.png')} />
            </View>


            <View style={{margin:20,}}>
            <View style={styles.view_textInput}>
                <TextInput
                    style={styles.textInput}
                    textContentType="name" 
                    placeholder="HUNNY CODE">HUNNY CODE</TextInput>
                <Text style={styles.email_border}>NAME</Text>
            </View>
            <View style={styles.view_textInput}>
                <TextInput
                    style={styles.textInput}
                    textContentType="emailAddress" 
                    placeholder="code.hunny40@gmail.com">code.hunny40@gmail.com</TextInput>
                <Text style={styles.email_border}>EMAIL</Text>
            </View>
            <View style={styles.view_textInput}>
                <TextInput
                    style={styles.textInput}
                    textContentType="telephoneNumber"
                    keyboardType="decimal-pad"
                    placeholder="+91  0123456789" >+91  0123456789</TextInput>
                <Text style={styles.email_border}>PHONE NUMBER</Text>
            </View>
            <View style={styles.view_textInput}>
                <TextInput
                    style={styles.textInput}
                    textContentType="location"
                    placeholder="India">India</TextInput>
                <Text style={styles.email_border}>LOCATION</Text>
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate("Profile")}
                style={styles.button}>
                <Text style={styles.sign_in_btn}>SAVE CHANGES</Text>
            </TouchableOpacity>
            </View>
        


        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
        backgroundColor: 'black',
        borderRadius: 100,
        position: 'relative',
    },
    button: {
        backgroundColor: 'red',
        borderRadius: 30,
        marginTop: 25,
        padding: 15,
    },
    image1:{
        width: 30,
        backgroundColor:'lightgrey',
        borderRadius:100,
        height: 30 ,
        marginLeft:75,
        marginTop:65,
        position:'absolute',
    },
    sign_in_btn: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
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
})