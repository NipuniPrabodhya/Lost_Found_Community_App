import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from "react-native";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Backend authentication will be added later
    console.log("Email:", email);
    console.log("Password:", password);

    navigation.navigate("Home");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F7FBFA" />

      <View style={styles.content}>
        {/* Back button */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backText}>‹</Text>
        </TouchableOpacity>

        {/* Logo */}
        <View style={styles.brandContainer}>
          <View style={styles.logo}>
            <Text style={styles.logoText}>F</Text>
          </View>

          <Text style={styles.brandName}>FindIt</Text>
        </View>

        {/* Heading */}
        <Text style={styles.title}>Good to see you again.</Text>

        <Text style={styles.subtitle}>
          Sign in to continue finding and returning lost items.
        </Text>

        {/* Email */}
        <Text style={styles.label}>Email address</Text>

        <TextInput
          style={styles.input}
          placeholder="name@example.com"
          placeholderTextColor="#9CA3AF"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        {/* Password */}
        <Text style={styles.label}>Password</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor="#9CA3AF"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        {/* Forgot password */}
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot password?</Text>
        </TouchableOpacity>

        {/* Sign In */}
        <TouchableOpacity style={styles.signInButton} onPress={handleLogin}>
          <Text style={styles.signInText}>Sign in</Text>
          <Text style={styles.arrow}>→</Text>
        </TouchableOpacity>

        {/* Register */}
        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>New to FindIt? </Text>

          <TouchableOpacity
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={styles.registerLink}>Create an account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7FBFA",
  },

  content: {
    flex: 1,
    paddingHorizontal: 28,
    paddingTop: 20,
  },

  backButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    marginBottom: 25,
  },

  backText: {
    fontSize: 32,
    color: "#172B2A",
  },

  brandContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 32,
  },

  logo: {
    width: 34,
    height: 34,
    borderRadius: 10,
    backgroundColor: "#008C83",
    justifyContent: "center",
    alignItems: "center",
  },

  logoText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 18,
  },

  brandName: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "700",
    color: "#172B2A",
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#172B2A",
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 14,
    color: "#73817F",
    lineHeight: 21,
    marginBottom: 32,
  },

  label: {
    fontSize: 13,
    fontWeight: "600",
    color: "#52615F",
    marginBottom: 8,
  },

  input: {
    height: 52,
    borderWidth: 1,
    borderColor: "#DDE7E5",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 15,
    color: "#172B2A",
    marginBottom: 20,
  },

  forgotPassword: {
    alignSelf: "flex-end",
    color: "#008C83",
    fontSize: 13,
    fontWeight: "600",
    marginTop: -8,
    marginBottom: 28,
  },

  signInButton: {
    height: 54,
    backgroundColor: "#008C83",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },

  signInText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },

  arrow: {
    color: "#FFFFFF",
    fontSize: 20,
  },

  registerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 28,
  },

  registerText: {
    color: "#73817F",
    fontSize: 14,
  },

  registerLink: {
    color: "#008C83",
    fontSize: 14,
    fontWeight: "700",
  },
});