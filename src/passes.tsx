import { Button, ListItem, Divider } from '@rneui/themed';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FlatList } from 'react-native';
import { useNavigation, useRoute } from "@react-navigation/native";



export default function Passes() {

const [passexpanded, setPassExpanded] = React.useState(false);
const [runexpanded, setRunExpanded] = React.useState(false);
const [kickexpanded, setKickExpanded] = React.useState(false);

const navigation = useNavigation();
const route = useRoute();

   
  return (
    <ScrollView style={styles.container}>
      <>
      <ListItem.Accordion
      bottomDivider
        content={
          <ListItem.Content >
            <ListItem.Title style={{fontSize:20, fontWeight:'bold', marginBottom:10}}>Make a pass call</ListItem.Title>
            <ListItem.Subtitle>Find out players involved in a pass call</ListItem.Subtitle>
          </ListItem.Content>
          
        }
        
        isExpanded={passexpanded}
        onPress={() => {
          setPassExpanded(!passexpanded);
        }}
      >
        <ListItem>
          <ListItem.Content>
            <ListItem.Title style={{fontSize:20, fontWeight:'bold', marginBottom:10}}>Patrick Mahomes - QB</ListItem.Title>
            <ListItem.Subtitle>Height: 6'2, Weight: 220Ibs, Success pass rate: 80%,
                Health score: 50%, Injury alert: Sprained Ankle
            </ListItem.Subtitle>
            <View style={{marginBottom:10}}>
            <Divider />
            </View>
          </ListItem.Content>
        </ListItem>
        <ListItem>
          <ListItem.Content>
            <ListItem.Title style={{fontSize:20, fontWeight:'bold', marginBottom:10}}>Travis Kelce</ListItem.Title>
            <ListItem.Subtitle>Height: 6'2, Weight: 220Ibs, Success pass rate: 80%,
                Health score: 70%, Injury alert: None</ListItem.Subtitle>
            <Button
               title="Pass Play"
               buttonStyle={{ backgroundColor: 'rgba(39, 39, 39, 1)' }}
               containerStyle={{
                 width: 150,
                 marginHorizontal: 235,
                 marginVertical: 20,
               }}
               titleStyle={{ color: 'white', marginHorizontal: 20 }}
               onPress={()=>{
                navigation.navigate('Play2Play',{play:'Pass'})
           }}
            />
          </ListItem.Content>
        </ListItem>
      </ListItem.Accordion>

      <ListItem.Accordion
        content={
          <ListItem.Content>
            <ListItem.Title style={{fontSize:20, fontWeight:'bold', marginBottom:10}}>Make a run call</ListItem.Title>
            <ListItem.Subtitle>Find out players involved in a run call</ListItem.Subtitle>
            <Divider />
          </ListItem.Content>
          
        }
        isExpanded={runexpanded}
        onPress={() => {
          setRunExpanded(!runexpanded);
        }}
      >
        <ListItem>
          <ListItem.Content>
          <ListItem.Title style={{fontSize:20, fontWeight:'bold', marginBottom:10}}>Patrick Mahomes - QB</ListItem.Title>
            <ListItem.Subtitle>Height: 6'2, Weight: 220Ibs, Success run rate: 80%,
                Health score: 50%, Injury alert: Sprained Ankle
            </ListItem.Subtitle>
            <View style={{marginBottom:10}}>
            <Divider />
            </View>
          </ListItem.Content>
        </ListItem>
        <ListItem>
          <ListItem.Content>
            <ListItem.Title style={{fontSize:20, fontWeight:'bold', marginBottom:10}}>Isiah Pacheco</ListItem.Title>
            <ListItem.Subtitle>Height: 6'2, Weight: 220Ibs, Success run rate: 80%,
                Health score: 70%, Injury alert: None</ListItem.Subtitle>
            <Button
               title="Run Play"
               buttonStyle={{ backgroundColor: 'rgba(39, 39, 39, 1)' }}
               containerStyle={{
                 width: 150,
                 marginHorizontal: 235,
                 marginVertical: 20,
               }}
               titleStyle={{ color: 'white', marginHorizontal: 20 }}
               onPress={()=>{
                navigation.navigate('Play2Play',{play:'Run'})
               }}
            />
          </ListItem.Content>
        </ListItem>
      </ListItem.Accordion>
    </>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 10,
    
  },
});
