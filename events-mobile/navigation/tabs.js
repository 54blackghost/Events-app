import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home-screen';
import QRCodeScreen from '../screens/qr-code-screen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export const HomeTabs = () => {
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            headerShown: false,  
            tabBarShowLabel: false,
            tabBarStyle: {
                backgroundColor: 'black',   
            },
            tabBarActiveTintColor: 'yellow',
            //tabBarActiveTintColor: 'red',
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;   
                if (route.name === 'HomeTabs') {
                    iconName = focused ? 'home' : 'home-outline';
                } else if (route.name === 'QrCode') {
                    iconName = focused ? 'qr-code' : 'qr-code-outline';
                }
                return <Ionicons name={iconName} size={focused ? 35 : size} color={color} />;
            }
        })}
    
    >
      <Tab.Screen 
        name="HomeTabs" 
        component={HomeScreen} 
        options={{
            title: 'Home',
            headerTitleAlign: 'center',
        }}
      />
      <Tab.Screen 
        name="QrCode" 
        component={QRCodeScreen} 
        options={{
        title: 'QrCode',
        headerTitleAlign: 'center',
      }}
      />
    </Tab.Navigator>
  );
}