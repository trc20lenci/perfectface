import React, { useState } from "react";
import { View, Text, ScrollView, SafeAreaView, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import FaceScanImage from "../../components/FaceScanImage";
import PrimaryButton from "../../components/PrimaryButton";
import MetricBar from "../../components/MetricBar";
import { colors } from "../../theme/tokens";

// TAB 1: Scan (Facial Analysis)
// Two states: "idle" (before scan) and "results" (detailed face rating).
export default function ScanScreen({ navigation }) {
  const [state, setState] = useState("idle"); // 'idle' | 'results'

  const metrics = [
    { label: "Overall", score: 95 },
    { label: "Potential", score: 99 },
    { label: "Masculinity", score: 91 },
    { label: "Skin Quality", score: 74 },
    { label: "Jawline", score: 98 },
    { label: "Cheekbones", score: 90 },
  ];

  if (state === "idle") {
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

          {/* Gradient caption overlay + CTA sit below the hero image */}
          <View className="mt-6">
            <Text className="text-white text-2xl font-bold text-center mb-6">
              Get your ratings and recommendations
            </Text>
            <PrimaryButton label="Begin scan" onPress={() => setState("results")} />
          </View>
        </View>
      </SafeAreaView>
    );
  }

  // ---- Results state ----
  return (
    <SafeAreaView className="flex-1 bg-bg">
      <ScrollView className="px-5" contentContainerStyle={{ paddingBottom: 40 }}>
        <View className="flex-row justify-end pt-2 mb-2">
          <Pressable onPress={() => navigation.navigate("Settings")}>
            <Ionicons name="settings-outline" size={24} color={colors.textSecondary} />
          </Pressable>
        </View>

        <Text className="text-white text-2xl font-bold text-center mb-6">
          Get Detailed Face Rating
        </Text>

        <View className="items-center mb-6">
          <FaceScanImage variant="circle" />
        </View>

        {/* Metric cards */}
        <View className="bg-card rounded-3xl p-5 mb-5 border border-border">
          {metrics.map((m) => (
            <MetricBar key={m.label} label={m.label} score={m.score} />
          ))}
        </View>

        {/* PSL Scores Maxxing block */}
        <View className="bg-card rounded-3xl p-5 mb-5 border border-border">
          <Text className="text-white text-lg font-bold mb-4">PSL Scores Maxxing</Text>
          <Row label="Face Shape" value="Angular HTN" />
          <Row label="Genetic Potential" value="High" valueColor={colors.acidGreen} />
          <Row label="Bone Structure" value="Strong" />
        </View>

        {/* Detailed analysis block */}
        <View className="bg-card rounded-3xl p-5 mb-6 border border-border">
          <Text className="text-white text-lg font-bold mb-4">Detailed Analysis</Text>
          <Row label="Canthal Tilt Analysis" value="Positive" />
          <Row label="Eye Shape" value="Almond" />
          <Row label="Eye Type" value="Hunter" />
        </View>

        <Pressable className="w-full rounded-2xl overflow-hidden active:opacity-80">
          <LinearGradient
            colors={["#FFD54A", "#FFB020"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            className="w-full py-4 items-center justify-center rounded-2xl"
          >
            <Text className="text-bg text-base font-bold">Share</Text>
          </LinearGradient>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

function Row({ label, value, valueColor }) {
  return (
    <View className="flex-row justify-between py-2 border-b border-border/50 last:border-b-0">
      <Text className="text-textSecondary text-sm">{label}</Text>
      <Text className="text-sm font-semibold" style={{ color: valueColor || colors.textPrimary }}>
        {value}
      </Text>
    </View>
  );
}
