import React from "react";
import { View, Text, SafeAreaView, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import FaceScanImage from "../../components/FaceScanImage";
import PrimaryButton from "../../components/PrimaryButton";
import { colors } from "../../theme/tokens";

// TAB 2: Extras - same visual pattern as Scan (idle state), different copy.
// e.g. color analysis, style recs, etc.
export default function ExtrasScreen({ navigation }) {
  return (
    <SafeAreaView className="flex-1 bg-bg px-5 pt-2">
      <View className="flex-row justify-end mb-2">
        <Pressable onPress={() => navigation.navigate("Settings")}>
          <Ionicons name="settings-outline" size={24} color={colors.textSecondary} />
        </Pressable>
      </View>

      <View className="flex-1 justify-center">
        <View style={{ minHeight: "45%" }}>
          <FaceScanImage variant="hero" />
        </View>

        <View className="mt-6">
          <Text className="text-white text-2xl font-bold text-center mb-6">
            Color analysis and more!
          </Text>
          <PrimaryButton label="Begin scan" onPress={() => {}} />
        </View>
      </View>
    </SafeAreaView>
  );
}
