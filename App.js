import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Routes from './src/router';

export default function App() {
  return (
    <View style={styles.container}>
      <Routes/>
      <StatusBar style="dark"/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
});
