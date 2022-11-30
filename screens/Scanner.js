import React,{useState , useEffect} from "react";
import {Text,View,StyleSheet,Button,Linking, Modal } from 'react-native';
import {BarCodeScanner } from 'expo-barcode-scanner'; 

export default function Scanner(){
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    
    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
        };
    
        getBarCodeScannerPermissions();
    }, []);
    
    const handleBarCodeScanned = ({ data }) => {
        setScanned(true);
        if (data == null){
            alert(`Không tìm thấy dữ liệu`);
        }
        alert(`MSSVlà ${data}`);
    };

    
    if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
    return <Text>No access to camera</Text>;
    }

    return (
    <View style={styles.container}>
        <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
        />
        {scanned && <Button title={'Nhấn để thử lại'} onPress={() => setScanned(false)} />}
    </View>
    ); 
}

const styles = StyleSheet.create({
    container:{
        flex : 1,
        flexDirection : 'column',
        justifyContent :'center'
    }
})