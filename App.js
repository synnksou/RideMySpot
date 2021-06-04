import React from "react";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import Navigator from "./src/navigations/StackNavigation"

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}


function App() {
  return (
    <Navigator/>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;

