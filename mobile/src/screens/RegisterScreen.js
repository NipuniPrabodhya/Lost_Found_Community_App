import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from "react-native";

const RegisterScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    // Validation and MongoDB registration will be added later.
    console.log({
      fullName,
      email,
      password,
      confirmPassword,
    });

    navigation.navigate("Home");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F7FBFA" />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* Back */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backText}>‹</Text>
          <Text style={styles.backLabel}>Create account</Text>
        </TouchableOpacity>

        {/* Brand */}
        <View style={styles.brandContainer}>
          <View style={styles.logo}>
            <Text style={styles.logoText}>F</Text>
          </View>

          <Text style={styles.brandName}>FindIt</Text>
        </View>

        {/* Heading */}
        <Text style={styles.title}>Start your journey</Text>

        <Text style={styles.subtitle}>
          Join the community and help lost items find their way home.
        </Text>

        {/* Full name */}
        <Text style={styles.label}>Full name</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your full name"
          placeholderTextColor="#9CA3AF"
          value={fullName}
          onChangeText={setFullName}
          autoCapitalize="words"
        />

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
          placeholder="Create a secure password"
          placeholderTextColor="#9CA3AF"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        {/* Confirm password */}
        <Text style={styles.label}>Confirm password</Text>

        <TextInput
          style={styles.input}
          placeholder="Repeat your password"
          placeholderTextColor="#9CA3AF"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />

        {/* Terms */}
        <Text style={styles.terms}>
          By creating an account, you agree to our Terms of Service and Privacy
          Policy.
        </Text>

        {/* Create account */}
        <TouchableOpacity
          style={styles.createButton}
          onPress={handleRegister}
        >
          <Text style={styles.createButtonText}>Create account</Text>
          <Text style={styles.arrow}>→</Text>
        </TouchableOpacity>

        {/* Login */}
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Already have an account? </Text>

          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.loginLink}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7FBFA",
  },

  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 28,
    paddingTop: 20,
    paddingBottom: 30,
  },

  backButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
  },

  backText: {
    fontSize: 30,
    color: "#172B2A",
    marginRight: 8,
  },

  backLabel: {
    fontSize: 13,
    fontWeight: "600",
    color: "#172B2A",
  },

  brandContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 28,
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
    fontSize: 18,
    fontWeight: "bold",
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
    marginBottom: 28,
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
    marginBottom: 18,
  },

  terms: {
    fontSize: 12,
    color: "#879391",
    lineHeight: 18,
    marginBottom: 22,
  },

  createButton: {
    height: 54,
    backgroundColor: "#008C83",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },

  createButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },

  arrow: {
    color: "#FFFFFF",
    fontSize: 20,
  },

  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 24,
  },

  loginText: {
    color: "#73817F",
    fontSize: 14,
  },

  loginLink: {
    color: "#008C83",
    fontSize: 14,
    fontWeight: "700",
  },
});