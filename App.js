/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  TextInput,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

const color = {
  backgroundColor: '#fffffe',
  textColor: '#000222',
  borderColor: '#F2BEFC',
  inputBackground: '#c7D3E0',
  buttonColor:'#0077B6'
}


function App() {

  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>Let's Sign you in.</Text>
      <Text style={styles.textContainer2}>Welcome back.
        {"\n"}You've been missed!</Text>
      <Text style={styles.textContainer3}>Email</Text>
      <TextInput style={styles.textInput} placeholder="Enter your email" />
      <Text style={styles.textContainerPassword}>Password</Text>
      <TextInput style={styles.textInput} placeholder="Enter your password" />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign in</Text>
      </TouchableOpacity>
      <Text style={styles.textContainer4}>Don't have an account? 
      
      <Text onPress={()=>{console.log("register")}} style={styles.textContainer5}> Register</Text>
     
        </Text>
  
    </View>

  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    padding: 30,
    backgroundColor: color.backgroundColor,
  },
  textContainer: {
    color: color.textColor,
    fontSize: 36,
    fontWeight: "800",
    textAlign: "left",
    alignItems: "flex-start",
    marginTop:30
  },
  textContainer2: {
    color: color.textColor,
    fontSize: 34,
    fontWeight: "500",
    textAlign: "left",
    alignItems: "flex-start",
    marginTop: 10,

  },
  textContainer3: {
    color: color.textColor,
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    alignItems: "flex-start",
    marginTop: 40,

  },
  textInput: {
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    padding: 15,
    marginTop: 8,
    fontSize: 20,
    borderRadius: 10,
    backgroundColor: color.backgroundColor
  },
  textContainerPassword: {

    color: color.textColor,
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    alignItems: "flex-start",
    marginTop: 20,
  },
  button:{
    backgroundColor: color.buttonColor,
    height:50,
    marginTop:280,
    borderRadius:10,
  },
  buttonText:{
    color:color.backgroundColor,
    fontSize:20,
    textAlign:"center",
    padding:10
  },
  textContainer4:{
    color:color.textColor,
    fontSize:18,
    textAlign:"center",
    marginTop:20,
    
  },
  textContainer5:{
    color:color.textColor,
    fontSize:18,
    fontWeight:"500",
    
    
  }
})


export default App;
