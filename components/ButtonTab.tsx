import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const BUTTONS = ["kg", "lb"];

export default function ButtonTab() {
  const [selectedWeight, setSelectedWeight] = useState(0);

  return (
    <View style={styles.wrapButtons}>
      {BUTTONS.map((item, index) => (
        <TouchableOpacity
          activeOpacity={1}
          key={index}
          style={[
            styles.button,
            {
              backgroundColor: selectedWeight === index ? "#43474d" : "#2A3240",
              borderColor: selectedWeight === index ? "#1B85F3" : "#606873",
            },
          ]}
          onPress={() => setSelectedWeight(index)}
        >
          <View
            style={[
              styles.contentCircleButton,
              {
                backgroundColor: selectedWeight === index ? "#fff" : "#2A3240",
              },
            ]}
          >
            <View
              style={[
                styles.circle,
                {
                  borderColor: selectedWeight === index ? "#1B85F3" : "#606873",
                  width: selectedWeight === index ? 12 : 14,
                  height: selectedWeight === index ? 12 : 14,
                  borderRadius: selectedWeight === index ? 6 : 7,
                },
              ]}
            />
          </View>
          <Text style={styles.titleButton}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapButtons: {
    flexDirection: "row",
    gap: 10,
    marginTop: 28,
  },
  button: {
    padding: 15,
    borderRadius: 14,
    borderWidth: 1,
    width: 150,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  contentCircleButton: {
    width: 14,
    height: 14,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
  },
  circle: {
    borderWidth: 2,
  },
  titleButton: {
    fontSize: 14,
    color: "#ffffff",
    fontWeight: "600",
  },
});
