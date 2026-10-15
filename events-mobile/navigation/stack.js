//https://reactnavigation.org/ --> lien pour la doc de react navigation

import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home-screen';
import EventDetailScreen from '../screens/event-detail-screen';
import { navOptions } from './options';
import { useNavigation } from '@react-navigation/native';
import ProfilesScreen from '../screens/profiles/profiles-screen';
import ProfileDetailScreen from '../screens/profiles/profiles-detail-screen';
import { HomeTabs } from './tabs';





const Stack = createStackNavigator();

export const HomeStack = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator 
      screenOptions={()=>navOptions(navigation)}
    >
    <Stack.Screen 
      name="Home" 
      component={HomeTabs} 
      options={{
      title: 'Home',
      headerTitleAlign: 'center',
      }}
    />
    <Stack.Screen 
      name="Event"
      component={EventDetailScreen}
      options={{
      title: 'Event',
      headerTitleAlign: 'center',
      }}
    />
    
    </Stack.Navigator>
  );
}

export const ProfileStack = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator 
      screenOptions={()=>navOptions(navigation)}
    >
    <Stack.Screen 
      name="Profiles" 
      component={ProfilesScreen} 
      options={{
      title: 'Profiles',
      headerTitleAlign: 'center',
      }}
    />
    <Stack.Screen 
      name="Profile" 
      component={ProfileDetailScreen} 
      options={{
      title: 'Profile',
      headerTitleAlign: 'center',
      }}
    />
    </Stack.Navigator>
  );
}
