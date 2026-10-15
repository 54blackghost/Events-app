import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { HeaderBackButton } from '@react-navigation/elements';
import { View, Text } from 'react-native';


const ProfileDetailScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const { profileId } = route.params;


    useLayoutEffect(() => {
        navigation.setOptions({
          headerLeft: () => (
            <HeaderBackButton 
            tintColor="white"
            onPress={() => navigation.goBack()} />
          ),
        });
      }, []);
    return ( 
        <View>
            <Text>Profile ID: {profileId}</Text>
        </View>
     );
}
 
export default ProfileDetailScreen;