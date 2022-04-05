import { StatusBar } from 'expo-status-bar';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from './screens/home';
import { Character } from './screens/character';
import { Providers } from './components/Providers';


const Stack = createNativeStackNavigator();

export const App = () => {
  return (<>
    <StatusBar style="auto" />
    <Providers>
      <Stack.Navigator initialRouteName='home'>
        <Stack.Screen
          name="home"
          component={Home}
        />
        <Stack.Screen
          name="character"
          component={Character}
          options={
            ({route}) => ({title: route.params.title})
          }
        />
      </Stack.Navigator>
    </Providers>
  </>);
}
