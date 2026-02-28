import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import CustomTabBar from '../components/CustomTabBar';

export default function Layout() {
  return (
    <View style={styles.container}>
      <Stack screenOptions={{ headerShown: false }} />
      <View style={styles.tabSpacer} />
      <CustomTabBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  tabSpacer: { height: 64 },
});
