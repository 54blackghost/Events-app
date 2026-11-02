import { useEffect, useState } from "react";
import { View, StyleSheet ,Text, Button  } from "react-native";
import { CameraView } from 'expo-camera';

const QRCodeScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await CameraView.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);

    if (data) {
      // use the navigation in oder to navigate to the event details screen with the scanned data
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }


  return ( 
      <View style={styles.screen}>
          <CameraView
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
          />
          {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
      </View>
    );
}

const styles = StyleSheet.create({
    screen: {
     flex: 1,
    },
  });
 
export default QRCodeScreen;