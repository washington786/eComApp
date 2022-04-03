import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
// import BottomRouter from '../Navigation/MainBottomNav/BottomRouter';
import StackNavScreen from '../Navigation/StackNav/StackNavScreen';

const MainStackNavigation = () => {
  return (
    <SafeAreaProvider>
        <StackNavScreen/>
    </SafeAreaProvider>
  )
}

export default MainStackNavigation

