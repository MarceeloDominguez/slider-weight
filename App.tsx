import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
} from "react-native";
import Slider from "@react-native-community/slider";
import Header from "./components/Header";
import Button from "./components/Button";
import ButtonTab from "./components/ButtonTab";

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
    <>
      <Header />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
      >
        <StatusBar backgroundColor="#2A3240" />
        <View style={styles.containerImage}>
          <Image source={require("./assets/circle-lines.png")} />
          <Image
            source={require("./assets/image-profile.png")}
            style={{ position: "absolute" }}
          />
        </View>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>What’s your pet’s weight?</Text>
          <Text style={styles.subTitle}>
            Automatic selection based on your pets breed. Adjust according to
            reality
          </Text>
        </View>
        <Text style={styles.kilograms}>{kilograms.toFixed(1)}</Text>
        <View style={styles.balance}>
          {renderBalanceLines()}
          {renderBalanceMiddleLines()}
          <Slider
            style={[
              styles.containerSlider,
              { left: kilograms >= 55 ? 1.5 : 0 },
            ]}
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
        <ButtonTab />
        <Button />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2A3240",
  },
  contentContainerStyle: {
    alignItems: "center",
    paddingTop: 20,
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
    marginBottom: 10,
    fontSize: 80,
    fontWeight: "bold",
  },
  containerImage: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
  },
  containerTitle: {
    maxWidth: 320,
    paddingTop: 30,
    paddingBottom: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: "500",
    lineHeight: 20,
    color: "#ffffff",
    textAlign: "center",
    marginBottom: 5,
    letterSpacing: 0.3,
  },
  subTitle: {
    fontSize: 13,
    fontWeight: "400",
    lineHeight: 20,
    textAlign: "center",
    color: "#D9DFE6",
    letterSpacing: 0.3,
  },
});
