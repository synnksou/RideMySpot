import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button title="Se Connecter" onPress={() => navigation.push('Login')}></Button>
      </View>
    );
  }
}
