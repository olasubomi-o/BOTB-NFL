import { Avatar, ListItem } from '@rneui/themed';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const leaderboardData = [
  {
    name: 'Quan',
    points: 10000,
    avatar: 'Q',
  },
  {
    name: 'Olasubomi',
    points: 5000,
    avatar: 'O',
  },
  {
    name: 'Shemaiah',
    points: 2000,
    avatar: 'S',
  },
  {
    name: 'Sarah',
    points: 1500,
    avatar: 'S',
  },
  {
    name: 'Alex',
    points: 1000,
    avatar: 'A',
  },
  {
    name: 'Michael',
    points: 800,
    avatar: 'M',
  },
  {
    name: 'Samantha',
    points: 600,
    avatar: 'S',
  },
  {
    name: 'John',
    points: 400,
    avatar: 'J',
  },
  {
    name: 'David',
    points: 200,
    avatar: 'D',
  },
  {
    name: 'Emily',
    points: 100,
    avatar: 'E',
  },
];

export default function Leaderboard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leaderboard</Text>
      {leaderboardData.map((user, index) => (
        <ListItem key={index} bottomDivider>
          <Avatar
            rounded
            title={user.avatar}
            containerStyle={{ backgroundColor: index === 0 ? '#FFD700' : '#c2c2c2' }}
          />
          <ListItem.Content>
            <ListItem.Title>{user.name}</ListItem.Title>
            <ListItem.Subtitle>{`${user.points} points`}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      ))}
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
    marginTop: 90,
    textAlign: 'center',
  },
});
