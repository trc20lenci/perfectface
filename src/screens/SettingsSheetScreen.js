import React from "react";
import { View, Text, Pressable, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../theme/tokens";

// Settings bottom sheet - opened by tapping the gear icon on any tab.
// Presented as a modal route with a transparent background + slide-up
// card (configure presentation: 'transparentModal' in the navigator).
export default function SettingsSheetScreen({ navigation }) {
  const items = [
    { icon: "star", label: "Rate us" },
    { icon: "pricetag", label: "Copy my referral code" },
    { icon: "people", label: "Change gender" },
    { icon: "mail", label: "Contact support" },
    { icon: "document-text", label: "Learn more" },
  ];

  return (
    <View className="flex-1 justify-end bg-black/50">
      <Pressable className="flex-1" onPress={() => navigation.goBack()} />
      <SafeAreaView className="bg-card rounded-t-3xl px-5 pt-4 pb-2">
        <View className="w-10 h-1 bg-border rounded-full self-center mb-4" />

        {items.map((item) => (
          <Pressable
            key={item.label}
            className="flex-row items-center py-3.5 border-b border-border/50"
            onPress={() => navigation.goBack()}
          >
            <Ionicons name={item.icon} size={20} color={colors.neonPurple} style={{ width: 30 }} />
            <Text className="text-textPrimary text-base">{item.label}</Text>
          </Pressable>
        ))}

        <Pressable className="flex-row items-center py-3.5" onPress={() => navigation.goBack()}>
          <Ionicons name="trash" size={20} color={colors.dangerRed} style={{ width: 30 }} />
          <Text className="text-dangerRed text-base font-medium">Delete my account</Text>
        </Pressable>

        <View className="flex-row justify-center gap-4 py-4">
          <Text className="text-textSecondary text-xs">Privacy</Text>
          <Text className="text-textSecondary text-xs">Terms</Text>
        </View>
      </SafeAreaView>
    </View>
  );
}
