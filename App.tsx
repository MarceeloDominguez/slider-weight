import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import Slider from "@react-native-community/slider";

const { width } = Dimensions.get("window");

const WIDTH_SCREEN = width;

export default function App() {
  const [kilograms, setKilograms] = useState(10);

  const onValueChange = (value: number) => {
    setKilograms(Number(value.toFixed(1)));
  };

  const renderBalanceLines = () => {
    const lineCount = 10; // Cantidad de líneas en la balanza
    const margin = 15; // Margen en los extremos

    return [...Array(lineCount + 1)].map((_, i) => {
      const marginLeft = (i / lineCount) * (WIDTH_SCREEN - 2 * margin) + margin; // Calcular la posición con margen

      return <View key={i} style={[styles.balanceLine, { marginLeft }]} />;
    });
  };

  const renderBalanceMiddleLines = () => {
    const lineCount = 40; // Cantidad de líneas en la balanza
    const margin = 15; // Margen en los extremos

    return [...Array(lineCount + 1)].map((_, i) => {
      const marginLeft = (i / lineCount) * (WIDTH_SCREEN - 2 * margin) + margin; // Calcular la posición con margen

      return (
        <View key={i} style={[styles.balanceMiddleLine, { marginLeft }]} />
      );
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.kilograms}>{kilograms.toFixed(1)}</Text>
      <View style={styles.balance}>
        {renderBalanceLines()}
        {renderBalanceMiddleLines()}
        <Slider
          style={[styles.containerSlider, { left: kilograms >= 55 ? 1.5 : 0 }]}
          minimumValue={0}
          maximumValue={100}
          minimumTrackTintColor="transparent"
          maximumTrackTintColor="transparent"
          step={0.1}
          value={kilograms}
          onValueChange={onValueChange}
          thumbImage={require("./assets/indicador.png")}
          lowerLimit={0.3}
          upperLimit={100}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2A3240",
    alignItems: "center",
    justifyContent: "center",
  },
  containerSlider: {
    width: WIDTH_SCREEN,
    height: 40,
    zIndex: 3,
  },
  balance: {
    position: "relative",
  },
  balanceLine: {
    position: "absolute",
    width: 2,
    height: 40, // Altura de las líneas de la balanza
    backgroundColor: "#A0AEC0", // Color de las líneas de la balanza
    zIndex: 2,
  },
  balanceMiddleLine: {
    position: "absolute",
    width: 2,
    height: 20, // Altura de las líneas de la balanza
    backgroundColor: "#606873", // Color de las líneas de la balanza
    top: 10,
  },
  kilograms: {
    color: "#74B4FF",
    marginBottom: 40,
    fontSize: 80,
    fontWeight: "bold",
  },
});
