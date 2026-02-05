import { View, Text, StyleSheet, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { SafeAreaView } from "react-native-safe-area-context";
// import { IconSymbol } from "@/components/IconSymbol";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>SmartAttend</Text>
        </View>

        {/* Content */}
        <View style={styles.modal}>
          <View style={styles.modalWrapper}>
            <View style={styles.modalWrapperView}>
              <Text style={styles.modalWrapperText}>Mark Attendance For Advance Python</Text>
            </View>
            <View style={styles.pressableWrapper}>
              <Pressable style={styles.presentPressable}>Present</Pressable>
            </View>
          </View>
        </View>
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    display: "flex",
  },
  header: {
    height: 56,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#e5e7eb",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
  },
  content: {
    flex: 1,
    height: "100%",

    padding: 16,
    backgroundColor: "black",
  },
  text: {
    fontSize: 16,
    color: "white",
  },
  modal: {
    padding: 20,
    backgroundColor: "#fff",
    height: 150,
  },
  modalWrapper: {
    height: 100,
    backgroundColor: "black",
    borderRadius: 10,
  },
  modalWrapperView: {
    padding: 10
  },
  modalWrapperText: {
    color: "white"
  },
  pressableWrapper : {
    display : "flex",
    flex : 1,
    justifyContent : "center",
    alignItems : "center"
  },
  presentPressable : {
    width :80,
    color : "white",
    padding : 5,
    borderColor: "white",
    borderWidth : 1,
    borderRadius: 10,
    textAlign : "center"
  }
});
