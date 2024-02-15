import { Image, TextInput, TouchableOpacity } from "react-native";
import { Text, View } from "react-native";


export default function HomeTab({navigation}) {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Image
                style={{ width: 'auto', height: 330 }}
                source={{ uri: 'https://i.stack.imgur.com/B6fEt.png' }} />
            <View style={{ margin: 20 ,marginTop:40}}>
                <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
                    Add new address
                </Text>
                <View style={{ position: 'relative', paddingTop: 10, marginTop: 10 }}>
                    <TextInput
                        style={{ padding: 10, borderWidth: 0.8, borderRadius: 20, paddingLeft: 13, borderColor: 'grey', position: 'relative' }}
                        placeholder="TITLE" />
                    <Text style={{ position: 'absolute', marginLeft: 13, backgroundColor: 'white', color: 'grey' }}>
                        TITLE
                    </Text>
                </View>
                <View style={{ position: 'relative', paddingTop: 10, marginTop: 15 }}>
                    <TextInput
                        style={{ padding: 10, borderWidth: 0.8, borderRadius: 20, paddingLeft: 13, borderColor: 'grey', position: 'relative' }}
                        placeholder="TITLE" />
                    <Text style={{ position: 'absolute', marginLeft: 13, backgroundColor: 'white', color: 'grey' }}>
                        NEW ADDRESS
                    </Text>
                </View>
                <View style={{ paddingTop: 20, flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        style={{ width: 40, height: 40 }}
                        source={{ uri: 'https://www.freepnglogos.com/uploads/dot-png/dot-hole-cavendish-golf-club-award-winning-golf-club-6.png' }} />
                    <Text style={{ paddingLeft: 20, color: 'grey' }}>
                        Use current location
                    </Text>
                </View>
                <TouchableOpacity
                onPress={() => navigation.navigate("Address")}
                    style={{ backgroundColor: 'red', borderRadius: 20, marginTop: 30 }}>
                    <Text style={{ padding: 18, textAlign: 'center', color: 'white' }}>
                        SAVE
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}