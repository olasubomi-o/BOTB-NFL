import { Icon, ListItem } from '@rneui/themed';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Rewards() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rewards</Text>
      <View style={styles.button}>
        <Icon name="currency-usd" type="material-community" color="white" />
        <Text style={styles.buttonTitle}>3300</Text>
      </View>
      <>
        <ListItem bottomDivider>
          <Icon name="lock-open" type="material-community" color="grey" />
          <ListItem.Content style={{ flexDirection: 'row' }}>
            <ListItem.Title style={{ flex: 1 }}>5% off NFL merchandise</ListItem.Title>
            <ListItem.Subtitle>3000</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <ListItem bottomDivider>
          <Icon name="lock" type="material-community" color="grey" />
          <ListItem.Content style={{ flexDirection: 'row' }}>
            <ListItem.Title style={{ flex: 1 }}>10% off NFL merchandise</ListItem.Title>
            <ListItem.Subtitle>5000</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <ListItem bottomDivider>
          <Icon name="lock-open" type="material-community" color="grey" />
          <ListItem.Content style={{ flexDirection: 'row' }}>
            <ListItem.Title style={{ flex: 1 }}>Free shipping on NFL merchandise</ListItem.Title>
            <ListItem.Subtitle>8000</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <ListItem bottomDivider>
          <Icon name="lock" type="material-community" color="grey" />
          <ListItem.Content  style={{ flexDirection: 'row' }}>
            <ListItem.Title style={{ flex: 1 }}>Free NFL jersey </ListItem.Title>
            <ListItem.Subtitle>10000</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <ListItem bottomDivider>
          <Icon name="lock" type="material-community" color="grey" />
          <ListItem.Content style={{ flexDirection: 'row' }}>
            <ListItem.Title style={{ flex: 1 }}>VIP access to NFL games</ListItem.Title>
            <ListItem.Subtitle>15000</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      </>
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
    marginTop: 140,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'black',
    marginRight: 10,
    height: 48,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    width:'25%',
    position: 'absolute',
    top: 80,
    right: 10,

  },
  buttonTitle: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    
  },
});
