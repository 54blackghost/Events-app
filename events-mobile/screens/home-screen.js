import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, Image } from 'react-native';

const API_BASE_URL = 'http://192.168.1.25:8000'; // Remplace par ton IP locale ou ngrok

export default function HomeScreen() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/events/`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setEvents(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Erreur fetch events:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <ActivityIndicator style={styles.center} size="large" color="#0000ff" />;
  if (error) return <Text style={styles.center}>Erreur : {error}</Text>;

  return (
    <View style={styles.container}>
      <FlatList
        data={events}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          // Remplacer 127.0.0.1 par l'IP dynamique pour afficher l'image du QR code sur mobile
          const qrCodeUrl = item.qr_code.replace('127.0.0.1:8000', '192.168.1.15:8000');

          return (
            <View style={styles.card}>
              <Text style={styles.title}>{item.name}</Text>
              <Text>{item.description}</Text>
              <Text style={styles.date}>Date : {new Date(item.date).toLocaleDateString()}</Text>
              {qrCodeUrl && (
                <Image source={{ uri: qrCodeUrl }} style={styles.qrImage} resizeMode="contain" />
              )}
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  card: { padding: 16, marginBottom: 12, backgroundColor: '#f9f9f9', borderRadius: 8, borderWidth: 1, borderColor: '#eee' },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 4 },
  date: { fontSize: 12, color: '#666', marginTop: 8 },
  qrImage: { width: 100, height: 100, marginTop: 8 },
});
