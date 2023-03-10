import { Button, ListItem, Divider } from '@rneui/themed';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FlatList } from 'react-native';
import { useNavigation } from "@react-navigation/native";



export default function Passes() {

const [passexpanded, setPassExpanded] = React.useState(false);
const [runexpanded, setRunExpanded] = React.useState(false);
const [kickexpanded, setKickExpanded] = React.useState(false);

const navigation = useNavigation();

   
  return (
    <View style={styles.container}>
      <>
      <ListItem.Accordion
        content={
          <ListItem.Content>
            <ListItem.Title style={{fontSize:20, fontWeight:'bold', marginBottom:10}}>Make a pass call</ListItem.Title>
            <ListItem.Subtitle>What pass call will coach make?</ListItem.Subtitle>
            <Divider />
          </ListItem.Content>
          
        }
        isExpanded={passexpanded}
        onPress={() => {
          setPassExpanded(!passexpanded);
        }}
      >
        <ListItem>
          <ListItem.Content>
            <ListItem.Title style={{fontSize:20, fontWeight:'bold', marginBottom:10}}>Forward Pass</ListItem.Title>
            <ListItem.Subtitle>Historically, Coach Jones played a forward pass every 4th down with Juju off the field but since the signing of the young prospect Kyle Coach has been playing runs with him.</ListItem.Subtitle>
            <Button
               title="Select"
               buttonStyle={{ backgroundColor: 'rgba(39, 39, 39, 1)' }}
               containerStyle={{
                 width: 150,
                 marginHorizontal: 235,
                 marginVertical: 20,
               }}
               titleStyle={{ color: 'white', marginHorizontal: 20 }}
               onPress={()=>{
                navigation.navigate('Play2Play')
           }}
            />
            <View style={{marginBottom:10}}>
            <Divider />
            </View>
          </ListItem.Content>
        </ListItem>
        <ListItem>
          <ListItem.Content>
            <ListItem.Title style={{fontSize:20, fontWeight:'bold', marginBottom:10}}>Slant Pass</ListItem.Title>
            <ListItem.Subtitle>With the newly signed reciever, Coach has been playing more slant plays than he usually does but the opponent have amazing pass coverage.</ListItem.Subtitle>
            <Button
               title="Select"
               buttonStyle={{ backgroundColor: 'rgba(39, 39, 39, 1)' }}
               containerStyle={{
                 width: 150,
                 marginHorizontal: 235,
                 marginVertical: 20,
               }}
               titleStyle={{ color: 'white', marginHorizontal: 20 }}
               onPress={()=>{
                navigation.navigate('Play2Play')
           }}
            />
          </ListItem.Content>
        </ListItem>
      </ListItem.Accordion>
      <ListItem.Accordion
        content={
          <ListItem.Content>
            <ListItem.Title style={{fontSize:20, fontWeight:'bold', marginBottom:10}}>Make a run call</ListItem.Title>
            <ListItem.Subtitle>What run call will coach make?</ListItem.Subtitle>
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
            <ListItem.Title style={{fontSize:20, fontWeight:'bold', marginBottom:10}}>Counter Run</ListItem.Title>
            <ListItem.Subtitle>Historically, Coach Jones played a counter run every 3rd down with Jon Jon on the field.</ListItem.Subtitle>
            <Button
               title="Select"
               buttonStyle={{ backgroundColor: 'rgba(39, 39, 39, 1)' }}
               containerStyle={{
                 width: 150,
                 marginHorizontal: 235,
                 marginVertical: 20,
               }}
               titleStyle={{ color: 'white', marginHorizontal: 20 }}
               onPress={()=>{
                    navigation.navigate('Play2Play')
               }}
            />
            <View style={{marginBottom:10}}>
            <Divider />
            </View>
          </ListItem.Content>
        </ListItem>
        <ListItem>
          <ListItem.Content>
            <ListItem.Title style={{fontSize:20, fontWeight:'bold', marginBottom:10}}>Slant Pass</ListItem.Title>
            <ListItem.Subtitle>With the newly signed reciever, Coach has been playing more slant plays than he usually does but the opponent have amazing pass coverage.</ListItem.Subtitle>
            <Button
               title="Select"
               buttonStyle={{ backgroundColor: 'rgba(39, 39, 39, 1)' }}
               containerStyle={{
                 width: 150,
                 marginHorizontal: 235,
                 marginVertical: 20,
               }}
               titleStyle={{ color: 'white', marginHorizontal: 20 }}
            />
          </ListItem.Content>
        </ListItem>
      </ListItem.Accordion>
    </>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 10,
    
  },
});
