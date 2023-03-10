import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Passes from './passes';

export default function PlaySelect() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Coach Moment - Play Coach!</Text>
    
      <Passes />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
  title:{
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 80,

  },
  button: {
    backgroundColor: "#FF5E00",
    marginTop: 40,
    margin:15,
    left:20,
    width: 100,
    height: 100,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
