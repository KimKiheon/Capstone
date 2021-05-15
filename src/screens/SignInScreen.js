import React, { useState, createRef } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  Image,
  SafeAreaView,
  TouchableOpacity,
  View,
} from "react-native";

export default function SignInScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailInputRef = createRef();
  const passswordInputRef = createRef();
  const handleLogin = () => {
    if (!email) {
      alert("아이디를 입력해주세요!");
      return;
    }
    if (!password) {
      alert("비밀번호를 입력해주세요!");
      return;
    }
    if (email && password) {
      navigation.navigate("MainTab");
    }
    console.log(email + password);
    //존재하지 않는 아이디일 경우
    //비밀번호 틀릴 경우
    //로그인 보내기
    //로그인 성공했을 경우
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container2}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Sign in</Text>
        </View>
        <View style={styles.inputForm}>
          <Text style={styles.inputFormText}>NAME / EMAIL</Text>
          <TextInput
            style={styles.inputFormInput}
            placeholder="email"
            autoFocus={true}
            returnKeyType="next"
            ref={emailInputRef}
            onChangeText={(email) => setEmail(email)}
            onSubmitEditing={() =>
              passswordInputRef.current && passswordInputRef.current.focus()
            }
          />
          <Text style={styles.inputFormText}>PASSWORD</Text>
          <TextInput
            style={styles.inputFormInput}
            placeholder="password"
            ref={passswordInputRef}
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
            returnKeyType="send"
          />
          <TouchableOpacity
            onPress={handleLogin}
            activeOpacity={0.9}
            style={styles.signInBtn}
          >
            <Text style={styles.signInText}>Log In</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.signUpForm}>
          <View style={styles.signUp}>
            <TouchableOpacity
              onPress={() => navigation.navigate("SignUpScreen")}
              activeOpacity={0.9}
              style={styles.signUpBtn}
            >
              <Text>Sign Up</Text>
            </TouchableOpacity>
            <Text style={styles.separator}> / </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("ForgetPasswordScreen")}
              activeOpacity={0.9}
              style={styles.forgetPassBtn}
            >
              <Text>Forget Password?</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.singUpSNS}>
            <TouchableOpacity
              // onPress={submit}
              activeOpacity={0.9}
              style={styles.iconSNS}
            >
              <Image
                style={styles.tinyImg}
                source={{
                  uri: "https://reactnative.dev/img/tiny_logo.png",
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              // onPress={submit}
              activeOpacity={0.9}
              style={styles.iconSNS}
            >
              <Image
                style={styles.tinyImg}
                source={{
                  uri: "https://reactnative.dev/img/tiny_logo.png",
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              // onPress={submit}
              activeOpacity={0.9}
              style={styles.iconSNS}
            >
              <Image
                style={styles.tinyImg}
                source={{
                  uri: "https://reactnative.dev/img/tiny_logo.png",
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container3: {
    justifyContent: "flex-end",
  },
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
  signInText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "400",
  },
  signInBtn: {
    marginTop: 30,
    backgroundColor: "#FE9F59",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    borderRadius: 20,
  },
  signUpForm: {
    paddingTop: 10,
  },
  signUp: {
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
  },
  signUpBtn: {},
  forgetPassBtn: {},
  separator: {
    paddingHorizontal: 20,
  },
  singUpSNS: {
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  tinyImg: {
    width: 40,
    height: 40,
  },
  iconSNS: {
    paddingHorizontal: 15,
  },
});
