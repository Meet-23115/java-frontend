import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialIcons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

// -------------------- LOGIN SCREEN --------------------
function LoginScreen({ navigation }: any) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Teacher");

  const handleLogin = () => {
    if (username === "admin" && password === "1234") {
      navigation.replace("Dashboard", { user: username, role });
    } else {
      Alert.alert("Login Failed", "Invalid Username or Password");
    }
  };

  return (
    <LinearGradient colors={["#4facfe", "#00f2fe"]} style={styles.container}>
      {/* Logo */}
      <Image
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png",
        }}
        style={styles.logo}
      />

      <Text style={styles.title}>Smart Attendance System</Text>

      <View style={styles.card}>
        <Text style={styles.heading}>Login</Text>

        {/* Username */}
        <View style={styles.inputContainer}>
          <MaterialIcons name="person" size={22} color="#666" />
          <TextInput
            placeholder="Enter Username"
            value={username}
            onChangeText={setUsername}
            style={styles.input}
          />
        </View>

        {/* Password */}
        <View style={styles.inputContainer}>
          <MaterialIcons name="lock" size={22} color="#666" />
          <TextInput
            placeholder="Enter Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.input}
          />
        </View>

        {/* Role Selection */}
        <Text style={styles.roleLabel}>Login As</Text>
        <View style={styles.roleContainer}>
          <TouchableOpacity
            style={[
              styles.roleButton,
              role === "Teacher" && styles.roleActive,
            ]}
            onPress={() => setRole("Teacher")}
          >
            <Text
              style={[
                styles.roleText,
                role === "Teacher" && styles.roleTextActive,
              ]}
            >
              Teacher
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.roleButton,
              role === "Student" && styles.roleActive,
            ]}
            onPress={() => setRole("Student")}
          >
            <Text
              style={[
                styles.roleText,
                role === "Student" && styles.roleTextActive,
              ]}
            >
              Student
            </Text>
          </TouchableOpacity>
        </View>

        {/* Login Button */}
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

// -------------------- DASHBOARD --------------------
function DashboardScreen({ route, navigation }: any) {
  const { user, role } = route.params;

  return (
    <LinearGradient colors={["#43e97b", "#38f9d7"]} style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>

      <View style={styles.card}>
        <Text style={styles.welcome}>Welcome, {user} 👋</Text>
        <Text style={styles.roleDisplay}>Role: {role}</Text>

        <View style={styles.infoBox}>
          <Text>Today’s Attendance</Text>
          <Text>Present: 45</Text>
          <Text>Absent: 5</Text>
        </View>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#e74c3c" }]}
          onPress={() => navigation.replace("Login")}
        >
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

// -------------------- APP NAVIGATION --------------------
export default function App() {
  return (
    //<NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
      </Stack.Navigator>
   // </NavigationContainer>
  );
}

// -------------------- STYLES --------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: 90,
    height: 90,
    marginBottom: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.95)",
    padding: 20,
    borderRadius: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: "#fafafa",
  },
  input: {
    flex: 1,
    padding: 12,
  },
  roleLabel: {
    fontWeight: "bold",
    marginBottom: 8,
  },
  roleContainer: {
    flexDirection: "row",
    marginBottom: 15,
  },
  roleButton: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: "#2f80ed",
    borderRadius: 10,
    marginRight: 8,
    alignItems: "center",
  },
  roleActive: {
    backgroundColor: "#2f80ed",
  },
  roleText: {
    color: "#2f80ed",
    fontWeight: "bold",
  },
  roleTextActive: {
    color: "#fff",
  },
  button: {
    backgroundColor: "#2f80ed",
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  welcome: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
  },
  roleDisplay: {
    marginBottom: 15,
    textAlign: "center",
  },
  infoBox: {
    backgroundColor: "#f1f3f6",
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
  },
});







