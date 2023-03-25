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
    alignItems: 'center',
    justifyContent: 'center',
  },
});
