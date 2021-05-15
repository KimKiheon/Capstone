import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

export default function CreateComment() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../image/user.png")}
        style={styles.image}
      ></Image>
      <View style={styles.text}>
        <Text>UID</Text>
        <Text>Comment</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    paddingVertical: 5,
  },
  image: {
    height: 30,
    width: 30,
  },
  text: {
    paddingLeft: 15,
    flex: 9,
  },
});
