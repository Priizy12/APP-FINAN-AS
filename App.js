import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes/routes';
import 'react-native-gesture-handler';

import AuthProvider from './src/contexts/auth';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor='#F0F4FF' barStyle="dark-content" />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}


