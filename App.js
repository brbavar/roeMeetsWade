// import {StatusBar} from 'expo-status-bar'
import {NavigationContainer} from '@react-navigation/native'
import Contents from './Contents'
/* import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font' */

export default function App() {
  /* let [fontsLoaded] = useFonts({
    'Montserrat': require('./assets/fonts/Montserrat-VariableFont_wght.ttf'),
  })

  if (!fontsLoaded)
    return <AppLoading /> */

  return (
    <NavigationContainer>
      <Contents /* style={{fontFamily: 'Montserrat'}} */ />
    </NavigationContainer>
  )
}