import React, { useState } from "react";
import { SafeAreaView, StyleSheet, ScrollView, FlatList } from "react-native";
import CreatePost from "../components/CreatePost";
import Header from "../components/Header";

export default function MainScreen() {
  //나중에 FlatList를 적용해야 한다.
  //const renderItem=() 을 통해서 DB에서 받아온 데이터를 CreatePost Prop으로 전달
  //keyExtractor를 잘 사용한다면, 최신과 인기를 잘 나눌 수 있지 않을까?(최신과 인기를 Prop으로 받아야한다.)
  return (
    <SafeAreaView>
      <ScrollView>
        <CreatePost style={styles.underBorder} />
        <CreatePost style={styles.underBorder} />
        <CreatePost style={styles.underBorder} />
        <CreatePost style={styles.underBorder} />
        <CreatePost style={styles.underBorder} />
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  underBorder: {},
});
