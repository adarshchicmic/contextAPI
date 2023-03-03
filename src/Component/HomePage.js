import {View, Text, TextInput} from 'react-native';
import React, {useContext} from 'react';
import {MyContext} from '../../App';

export default function HomePage() {
    // const value = useContext(MyContext);
  return (
    <>
      <MyContext.Consumer>
        {value => {
          console.log(value);
          return (
            <View>
              <Text>HomePage {value} </Text>
              {/* <TextInput onChangeText={value => setName(value)} /> */}
            </View>
          );
        }}
      </MyContext.Consumer>
    </>
  );
}
