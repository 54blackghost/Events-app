import { useEffect, useState, useNavigation } from "react";
import { Button, View } from "react-native";
import EventList from "../components/events/event-list";


const HomeScreen1 = () => {
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const navigation = useNavigation();

  const handleRefresh = () => {
    console.log('Refreshing data...');
    setRefresh(prevState => !prevState);
  };

  useEffect(() => {
    fetchData();
  }, [refresh]);

  const fetchData = async () => {
    const response = await fetch('http://127.0.0.1:8000/api/events/');
    const json = await response.json();
    setData(json);
  };

  return ( 
    <View style={styles.screen}>
      <Button onPress={() => navigation.navigate('New Event')} title="Create New Event" />
      <EventList data={data} onRefresh={handleRefresh} />
    </View>
   );
}


const styles = StyleSheet.create({
  screen: {
    padding: 20,
  },
});
 
export default HomeScreen1;