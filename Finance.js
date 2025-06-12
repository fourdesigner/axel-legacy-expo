import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Finance() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Finance Screen</Text>
      <Text style={styles.subText}>Track your goals and savings 🪙</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#111' },
  text: { fontSize: 20, color: '#fff', marginBottom: 10 },
  subText: { fontSize: 16, color: '#aaa' },
});
