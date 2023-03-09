import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BottomTabNav from './navigation/bottomTab';
import Leaderboard from './src/leaderboard';
import Rewards from './src/rewards';
import PlaySelect from './src/selectPlay';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
              name="BottomTabNav"
              component={BottomTabNav}
              options={{ headerShown: false }}

              
      />
    
      </Stack.Navigator>
    </NavigationContainer>
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
