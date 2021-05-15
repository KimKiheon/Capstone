import { useGestureHandlerRef } from "@react-navigation/stack";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  Image,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  View,
} from "react-native";
export default function ForgetPasswordScreen() {
  const [email, setEmail] = useState("");

  const handleChangePassword = () => {
    if (!email) {
      alert("ID를 입력하세요!!");
      return;
    }
    //ID가 존재하지 않을 경우
    //비밀번호 바꾸기
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container2}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Forgot Password</Text>
        </View>
        <View style={styles.inputForm}>
          <Text style={styles.inputFormText}>NAME / EMAIL</Text>
          <TextInput
            style={styles.inputFormInput}
            placeholder="email"
            autoFocus={true}
            returnKeyType="next"
            onChangeText={(email) => setEmail(email)}
            onSubmitEditing={(event) => this.onSubmitHandler(event)}
          />
          <TouchableOpacity
            onPress={handleChangePassword}
            activeOpacity={0.9}
            style={styles.FindBtn}
          >
            <Text style={styles.FindText}>Find</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  container2: {
    flex: 1,
    justifyContent: "flex-start",
    paddingVertical: 50,
    paddingHorizontal: 50,
  },
  header: {
    alignItems: "flex-start",
  },
  headerText: {
    fontSize: 35,
    fontWeight: "600",
  },
  inputForm: {
    paddingVertical: 30,
  },
  inputFormText: {
    paddingVertical: 10,
    fontSize: 15,
    fontWeight: "400",
  },
  inputFormInput: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 20,
  },
  FindBtnText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "400",
  },
  FindBtn: {
    marginTop: 30,
    backgroundColor: "#FE9F59",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    borderRadius: 20,
  },
});
