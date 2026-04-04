import { Card } from "@/components/Card";
import { RootView } from "@/components/RootView";
import { Row } from "@/components/Row";
import { ThemedText } from "@/components/ThemedText";
import * as Device from "expo-device";
import { Image, Linking, Platform, StyleSheet, TouchableOpacity, View } from "react-native";

const DEVICE_INFO = [
  { label: "Brand", value: Device.brand ?? "—" },
  { label: "Model", value: Device.modelName ?? "—" },
  { label: "OS", value: `${Platform.OS} ${Platform.Version}` },
  { label: "Device type", value: Device.DeviceType[Device.deviceType ?? 0] ?? "—" },
  { label: "Total memory", value: Device.totalMemory ? `${Math.round(Device.totalMemory / 1024 / 1024 / 1024)} GB` : "—" },
];


export default function About() {
  return (
    <RootView edges={["top"]}>
      <Row style={styles.header}>
        <Image width={24} height={24} source={require("@/assets/images/pokeball.png")} />
        <ThemedText variant="headline" color="grayLight">About</ThemedText>
      </Row>

      <View style={styles.center}>
      <Card style={styles.card}>
        <View style={styles.logoRow}>
          <Image
            source={require("@/assets/images/pokeball.png")}
            style={styles.logo}
            resizeMode="contain"
          />
          <View style={styles.logoText}>
            <ThemedText variant="headline" color="grayDark">Pokédex</ThemedText>
            <ThemedText variant="subtitle2" color="grayMedium">A React Native app</ThemedText>
          </View>
        </View>

        <ThemedText variant="subtitle1" color="grayDark" style={styles.sectionTitle}>
          Description
        </ThemedText>
        <ThemedText variant="body3" color="grayMedium" style={styles.description}>
          Browse and search all Pokémon using data from the open PokéAPI.
          Includes infinite scroll, filtering by name or ID, and a detail view
          for each Pokémon.
        </ThemedText>

        <ThemedText variant="subtitle1" color="grayDark" style={styles.sectionTitle}>
          Device
        </ThemedText>
        {DEVICE_INFO.map(({ label, value }) => (
          <Row key={label} style={styles.stackRow}>
            <ThemedText variant="subtitle2" color="grayDark" style={styles.stackLabel}>
              {label}
            </ThemedText>
            <ThemedText variant="body3" color="grayMedium">{value}</ThemedText>
          </Row>
        ))}


        <TouchableOpacity
          style={styles.apiButton}
          onPress={() => Linking.openURL("https://pokeapi.co")}
          activeOpacity={0.7}
        >
          <ThemedText variant="subtitle2" color="grayWhite">
            Open PokéAPI
          </ThemedText>
        </TouchableOpacity>
      </Card>
      </View>
    </RootView>
  );
}

const styles = StyleSheet.create({
  header: {
    gap: 16,
    paddingHorizontal: 12,
    paddingBottom: 12,
  },
  center: {
    flex: 1,
    justifyContent: "center",
  },
  card: {
    alignSelf: 'center',
    margin: 12,
    padding: 20,
    width: "90%",
  },
  logoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    marginBottom: 24,
  },
  logo: {
    width: 64,
    height: 64,
  },
  logoText: {
    gap: 4,
  },
  sectionTitle: {
    marginBottom: 8,
  },
  description: {
    lineHeight: 20,
    marginBottom: 20,
  },
  stackRow: {
    justifyContent: "space-between",
    paddingVertical: 8,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#E0E0E0",
  },
  stackLabel: {
    flex: 1,
  },
  apiButton: {
    marginTop: 24,
    backgroundColor: "#DC0A2D",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
  },
});
