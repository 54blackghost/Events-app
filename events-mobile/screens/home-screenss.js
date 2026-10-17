import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native';
import { View, Text,StyleSheet } from 'react-native';
import EventList from '../components/events/event-list';




const HomeScreen = () => {
    const [data, setData] = useState([]);

    useEffect(() => { 
      fetchData();
    }, []);

    const fetchData = async () => {
      const response = await fetch(
        //'http://127.0.0.1:8000/api/events/',
        'http://192.168.1.25:8000/api/events/',
        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        },
      );
      const data = await response.json();
      setData(data);

    };

    useEffect(() => {
      fetchData();
    }, []);

  

  return (
    <View style={styles.screen}>
      <EventList data={data}/>
    </View>
  );

};


const styles = StyleSheet.create({
  screen: {
    
    padding: 20,
  },
});

export default HomeScreen;