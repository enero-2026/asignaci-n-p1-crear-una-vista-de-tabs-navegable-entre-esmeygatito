import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams } from 'expo-router';

export default function CatPage() {
  const { name } = useLocalSearchParams();
  const images = {
    Miki: require('../../assets/miki.jpg'),
    Choy: require('../../assets/choy.jpg'),
    Mitzu: require('../../assets/mitzu.jpg'),
  };

  const imageSource = images[name] ?? require('../../assets/miki.jpg');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Image source={imageSource} style={styles.image} resizeMode="cover" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#e6f7ff', alignItems: 'center', justifyContent: 'center', padding: 16 },
  title: { fontSize: 32, fontWeight: '700', color: '#00695c', marginBottom: 16 },
  image: { width: 300, height: 300, borderRadius: 16, borderWidth: 4, borderColor: '#81d4fa' },
});
