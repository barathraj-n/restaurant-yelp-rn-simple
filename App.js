import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultShowScreen from './src/screens/ResultShowScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Search' screenOptions={{title: 'Business Search', headerTitleAlign: 'center'}}>
        <Stack.Screen name='Search' component={SearchScreen}/>
        <Stack.Screen name='Detail' component={ResultShowScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
