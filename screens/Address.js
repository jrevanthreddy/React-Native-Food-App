import { Image, View ,StyleSheet,Text,TouchableOpacity} from "react-native";

export default function Address({navigation}){
    return(
        <View style={styles.view}>
            <View style={{flexDirection:'row',borderWidth:0.2,padding:10,borderRadius:20,marginTop:15,borderColor:'lightgrey'}}>
                <Image
                style={{width:20,height:20,margin:5,resizeMode:'center'}}
                source={require('../assets/home.png')}/>
                <View>
                    <Text style={styles.home}>
                        Home
                    </Text>
                    <Text style={{marginLeft:15}}>
                        Sec 16, Near Metro station 201301
                    </Text>
                </View>
            </View>



            <View style={{flexDirection:'row',borderWidth:0.2,padding:10,borderRadius:20,marginTop:15,borderColor:'lightgrey'}}>
                <Image
                style={{width:20,height:20,margin:5,resizeMode:'center'}}
                source={require('../assets/work.png')}/>
                <View>
                    <Text style={styles.home}>
                        Home
                    </Text>
                    <Text style={{marginLeft:15}}>
                        Sec 16, Near Metro station 201301
                    </Text>
                </View>
            </View>



            <View style={{flexDirection:'row',borderWidth:0.2,padding:10,borderRadius:20,marginTop:15,borderColor:'lightgrey'}}>
                <Image
                style={{width:20,height:20,margin:5,resizeMode:'center'}}
                source={require('../assets/location.png')}/>
                <View>
                    <Text style={styles.home}>
                        Home
                    </Text>
                    <Text style={{marginLeft:15}}>
                        Sec 16, Near Metro station 201301
                    </Text>
                </View>
            </View>


            <TouchableOpacity
                onPress={() => navigation.navigate("Home Tab")}
                style={styles.button}>
                <Text style={styles.sign_in_btn}>ADD NEW ADDRESS</Text>
            </TouchableOpacity>





        </View>
    )
}

const styles=StyleSheet.create({
    view:{
        flex:1,
        padding:20,
        backgroundColor:'white'
    },
    home:{
        fontSize:16,
        fontWeight:'bold',
        marginLeft:15
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