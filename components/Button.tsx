import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Button() {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.contentButtonContinue}>
      <Text style={styles.textButtonContinue}>Continue</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  contentButtonContinue: {
    backgroundColor: "#1B85F3",
    marginVertical: 50,
    padding: 17,
    width: "90%",
    borderRadius: 14,
    alignItems: "center",
  },
  textButtonContinue: {
    color: "#ffffff",
    fontWeight: "500",
    letterSpacing: 0.3,
    fontSize: 14,
  },
});
