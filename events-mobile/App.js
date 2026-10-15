import {NavigationContainer} from '@react-navigation/native';
import { HomeStack } from './navigation/stack';
import { MyDrawer } from './navigation/drawer';
import { StatusBar } from 'react-native';

export default function App() {

  return (
    <NavigationContainer>
      {/* <HomeStack /> */}
      <MyDrawer/> 
      <StatusBar style="light" />
    </NavigationContainer>
  );
}




