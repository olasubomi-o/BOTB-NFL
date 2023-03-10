import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import Passes from './passes';

export default function PlaySelect() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Coach Moment - Play Coach!</Text>
      {/* <Text style={{ fontSize: 18,fontWeight: 'bold', margin:10, marginTop:30, marginLeft:22}}>Down: 3rd </Text>
      <Text style={{ fontSize: 18,fontWeight: 'bold', margin:10, marginTop:10, marginLeft:22}}>Distance: 8</Text>
      <Text style={{ fontSize: 18,fontWeight: 'bold', margin:10, marginLeft:22}}>Time: 03:10</Text> */}
      <Image source={require('../assets/Kansas.jpg')} style={{ width: '100%', height: 200, marginTop: 20 }} />
    
      <Passes />
      <Image style={styles.image} source={require('../assets/andystart.png')} />
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
  image: {
    width: 250,
    height: 200,
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});
