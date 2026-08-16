import React from "react";
import { Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { gradients } from "../theme/tokens";

// Big neon-purple gradient CTA button used across onboarding + tabs.
export default function PrimaryButton({ label, onPress, colorsOverride, textClassName = "" }) {
  return (
    <Pressable onPress={onPress} className="w-full rounded-2xl overflow-hidden active:opacity-80">
      <LinearGradient
        colors={colorsOverride || gradients.purple}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="w-full py-4 items-center justify-center rounded-2xl"
      >
        <Text className={`text-white text-base font-bold ${textClassName}`}>{label}</Text>
      </LinearGradient>
    </Pressable>
  );
}
