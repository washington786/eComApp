import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainStackNavigation from './src/screens/MainStackNavigation/MainStackNavigation';

export default function App() {
  return (
    <SafeAreaProvider>
      <MainStackNavigation/>
    </SafeAreaProvider>
  );
}
