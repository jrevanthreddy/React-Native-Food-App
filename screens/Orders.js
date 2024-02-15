import { Alert, Image, ScrollView, TouchableOpacity } from "react-native";
import { Text, View } from "react-native";

export default function OrderHistory() {
    return (
        <ScrollView>
            <View style={{ flex: 1, backgroundColor: 'white' }}>


                <View style={{ margin: 20, borderRadius: 50, flexDirection: 'row', height: 100 }}>
                    <Image
                        style={{ width: 150, borderTopLeftRadius: 50, borderBottomLeftRadius: 50 }}
                        source={{ uri: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600' }} />
                    <View style={{ margin: 10 }}>
                        <Text >
                            Desert show cafe
                        </Text>
                        <Text style={{ color: 'grey' }}>
                            jul 15,2021 - 10:05 AM
                        </Text>
                        <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                            <Text style={{ color: 'lightgreen' }}>
                                Delivered
                            </Text>
                            <Text style={{ color: 'grey', paddingLeft: 50 }}>
                                $36.42
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={{ margin: 20 }}>
                    <View style={{ flexDirection: 'row', width: 'auto', height: 'auto' }}>
                        <Text style={{ color: 'grey' }}>
                            Momos x 1
                        </Text>
                        <Text style={{ color: 'grey', paddingLeft: 200 }}>
                            $12.75
                        </Text>
                    </View>

                    <View style={{ flexDirection: 'row', width: 'auto', height: 'auto', paddingTop: 5 }}>
                        <Text style={{ color: 'grey' }}>
                            Chicken x 1
                        </Text>
                        <Text style={{ color: 'grey', paddingLeft: 200 }}>
                            $14.91
                        </Text>
                    </View>

                    <View style={{ flexDirection: 'row', width: 'auto', height: 'auto', paddingTop: 5 }}>
                        <Text style={{ color: 'grey' }}>
                            Noodles x 1
                        </Text>
                        <Text style={{ color: 'grey', paddingLeft: 200 }}>
                            $6.34
                        </Text>
                    </View>
                    <TouchableOpacity 
                    onPress={() => Alert.alert('ORDER','Order Successfully')}
                    style={{ backgroundColor: 'lightgrey', borderRadius: 20, marginTop: 20 }}>
                        <Text style={{ textAlign: 'center', padding: 18, fontSize: 16, color: 'red' }}>REPEAT ORDER</Text>
                    </TouchableOpacity>
                </View>




                <View style={{ margin: 20, borderRadius: 50, flexDirection: 'row', height: 100 }}>
                    <Image
                        style={{ width: 150, borderTopLeftRadius: 50, borderBottomLeftRadius: 50 }}
                        source={{ uri: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600' }} />
                    <View style={{ margin: 10 }}>
                        <Text >
                            Desert show cafe
                        </Text>
                        <Text style={{ color: 'grey' }}>
                            jul 15,2021 - 10:05 AM
                        </Text>
                        <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                            <Text style={{ color: 'red' }}>
                                cancelled
                            </Text>
                            <Text style={{ color: 'grey', paddingLeft: 50 }}>
                                $36.42
                            </Text>
                        </View>
                    </View>
                </View>


                <View style={{ margin: 20, borderRadius: 50, flexDirection: 'row', height: 100 }}>
                    <Image
                        style={{ width: 150, borderTopLeftRadius: 50, borderBottomLeftRadius: 50 }}
                        source={{ uri: 'https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=600' }} />
                    <View style={{ margin: 10 }}>
                        <Text >
                            Desert show cafe
                        </Text>
                        <Text style={{ color: 'grey' }}>
                            jul 15,2021 - 10:05 AM
                        </Text>
                        <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                            <Text style={{ color: 'lightgreen' }}>
                                Delivered
                            </Text>
                            <Text style={{ color: 'grey', paddingLeft: 50 }}>
                                $36.42
                            </Text>
                        </View>
                    </View>
                </View>


                <View style={{ margin: 20, borderRadius: 50, flexDirection: 'row', height: 100 }}>
                    <Image
                        style={{ width: 150, borderTopLeftRadius: 50, borderBottomLeftRadius: 50 }}
                        source={{ uri: 'https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=600' }} />
                    <View style={{ margin: 10 }}>
                        <Text >
                            Desert show cafe
                        </Text>
                        <Text style={{ color: 'grey' }}>
                            jul 15,2021 - 10:05 AM
                        </Text>
                        <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                            <Text style={{ color: 'lightgreen' }}>
                                Delivered
                            </Text>
                            <Text style={{ color: 'grey', paddingLeft: 50 }}>
                                $36.42
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={{ margin: 20, borderRadius: 50, flexDirection: 'row', height: 100 }}>
                    <Image
                        style={{ width: 150, borderTopLeftRadius: 50, borderBottomLeftRadius: 50 }}
                        source={{ uri: 'https://images.pexels.com/photos/604969/pexels-photo-604969.jpeg?auto=compress&cs=tinysrgb&w=600' }} />
                    <View style={{ margin: 10 }}>
                        <Text >
                            Desert show cafe
                        </Text>
                        <Text style={{ color: 'grey' }}>
                            jul 15,2021 - 10:05 AM
                        </Text>
                        <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                            <Text style={{ color: 'lightgreen' }}>
                                Delivered
                            </Text>
                            <Text style={{ color: 'grey', paddingLeft: 50 }}>
                                $36.42
                            </Text>
                        </View>
                    </View>
                </View>




            </View>
        </ScrollView>
    )
}