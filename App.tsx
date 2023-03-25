<<<<<<< HEAD
import { StyleSheet } from 'react-native';
import MainNav from './navigation/RootNavigation';

export default function App() {
  return (
    <MainNav />
  );
}

const LAGOON = "#007890"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: LAGOON,
=======
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
>>>>>>> 32baf2820dfd9cdf31b673d6f9ee6c3996b13b7f
    alignItems: 'center',
    justifyContent: 'center',
  },
});
