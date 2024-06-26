import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";

import Login from "./screens/Login";
import Loading from "./screens/Loading";
import User from "./screens/User";

import "expo-router/entry";
import { Redirect } from "expo-router";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [ready, setReady] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setReady(false);
    }, 2000);
  }, []);

  // 로그인이 성공적으로 이루어졌을 때 처리하는 함수
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // 로그아웃 처리하는 함수
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  if (ready) {
    return <Loading />; // 처음 화면
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      {isLoggedIn ? (
        // 사용자가 로그인한 경우 메인 화면
        <View>
          <Login onLogout={handleLogout} />
          <User />
        </View>
      ) : (
        // 로그인 안 한 경우 로그인 화면 보여줌
        <Login onLogin={handleLogin} />
      )}

      {/* <Redirect href={"home"} />
      <Login /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
});
