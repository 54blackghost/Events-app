import { useLayoutEffect, useState, useNavigation } from "react";
import { TextInput, View, Text, StyleSheet, Button} from "react-native";
import { HeaderBackButton } from '@react-navigation/elements';




const NewEventScreen = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState(new Date());
    const [alert, setAlert] = useState({
        isVisible: false,
        msg: '',
    });

      const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: "add new event",
            headerLeft: () => (
            <HeaderBackButton 
            tintColor="white"
            onPress={() => navigation.goBack()} />
            ),
        });
        }, []);

    const handleAddEvent = async () => {
       const d = date.toISOString().split('T')[0]; // Format the date to YYYY-MM-DD
       console.log('date:', d);

       const data = {
            name: name, 
            description: description,
            date: d,
        };  
        const response = await fetch('http://127.0.0.1:8000/api/events/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const res = await response.json();
        console.log('Response from server:', res);
        setAlert({
            isVisible: true,
            msg: 'Event created successfully!',
        });
    }
    return (  
        <View style={styles.screen}>
            {alert.isVisible && <Text>{alert.msg}</Text>}
           <TextInput
             placeholder="name"
             value={name}
             onChangeText={setName}
             style={styles.input}
           />
           <TextInput
             placeholder="description"
             value={description}
             onChangeText={setDescription}
             multiline={true}
             style={styles.input}
           />
           <TextInput
             placeholder="Event Date"
             value={date.toLocaleString()}
             onChangeText={(text) => setDate(new Date(text))}
             style={styles.input}
           />
           <Button onPress={handleAddEvent} title="Create Event" />
        </View>
    );
}
 


const styles = StyleSheet.create({
    screen: {
        padding: 20,
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        backgroundColor: 'white',
    },
});
export default NewEventScreen;