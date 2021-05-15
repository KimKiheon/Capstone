import { StatusBar } from "expo-status-bar";
import React, { useState, createRef } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView,
} from "react-native";

export default function SignUpScreen({ navigation }) {
  const [userName, setName] = useState("");
  const [userEmail, setEmail] = useState("");
  const [userPwd, setPwd] = useState("");
  const emailInputRef = createRef();
  const passwordInputRef = createRef();
  const nameInputRef = createRef();

  const titleChangeHandler = (text) => {
    if (text.trim().length === 0) {
      setTitleValid(false);
    } else {
      setTitleValid(true);
    }
    setText1(text);
  };

  const handleSubmitButton = () => {
    setErrortext("");

    if (!userName) {
      alert("이름을 입력해주세요");
      return;
    }
    if (!userEmail) {
      alert("이메일을 입력해주세요");
      return;
    }
    if (!userPwd) {
      alert("비밀번호를 입력해주세요");
      return;
    }

    //Show Loader
    setLoading(true);
    console.log(userName + userEmail + userPwd);

    //회원 리스트와 비교하여 있는지 여부 함수
    //회원 가입 완료 여부 함수
    //회원 가입 버튼 누를 시 홈페이지로 이동 하는 함수
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container2}>
        <View style={styles.header}>
          <Text style={styles.headertext}>Sign UP</Text>
        </View>
        <View style={styles.case2}>
          <Text style={styles.text2}>ID</Text>
          <TextInput
            style={styles.input}
            placeholder="Name(20자 이내)"
            onChangeText={(text) => setName(text)}
            returnKeyType="next"
            blurOnSubmit={false}
            maxLength={20}
            autoFocus={true}
            ref={nameInputRef}
            onSubmitEditing={() =>
              emailInputRef.current && emailInputRef.current.focus()
            }
          />
          <Text style={styles.text2}>EMAIL</Text>
          <TextInput
            style={styles.input}
            placeholder="Email(50자 이내)"
            onChangeText={(text) => setEmail(text)}
            returnKeyType="next"
            blurOnSubmit={false}
            maxLength={50}
            autoFocus={true}
            ref={emailInputRef}
            onSubmitEditing={() =>
              passwordInputRef.current && passwordInputRef.current.focus()
            }
          />
          <Text style={styles.text2}>PASSWORD</Text>
          <TextInput
            style={styles.input}
            placeholder="Password(20자 이내)"
            onChangeText={(text) => setPwd(text)}
            returnKeyType="send"
            blurOnSubmit={false}
            maxLength={20}
            secureTextEntry={true}
            ref={passwordInputRef}
          />
          <TouchableOpacity style={styles.button} onPress={handleSubmitButton}>
            <Text style={styles.join}>Sign up</Text>
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
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
    backgroundColor: "white",
  },
  header: {
    //flex:1,
    //backgroundColor: 'white',
    //justifyContent: 'flex-end'
    alignItems: "flex-start",
  },
  case2: {
    //flex:4,
    //backgroundColor: 'white',
    //justifyContent: 'center',
    alignSelf: "center",
    paddingVertical: 50,
  },
  /*case3: {
    //flex:2,
    backgroundColor: 'white'
  },*/

  headertext: {
    fontSize: 35,
    fontWeight: "600",
    paddingLeft: 15,
    color: "#292E49",
  },
  text2: {
    fontSize: 20,
  },
  input: {
    height: 40,
    width: 278,
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#FE9F59",
    width: 278,
    height: 45,
    marginTop: 20,
    borderRadius: 30,
    justifyContent: "center",
    alignSelf: "center",
  },
  join: {
    color: "white",
    fontSize: 18,
    //justifyContent: 'center',
    alignSelf: "center",
  },
});
