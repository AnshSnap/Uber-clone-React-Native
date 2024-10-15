import React from "react";
import { Text, Button, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView className="flex items-center bg-black w-screen h-screen">
      <Text className="text-center text-xl text-white ">Can of worms!</Text>
      {/* <Button title="Press me" onPress={() => alert("DIEEEE")} /> */}
      <TouchableOpacity onPress={() => alert("DIEEEE")}>
        <Text className="text-center text-xl text-white">Press me</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;
