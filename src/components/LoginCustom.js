import React from "react";
import {
  View,
  TextInput,
  Style,
  Platform,
  Image,
  Button,
  Alert,
  ViewBase,
} from "react-native";

export default class LoginCustom extends React.Component {
  render() {
    return (
      <View>
        <TextInput title="Email"></TextInput>
        <TextInput title="Mot de passe"></TextInput>
        <Button>Se connecter </Button>
      </View>
    );
  }
}
