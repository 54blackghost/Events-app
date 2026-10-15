import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Button } from 'react-native';


const ProfilesScreen = () => {
    const navigation = useNavigation();
    return (  
        <View>
            <Text>Profiles Screen</Text>
            <Button title="some profiles" onPress={() => navigation.navigate('Profile', { profileId: 1 })} />
        </View>
    );
}
 
export default ProfilesScreen;