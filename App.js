if(!global.self) global.self = global;
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {Permissions} from 'expo';

export default class App extends React.Component {

  onPress = async () => {
    const {status} = await Permissions.askAsync(Permissions.CAMERA);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Button onPress={this.onPress} title='Ask for permission' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
