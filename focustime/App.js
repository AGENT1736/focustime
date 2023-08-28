import  React, {useState} from 'react';
import {Text, View, StyleSheet, Platform, SafeAreaView, StatusBar} from 'react-native';
import Constants from 'expo-constants';
import{colors} from './src/utils/colors';
import{Focus} from './src/features/Focus';
import{Timer} from './src/features/Timer';
import{FocusHistory} from './src/features/FocusHistory';

//this is the default app "The main app"
export default function App() {
  const[currentSubject, setCurrentSubject] = useState();
  const[history, setHistory] = useState([]);
  return (
    //in view style container is called
    <SafeAreaView style={styles.container}>
      {!currentSubject?
      <>
      <Focus addSubject = {setCurrentSubject} />
      <FocusHistory history={history} />
      </>
      :
      <Timer
      focusSubject = {currentSubject}
      onTimerEnd = {(subject) => {
        setHistory([...history,subject])
      }}
      clearSubject = {() => {setCurrentSubject(null)}}
      />
       }
    </SafeAreaView>
  );
}

//styles is an object
//StyleSheet.create has inherent optimization of applying certain memory efficient styling
const styles = StyleSheet.create({
  //container is a part of the object
  container: {
    //flex is a way to make the UI fit in a way that makes sense
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue,
  },
  
});
