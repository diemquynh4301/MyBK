import React from "react";
import { View, Text,Button,StyleSheet, ImageBackground } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function Home(){
    const navigation = useNavigation();

    return(
        <View style ={styles.container}>
            <Button title="Nhấn để scan" onPress={()=>navigation.navigate('Scanner')} />
        </View>
    )
}


const styles = StyleSheet.create({
    container :{
        flex : 1,
        alignItems : 'center',
        justifyContent :'center'
    }
})
