import React from "react";
import { View, Text, ScrollView, SafeAreaView, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { colors, gradients } from "../../theme/tokens";

// TAB 4: Coach (AI chat coach).
// IMPORTANT: tapping "Ask me anything" opens the LevelUp paywall modal
// instead of navigating to an actual chat screen. Wired via navigation.navigate('LevelUpPaywall').
export default function CoachScreen({ navigation }) {
  const learnItems = [
    { label: "Improve your overall", emoji: "🔥", bg: "#3D1730" },
    { label: "Gain more muscle", emoji: "💪", bg: "#173D22" },
    { label: "Lose body fat", emoji: "🧘", bg: "#3D2A17" },
    { label: "Get clear skin", emoji: "🧴", bg: "#3D3817" },
    { label: "Sharpen your jawline", emoji: "🗿", bg: "#17263D" },
  ];

  const openPaywall = () => navigation.navigate("LevelUpPaywall");

  return (
    <SafeAreaView className="flex-1 bg-bg">
      <ScrollView className="px-5" contentContainerStyle={{ paddingBottom: 40 }}>
        <View className="flex-row justify-between items-center pt-2 mb-5">
          <Text className="text-white text-xl font-bold">Your coach</Text>
          <Pressable onPress={() => navigation.navigate("Settings")}>
            <Ionicons name="settings-outline" size={24} color={colors.textSecondary} />
          </Pressable>
        </View>

        {/* Ask me anything -> opens LEVEL UP paywall modal, not a real chat */}
        <Pressable onPress={openPaywall} className="mb-6 rounded-3xl overflow-hidden active:opacity-85">
          <LinearGradient
            colors={gradients.purple}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            className="p-5 flex-row items-center justify-between"
          >
            <View className="flex-row items-center">
              <Ionicons name="chatbubble-ellipses" size={22} color="#fff" style={{ marginRight: 10 }} />
              <Text className="text-white text-base font-bold">Ask me anything</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#fff" />
          </LinearGradient>
        </Pressable>

        <Text className="text-white text-lg font-bold mb-3">Learn how to...</Text>
        <View className="gap-3">
          {learnItems.map((item) => (
            <Pressable
              key={item.label}
              onPress={openPaywall}
              className="flex-row items-center justify-between bg-card border border-border rounded-2xl p-4 active:opacity-80"
            >
              <View className="flex-row items-center">
                <View
                  className="w-10 h-10 rounded-full items-center justify-center mr-3"
                  style={{ backgroundColor: item.bg }}
                >
                  <Text className="text-lg">{item.emoji}</Text>
                </View>
                <Text className="text-textPrimary text-sm font-medium">{item.label}</Text>
              </View>
              <Ionicons name="chevron-forward" size={18} color={colors.textSecondary} />
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
