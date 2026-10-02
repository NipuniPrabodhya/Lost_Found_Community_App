import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from "react-native";

const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F7FBFA" />

      <View style={styles.content}>
        {/* Top Section */}
        <View>
          <Text style={styles.welcomeText}>Welcome to</Text>

          <View style={styles.brandContainer}>
            <View style={styles.logo}>
              <Text style={styles.logoText}>F</Text>
            </View>

            <Text style={styles.brandName}>FindIt</Text>
          </View>

          <Text style={styles.title}>
            Lost something?{"\n"}Let the community help.
          </Text>

          <Text style={styles.subtitle}>
            Report lost belongings, discover found items, and help return
            items to their owners.
          </Text>
        </View>

        {/* Illustration */}
        <View style={styles.illustrationContainer}>
          <View style={styles.circleLarge}>
            <Text style={styles.searchIcon}>⌕</Text>
          </View>

          <View style={styles.smallCardLeft}>
            <Text style={styles.cardIcon}>?</Text>
          </View>

          <View style={styles.smallCardRight}>
            <Text style={styles.cardIcon}>✓</Text>
          </View>
        </View>

        {/* Message */}
        <View>
          <Text style={styles.messageTitle}>Find it. Report it. Return it.</Text>

          <Text style={styles.messageText}>
            A simple way for communities to reconnect people with their lost
            belongings.
          </Text>
        </View>

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={styles.primaryButtonText}>Get started</Text>
            <Text style={styles.primaryArrow}>→</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.secondaryButtonText}>
              I already have an account
            </Text>

            <Text style={styles.secondaryArrow}>→</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7FBFA",
  },

  content: {
    flex: 1,
    paddingHorizontal: 28,
    paddingTop: 25,
    paddingBottom: 28,
    justifyContent: "space-between",
  },

  welcomeText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#73817F",
    marginBottom: 12,
  },

  brandContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },

  logo: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: "#008C83",
    justifyContent: "center",
    alignItems: "center",
  },

  logoText: {
    color: "#FFFFFF",
    fontSize: 19,
    fontWeight: "700",
  },

  brandName: {
    marginLeft: 10,
    fontSize: 19,
    fontWeight: "700",
    color: "#172B2A",
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    lineHeight: 38,
    color: "#172B2A",
    marginBottom: 14,
  },

  subtitle: {
    fontSize: 14,
    lineHeight: 22,
    color: "#73817F",
  },

  illustrationContainer: {
    height: 210,
    backgroundColor: "#E0F3F0",
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginVertical: 20,
  },

  circleLarge: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: "#008C83",
    justifyContent: "center",
    alignItems: "center",
  },

  searchIcon: {
    color: "#FFFFFF",
    fontSize: 52,
    fontWeight: "300",
  },

  smallCardLeft: {
    position: "absolute",
    left: 35,
    bottom: 35,
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },

  smallCardRight: {
    position: "absolute",
    right: 35,
    top: 30,
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },

  cardIcon: {
    color: "#008C83",
    fontSize: 20,
    fontWeight: "700",
  },

  messageTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#172B2A",
    marginBottom: 7,
  },

  messageText: {
    color: "#73817F",
    fontSize: 12,
    lineHeight: 19,
  },

  buttonContainer: {
    marginTop: 20,
  },

  primaryButton: {
    height: 54,
    borderRadius: 12,
    backgroundColor: "#008C83",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 12,
  },

  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },

  primaryArrow: {
    color: "#FFFFFF",
    fontSize: 20,
  },

  secondaryButton: {
    height: 54,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#DDE7E5",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  secondaryButtonText: {
    color: "#172B2A",
    fontSize: 14,
    fontWeight: "600",
  },

  secondaryArrow: {
    color: "#008C83",
    fontSize: 20,
  },
});