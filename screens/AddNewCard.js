import { View ,Text,StyleSheet,TextInput,TouchableOpacity} from "react-native";


export default function AddNewCard() {
    return (

        <View style={{backgroundColor:'white',flex:1}}>


        <View style={{ alignItems: 'center', margin: 15 }}>
            <View style={styles.cardred}>
                <Text style={styles.cardtext}>
                    1111 2222 3333 4444
                </Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.cardtextname}>
                        Titanium Debit
                    </Text>
                    <View style={{ marginLeft: 40 }}>
                        <Text style={styles.cardtextexpire}>
                            Exp.
                        </Text>
                        <Text style={{ color: 'white' }}>
                            End 12/25
                        </Text>
                    </View>
                </View>
            </View>
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
                    textContentType="creditCardNumber" 
                    placeholder="1111 2222 3333 4444"
                    keyboardType="number-pad">1111 2222 3333 4444</TextInput>
                <Text style={styles.email_border}>CARD NUMBER</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <View style={styles.view_textInput}>
                <TextInput
                    style={styles.textInput1}
                    textContentType="telephoneNumber"
                    keyboardType="decimal-pad"
                    placeholder="12/25" >12/25</TextInput>
                <Text style={styles.email_border}>MM/YY</Text>
            </View>
            <View style={styles.view_textInput}>
                <TextInput
                    style={styles.textInput1}
                    textContentType="telephoneNumber"
                    keyboardType="decimal-pad"
                    secureTextEntry>567</TextInput>
                <Text style={styles.email_border}>CVV</Text>
            </View>
            
            </View>
            <TouchableOpacity
                style={styles.button}>
                <Text style={styles.sign_in_btn}>SAVE</Text>
            </TouchableOpacity>
            </View>
        



        </View>

    )
}

const styles=StyleSheet.create({
    cardred: {
        borderRadius: 20,
        backgroundColor: 'red',
        width: 350,
        height: 220,
        marginTop: 20
    },
    cardtext: {
        color: 'white',
        fontSize: 16,
        margin: 25
    },
    cardtextname: {
        color: 'white',
        fontSize: 16,
        margin: 25,
        marginTop: 80,
    },
    cardtextexpire: {
        color: 'white',
        fontSize: 16,
        marginTop: 80
    },
    textInput1: {
        width: 175,
        borderWidth: 0.8,
        borderRadius: 30,
        borderColor: 'grey',
        padding: 12,
        marginTop: 20,
        paddingLeft: 20,
        position: 'relative'
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
