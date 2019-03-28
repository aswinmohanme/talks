import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red'
    };
  }
  render() {
    return (
      <View style={styles.container}>
            <View style={{...styles.box, backgroundColor: this.state.color}}></View>
            <TouchableOpacity onPress={() => this.state.color == 'red' ? this.setState({ color: 'green' }) : this.setState({color: 'red'})}>
          <Text style={styles.changeColorText}>Change Color</Text></TouchableOpacity>
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
  box: {
    height: 100,
    width: 100,
    backgroundColor: 'red',
    borderRadius: 8
  },
  changeColorText: {
    padding: 16,
    fontSize: 16
  }
});
