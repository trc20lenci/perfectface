import React from "react";
import { View, Text, Pressable, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { gradients } from "../theme/tokens";

// Full-screen paywall modal ("LEVEL UP").
// Opened from CoachScreen's "Ask me anything" button and from locked
// Extras/Learn items. Presented as a modal route (see RootNavigator.js).
export default function LevelUpPaywallScreen({ navigation }) {
  const handleUnlock = () => {
    // TODO: wire up real IAP purchase flow (RevenueCat / expo-in-app-purchases)
    navigation.goBack();
  };

  return (
    <LinearGradient colors={gradients.paywall} className="flex-1">
      <SafeAreaView className="flex-1 px-6 justify-between py-6">
        <Pressable onPress={() => navigation.goBack()} className="w-9 h-9 items-center justify-center">
          <Ionicons name="close" size={26} color="#fff" />
        </Pressable>

        <View className="items-center -mt-10">
          <Text
            style={{ fontStyle: "italic" }}
            className="text-white text-5xl font-black tracking-tight"
          >
            LEVEL UP
          </Text>
          <Text className="text-white/70 text-base text-center mt-3">
            Proven to help you max your looks.
          </Text>

          {/* Feature preview card with mocked ratings */}
          <View className="w-full bg-white/5 border border-white/10 rounded-3xl p-6 mt-8">
            <Text className="text-white/80 text-sm mb-4 text-center">Get your ratings</Text>
            <View className="flex-row justify-around">
              <View className="items-center">
                <Text className="text-textSecondary text-xs mb-1">Overall</Text>
                <Text className="text-white text-2xl font-bold">68</Text>
              </View>
              <View className="items-center">
                <Text className="text-textSecondary text-xs mb-1">Potential</Text>
                <Text className="text-acidGreen text-2xl font-bold">91</Text>
              </View>
            </View>
          </View>

          <Text className="text-white/40 text-xs text-center mt-6">
            1,000,000 scans completed
          </Text>
        </View>

        <View>
          <Pressable
            onPress={handleUnlock}
            className="w-full bg-infoBlue rounded-2xl py-4 items-center justify-center active:opacity-85"
          >
            <Text className="text-white text-base font-bold">Unlock now 🙌</Text>
          </Pressable>
          <Text className="text-white/50 text-xs text-center mt-3">4,99 $ per week</Text>

          <View className="flex-row justify-center gap-4 mt-6">
            <Text className="text-white/40 text-xs">Terms of Use</Text>
            <Text className="text-white/40 text-xs">Restore Purchase</Text>
            <Text className="text-white/40 text-xs">Privacy Policy</Text>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
