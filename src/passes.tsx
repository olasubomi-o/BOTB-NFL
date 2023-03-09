import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native';

const DATA = [{
    id: '1',
    name: 'Forward Pass',
    image:''
},
{
    id: '2',
    name: 'Slant Pass',
    image:''
},
{
    id: '3',
    name: 'Out Pass',
    image:''
},

]

export default function PassList() {
  return (
    <View style={styles.container}>
      <FlatList data={DATA}/>
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
