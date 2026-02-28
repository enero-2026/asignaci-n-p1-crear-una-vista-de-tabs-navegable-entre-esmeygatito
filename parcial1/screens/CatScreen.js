import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CatScreen({ route }) {
  const name = route?.params?.catName ?? route?.name ?? 'Gato';

  const remoteImages = {
    Miki: 'https://placekitten.com/600/600',
    Choy: 'https://placekitten.com/601/600',
    Mitzu: 'https://placekitten.com/602/600',
  };

  const imageUri = remoteImages[name] || 'https://placekitten.com/600/600';

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Image source={{ uri: imageUri }} style={styles.image} resizeMode="cover" />
      <View style={styles.noteBox}>
        <Text style={styles.note}>Puedes reemplazar la imagen remota por una local en parcial1/assets/</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#e6f7ff', alignItems: 'center', justifyContent: 'center', padding: 16 },
  title: { fontSize: 32, fontWeight: '700', color: '#00695c', marginBottom: 16 },
  image: { width: 300, height: 300, borderRadius: 16, borderWidth: 4, borderColor: '#81d4fa', marginBottom: 16 },
  noteBox: { marginTop: 8, padding: 12, backgroundColor: '#b2dfdb', borderRadius: 8 },
  note: { color: '#004d40' },
});
