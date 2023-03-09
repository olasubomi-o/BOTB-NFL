<<<<<<< HEAD
import React from 'react';
//import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet} from 'react-native';

interface HighScore {
    name: string;
    score: number;
  }
  
  
  const highScores: HighScore[] = [
    { name: 'John', score: 100 },
    { name: 'Jane', score: 90 },
    { name: 'Mike', score: 80 },
    { name: 'Sarah', score: 70 },
    { name: 'Tom', score: 60 },
  ];
  interface LeaderboardProps {
    highScores: HighScore[];
  }
const Leaderboard: React.FC<LeaderboardProps> = ({ highScores }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Leaderboard</Text>
      {highScores.map((score, index) => (
        <View key={score.name} style={styles.row}>
          <Text style={styles.rank}>{index + 1}</Text>
          <Text style={styles.name}>{score.name}</Text>
          <Text style={styles.score}>{score.score}</Text>
        </View>
      ))}
    </View>
  );
};

export default Leaderboard;
=======
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Leaderboard() {
  return (
    <View style={styles.container}>
      <Text>Leaderboard</Text>
      <StatusBar style="auto" />
    </View>
  );
}
>>>>>>> 43c2358b43b9c9f365bfc11a2464cea4df49d062

const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< HEAD
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  rank: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  name: {
    flex: 3,
    marginLeft: 10,
  },
  score: {
    flex: 2,
    textAlign: 'right',
  },
});

=======
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
>>>>>>> 43c2358b43b9c9f365bfc11a2464cea4df49d062
