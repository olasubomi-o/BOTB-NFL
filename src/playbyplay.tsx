import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Video } from 'expo-av';
import * as Animatable from 'react-native-animatable';

export default function Playbyplay() {
  const [foulAnimationFinished, setFoulAnimationFinished] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginTop: 80}}>Play-by-play</Text>
      <Video
        source={require('../assets/play.mov')}
        style={styles.video}
        shouldPlay
        resizeMode="cover"
        isLooping
      />
      <View style={styles.playByPlayContainer}>
        <Animatable.Text animation="fadeIn" delay={1000} style={styles.playByPlayText}>2:32 - Mahomes snapped the ball</Animatable.Text>
        <Animatable.Text animation="fadeIn" delay={2000} style={styles.playByPlayText}>2:15 - Mahomes launches the ball to Juju</Animatable.Text>
        <Animatable.Text
          animation="fadeIn"
          delay={3000}
          style={[styles.playByPlayText, styles.foul]}
          onAnimationEnd={() => setFoulAnimationFinished(true)}
        >
          2:00 - Foul called against the eagles
        </Animatable.Text>
        {foulAnimationFinished && (
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Foul')}>
            <Text style={styles.buttonTitle}> Explain the foul</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  video: {
    width: '100%',
    height: '40%',
    marginTop: 20,
  },
  playByPlayContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  playByPlayText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  button: {
    backgroundColor: 'black',
    marginLeft: 30,
    height: 48,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: '40%',
  },
  buttonTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Urbanist-Bold',
  },
  foul: {
    color: 'red',
  },
});
