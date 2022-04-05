import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainStackNavigation from './src/screens/MainStackNavigation/MainStackNavigation';

// amplify
import Amplify from 'aws-amplify';
import awsconfig from './src/aws-exports';
Amplify.configure(awsconfig);

// auth in amplify services
import {withAuthenticator} from 'aws-amplify-react-native'

 const App=()=> {
  return (
    <SafeAreaProvider>
      <MainStackNavigation/>
    </SafeAreaProvider>
  );
}

export default withAuthenticator(App)