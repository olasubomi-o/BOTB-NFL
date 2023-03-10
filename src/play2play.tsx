import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'


export default function Play2play() {
  const [countdownCompleted, setCountdownCompleted] = useState(false);

  const handleCountdownComplete = () => {
    setCountdownCompleted(true);
  };

  return (
    <View style={styles.container}>
      
      {!countdownCompleted && (
        <View>
        <CountdownCircleTimer
          isPlaying
          duration={5}
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
          <Text style={{fontSize:20, fontWeight:'bold', marginBottom:10}}>Make a pass call</Text>
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
