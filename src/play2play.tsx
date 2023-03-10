import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import { useNavigation, useRoute } from '@react-navigation/native';

export default function Play2play() {
  const [countdownCompleted, setCountdownCompleted] = useState(false);
  const navigation = useNavigation(); // Get the navigation object

  const route = useRoute();

  const handleCountdownComplete = () => {
    setCountdownCompleted(true);
    setTimeout(() => {
      navigation.navigate('PlaybyPlay'); // Navigate to a new screen after 5 seconds
    }, 2000); // Wait for 5 seconds before navigating
  };

  return (
    <View style={styles.container}>
      
      {!countdownCompleted && (
        <View>
        <CountdownCircleTimer
          isPlaying
          duration={3}
          colors={['#004777', '#F7B801', '#A30000', '#A30000']}
          colorsTime={[7, 5, 2, 0]}
          onComplete={handleCountdownComplete}
        >
          {({ remainingTime }) => <Text style={{fontSize:18, fontWeight:'bold'}}>{remainingTime}</Text>}
        </CountdownCircleTimer>
        </View>
      )}

  {countdownCompleted && (
        <View>
          {route.params.play === 'Pass' && (
            <View>
          <Text style={{fontSize:18, fontWeight:'bold', margin:10}}>Coach Andy and the team chose a Round 22 Pass. You are spot on</Text>
          <Image style={{width:300, height:300, alignItems:'center', alignContent:'center', marginLeft:60}} source={require('../assets/happyreid.png')} />
              </View>
          )}
            {route.params.play === 'Run' && (
            <View>
          <Text style={{fontSize:18, fontWeight:'bold', margin:10}}>Coach Andy and the team chose a Round 22 Pass. You are got it wrong</Text>
          <Image style={{width:300, height:300, alignItems:'center', alignContent:'center', marginLeft:60}} source={require('../assets/happyreid.png')} />
              </View>
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
