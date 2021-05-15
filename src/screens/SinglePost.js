import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Touchable,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { block } from "react-native-reanimated";
import CreateComment from "../components/CreateComment";
import Navigation from "../screens/Navigation";

export default function CreatePost({ navigation }) {
  const [comment, setComment] = useState("");
  const postObj = {
    //사진
    //글(내용)
    //유저아이디
    //좋아요
    //댓글
    //링크
    //
  };
  return (
    <View style={styles.containerBig}>
      <KeyboardAwareScrollView automaticallyAdjustContentInsets={false}>
        <View style={styles.container}>
          <Text>UID</Text>
          <View style={styles.imageContainer}>
            <Image
              // resizeMode="cover"
              style={styles.image}
              source={require("../../image/NorwegianWood.jpeg")}
            />
          </View>
          <View>
            <Text style={styles.content}>
              Eiusmod deserunt culpa sunt est id minim eiusmod proident.
              Essemagnanostrud magna consequat incididunt elit ipsum magna amet
              adipisicingaliqua adipisicing qui. Eu irure non quis excepteur
            </Text>
          </View>
          <View style={styles.textContainer}>
            <View style={styles.comment}>
              <Text>좋아요</Text>
              <Text>댓글</Text>
            </View>
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity>
              <Text>❤️</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>❤️</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>❤️</Text>
            </TouchableOpacity>
          </View>
          <CreateComment />
          <CreateComment />
          <CreateComment />
          <CreateComment />
          <CreateComment />
          <CreateComment />
        </View>
        <KeyboardAvoidingView style={styles.footer}>
          <View style={styles.commentWrite}>
            <TextInput
              style={styles.commentInput}
              placeholder="{}UID로 댓글 달기"
              onChangeText={(comment) => setComment(comment)}
              returnKeyType="send"
            />
            <TouchableOpacity>
              <Text style={styles.submitComment}>❤️</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </KeyboardAwareScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  containerBig: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  image: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    resizeMode: "contain",
    borderWidth: 3,
    paddingVertical: 10,
  },
  imageContainer: {
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
  },
  comment: {
    paddingVertical: 10,
    flexDirection: "row",
  },
  btnContainer: {
    flexDirection: "row",
  },
  commentWrite: {
    alignSelf: "flex-end",
    flexDirection: "row",
    paddingHorizontal: 10,
    width: "100%",
  },
  commentInput: {
    width: "100%",
    height: 30,
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
  },
  submitComment: {
    position: "absolute",
    right: 5,
    top: 5,
  },
  footer: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
