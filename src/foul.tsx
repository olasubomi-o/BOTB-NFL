import { Video } from 'expo-av';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import 'react-native-url-polyfill/auto';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Configuration, OpenAIApi } from 'openai';



export default function Foul() {
    const navigation = useNavigation();
    const [holdingDefinition, setHoldingDefinition] = useState('Holding is a penalty that occurs when an offensive player grabs or holds onto a defender, preventing them from making a play on the ball or tackling the ball carrier. It results in a loss of yardage for the offending team and a replay of the down.');
    const goBackToBottomTabNav = () => {
        navigation.navigate('BottomTabNav');
      };
    const five = async () => {
        const configuration = new Configuration({
          apiKey: "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",
        });
        const openai = new OpenAIApi(configuration);
        const response = await openai.createCompletion({
          model: "text-davinci-003",
          prompt: `Explain what "holding" in american football means like I am five:\n${holdingDefinition}`,
          temperature: 0.5,
          max_tokens: 60,
        });
        setHoldingDefinition(response.data.choices[0].text.trim());
      }

      const soccer = async () => {
        const configuration = new Configuration({
          apiKey: "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",
        });
        const openai = new OpenAIApi(configuration);
        const response = await openai.createCompletion({
          model: "text-davinci-003",
          prompt: `Explain what "holding" in american football means in soccer terms:\n${holdingDefinition}`,
          temperature: 0.5,
          max_tokens: 60,
        });
        setHoldingDefinition(response.data.choices[0].text.trim());
      }
      
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goBackToBottomTabNav} style={styles.backbutton}>
        <Text style={styles.backbuttonTitle}>Go Back</Text>
      </TouchableOpacity>
      <Text style={styles.title}>NFL Rule expert</Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 1, marginLeft: 18, marginTop:12 }}>
  Foul on the field is an <Text style={{ fontStyle: 'italic', color: 'red' }}>holding foul</Text>
</Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 12, marginBottom: 10, marginLeft: 12 }}> What is a holding foul?</Text>
      <Text style={{margin:12, fontSize:16, lineHeight:23, marginLeft:23, marginBottom:20}}>{holdingDefinition}</Text>
      <View style={{ flexDirection: 'row' }}>
  <TouchableOpacity onPress={five} style={[styles.button, { marginRight: 0 }]}>
    <Text style={styles.buttonTitle}> Explain like I am five</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={soccer} style={styles.button}>
    <Text style={styles.buttonTitle}> Explain in soccer terms</Text>
  </TouchableOpacity>
</View>

 <Video source={require('../assets/holding.mov')}
        style={{ width: '100%',height: '30%', marginTop:15}}
        shouldPlay
        resizeMode="cover"
        isLooping />
      <Image source={require('../assets/Jeff.png')} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop:50,
    textAlign: 'center',
  },
  image: {
    width: 200,
    height: 200,
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  button: {
    backgroundColor: 'black',
    marginLeft: 10,
    height: 48,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: '45%',
  },
  buttonTitle: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Urbanist-Bold',
  },
  backbutton: {
    backgroundColor: 'black',
    marginLeft: 10,
    height: 48,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: '25%',
    marginTop:70,

  },
  backbuttonTitle: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Urbanist-Bold',
  },
});
