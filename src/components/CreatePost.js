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
import { block } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

export default function CreatePost() {
  const postObj = {
    //사진
    //글(내용)
    //유저아이디
    //좋아요
    //댓글
    //링크
    //
  };
  const navigation = useNavigation();
  return (
    <View style={styles.setBorder}>
      <TouchableOpacity onPress={() => navigation.navigate("SinglePost")}>
        <Text style={styles.userName}>UID</Text>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={require("../../image/NorwegianWood.jpeg")}
          />
          <View style={styles.textContainer}>
            <Text style={styles.content}>
              Eiusmod deserunt culpa sunt est id minim eiusmod proident. Esse
              magna nostrud magna consequat incididunt elit ipsum magna amet
              adipisicing aliqua adipisicing qui. Eu irure non quis excepteur
            </Text>
            <View style={styles.comment}>
              <Text>좋아요</Text>
              <Text>댓글</Text>
            </View>
          </View>
          {/* </TouchableOpacity> */}
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  setBorder: {
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: "#c2c2c2",
  },
  container: {
    flexDirection: "row",
    paddingHorizontal: 15,
  },
  textContainer: {
    paddingLeft: "5%",
    width: "65%",
  },
  touchScreen: {
    width: "100%",
  },
  content: {
    flex: 9,
  },
  userName: {
    textAlign: "left",
    paddingLeft: "5%",
    paddingVertical: 10,
  },
  image: {
    height: 150,
    width: "33%",
  },
  commentContainer: {
    justifyContent: "center",
  },
  comment: {
    flexDirection: "row",
    justifyContent: "flex-end",
    position: "relative",
  },
});
