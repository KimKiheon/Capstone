import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";

export default function Header() {
  return (
    <SafeAreaView style={styles.HeaderContainer}>
      <Text style={styles.HeaderText}>Bookiv</Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  HeaderContainer: {
    marginLeft: 20,
  },
  HeaderText: {
    fontSize: 30,
    fontWeight: "700",
    color: "#8A4B08",
  },
});
