import react, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from '../utils/colors';
import { RoundedButton } from '../components/RoundedButton';
import {spacing} from '../utils/sizes';
export const Focus = ({addSubject}) => {
  const [subject, setSubject] = useState(null);
  console.log(subject);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput 
        style ={styles.textStyle}
        onChangeText={setSubject} 
        label="subject to focus on!" />
        <View style={styles.button}>
        <RoundedButton 
        title="+" size={50}
        onPress ={()=>addSubject(subject)}
         />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
  },
  inputContainer: {
    padding: spacing.lg,
    justifyContent: 'top',
    flexDirection: 'row',
  },
  text: {
    color: colors.white,
  },
  textStyle:{
    flex:1,
    marginRight:spacing.sm,
  },
  button:{
    justifyContent:'center'
  }
});
