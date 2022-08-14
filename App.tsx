// import {StatusBar} from 'expo-status-bar'
import 'expo-dev-client'
import {NavigationContainer} from '@react-navigation/native'
import Contents from './Contents'
/* import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font' */

import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default function App() {
  /* let [fontsLoaded] = useFonts({
    'Montserrat': require('./assets/fonts/Montserrat-VariableFont_wght.ttf'),
  })

  if (!fontsLoaded)
    return <AppLoading /> */

  return (
    <NavigationContainer>
      <Contents />
    </NavigationContainer>
  )
}