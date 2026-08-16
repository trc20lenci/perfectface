import React from "react";
import { Text, Pressable } from "react-native";

// Ghost/outline button - used for "Later", "Sign in" links etc.
export default function SecondaryButton({ label, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      className="w-full py-4 items-center justify-center rounded-2xl border border-border active:opacity-70"
    >
      <Text className="text-textPrimary text-base font-semibold">{label}</Text>
    </Pressable>
  );
}
