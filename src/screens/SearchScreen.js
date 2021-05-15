import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Touchable,
  StyleSheet,
} from "react-native";
export default function SearchScren() {
  return (
    <View style={styles.container}>
      <View style={styles.submitBar}>
        <TouchableOpacity>
          <Text>✂︎</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>올리기</Text>
        </TouchableOpacity>
      </View>
      <Text>kkk</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  submitBar: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
