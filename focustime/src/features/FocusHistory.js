import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import {colors} from '../utils/colors';
import {fontSizes,spacing} from '../utils/sizes';

export const FocusHistory = ({history}) => {

  if (!history || !history.length) return <Text style={styles.title2}>TASKS FINISHED :-</Text> ;

  const renderItem = ({item}) =><Text style={styles.item}> -> {item} </Text>

  return (
    <View style= {styles.container}>
      <Text style={styles.title}>TASKS FINISHED :-</Text>
      <FlatList 
        data={history}
        renderItem={renderItem}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container:{
    padding:spacing.md,
    flex:1
  },
  title:{
    color: colors.white,
    fontSize:fontSizes.md,
    fontWeight:'bold'
  },
  item:{
    fontSize:fontSizes.md,
    color:colors.white,
    paddingTop: spacing.sm
  },
  title2:{
    color: colors.white,
    fontSize:fontSizes.md,
    fontWeight:'bold',
    padding:spacing.md
  }
})