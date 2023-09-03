import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Header() {
  return (
    <View style={styles.wrapHeader}>
      <View style={styles.contentTopHeader}>
        <Ionicons name="ios-arrow-back" size={24} color="#fff" />
        <View style={{ alignItems: "center" }}>
          <Text style={styles.titleHeader}>Add Pet Profile</Text>
          <Text style={styles.subtitleHeader}>Weight</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.step}>Step</Text>
          <Text style={styles.step}>2/4</Text>
        </View>
      </View>
      <View style={styles.mainBar}>
        <View style={styles.secondaryBar} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapHeader: {
    backgroundColor: "#2A3240",
    padding: 20,
  },
  titleHeader: {
    fontSize: 16,
    color: "#ffffff",
    fontWeight: "600",
    lineHeight: 22,
    letterSpacing: 0.3,
  },
  subtitleHeader: {
    fontSize: 14,
    fontWeight: "400",
    color: "#ffffff",
    lineHeight: 20,
    letterSpacing: 0.3,
  },
  mainBar: {
    width: "100%",
    height: 4,
    backgroundColor: "#606873",
    borderRadius: 2,
    justifyContent: "center",
    marginTop: 20,
  },
  secondaryBar: {
    width: "50%",
    height: 6,
    backgroundColor: "#FFC542",
    borderRadius: 3,
  },
  step: {
    fontSize: 12,
    fontWeight: "400",
    color: "#fff",
    lineHeight: 18,
    letterSpacing: 0.3,
  },
  contentTopHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
