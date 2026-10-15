import { View, StyleSheet ,Text  } from "react-native";

const QRCodeScreen = () => {
    return ( 
        <View style={styles.screen}>
            <Text>QR Code Skan</Text>
        </View>
     );
}

const styles = StyleSheet.create({
    screen: {
      padding: 20,
    },
  });
 
export default QRCodeScreen;