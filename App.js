import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import Navigator from './src/navigation/Navigation';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {

  let [fontsLoaded] = useFonts({
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Black': require('./assets/fonts/Poppins-Black.ttf'),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size={"large"} />;
  }

  return (
    <>
      <NavigationContainer>
        <Navigator />
        <StatusBar style="auto" />
      </NavigationContainer>
    </>
  );
}

