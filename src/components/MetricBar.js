import React from "react";
import { View, Text } from "react-native";
import { scoreColor } from "../theme/tokens";

// Single metric row: label + numeric score + colored progress bar.
// Color goes red -> yellow -> green based on the score (see scoreColor()).
export default function MetricBar({ label, score }) {
  const color = scoreColor(score);
  return (
    <View className="mb-4">
      <View className="flex-row justify-between mb-1.5">
        <Text className="text-textPrimary text-sm font-medium">{label}</Text>
        <Text className="text-sm font-bold" style={{ color }}>
          {score}
        </Text>
      </View>
      <View className="h-2 w-full bg-cardAlt rounded-full overflow-hidden">
        <View
          className="h-full rounded-full"
          style={{ width: `${score}%`, backgroundColor: color }}
        />
      </View>
    </View>
  );
}
