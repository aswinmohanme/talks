import React from 'react';
import { View, Text, TextInput } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ''
    };
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TextInput style={{ height: 40 }} onChangeText={(text) => this.setState({ name: text })} placeholder="Type your Name" />
        <Text>Hello {this.state.name}</Text>
      </View>
    );
  }
}