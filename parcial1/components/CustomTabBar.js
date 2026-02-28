import React from 'react';
import { View, Pressable, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useSegments } from 'expo-router';

export default function CustomTabBar() {
  const router = useRouter();
  const segments = useSegments();
  const current = segments[1] ?? segments[0] ?? 'Miki';

  const tabs = ['Miki', 'Choy', 'Mitzu'];

  return (
    <SafeAreaView edges={["bottom"]} style={styles.safe} pointerEvents="box-none">
      <View style={styles.row} pointerEvents="box-none">
        {tabs.map((label) => {
          const isFocused = current === label;
          const onPress = () => router.push(`/cat/${label}`);
          return (
            <Pressable
              key={label}
              onPress={onPress}
              style={({ pressed }) => [styles.tab, isFocused && styles.tabActive, pressed && styles.tabPressed]}
              android_ripple={{ color: '#004d40' }}
            >
              <Text style={[styles.label, isFocused && styles.labelActive]}>{label}</Text>
            </Pressable>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { backgroundColor: '#e0f7fa', position: 'absolute', left: 0, right: 0, bottom: 0 },
  row: { flexDirection: 'row', height: 64, alignItems: 'center' },
  tab: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingVertical: 10 },
  tabActive: { backgroundColor: '#00796b' },
  tabPressed: { opacity: 0.85, transform: [{ scale: 0.995 }] },
  label: { color: '#00695c', fontSize: 16, fontWeight: '600' },
  labelActive: { color: '#ffffff' },
});
