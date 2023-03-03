import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from './src/Component/HomePage';
import ProfilePage from './src/Component/ProfilePage';

const Stack = createNativeStackNavigator();

export const MyContext = React.createContext('Adarsh');

const App = () => {
  const [name, setName] = useState('ADarsh');
  return (
    <MyContext.Provider value={{name: 'Pandey', setLastName: setName}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="ProfileScreen" component={ProfilePage} />
        </Stack.Navigator>
      </NavigationContainer>
    </MyContext.Provider>
  );
};

export default App;
