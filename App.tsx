import React from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Pressable,
  Alert,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputWrap}>
        <TextInput
          style={styles.input}
          // onChangeText={onChangeNumber}
          // value={number}
          placeholder="メッセージを入力してください"
          keyboardType="numeric"
        />
        <Pressable
          style={styles.sendButton}
          onPress={() => Alert.alert("Simple Button pressed")}
        >
          <Text>送信</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputWrap: {
    flexDirection: "row",
    // alignItems: "center",
  },
  input: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 4,
    borderColor: "#ccc",
    borderWidth: 1,
  },
  sendButton: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 4,
    borderColor: "#ccc",
    borderWidth: 1,
  },
});
