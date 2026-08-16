import React, { useState } from "react";
import { View, Text, Pressable, SafeAreaView } from "react-native";
import PrimaryButton from "../../components/PrimaryButton";
import { colors } from "../../theme/tokens";

// Onboarding Step 2/6 - Choose your gender.
export default function GenderScreen({ navigation }) {
  const [selected, setSelected] = useState(null); // 'male' | 'female'

  const Card = ({ id, label, emoji }) => {
    const active = selected === id;
    return (
      <Pressable
        onPress={() => setSelected(id)}
        className="flex-1 rounded-3xl p-6 items-center justify-center border"
        style={{
          backgroundColor: active ? "rgba(139,92,246,0.15)" : colors.card,
          borderColor: active ? colors.neonPurple : colors.border,
          borderWidth: active ? 2 : 1,
          minHeight: 180,
        }}
      >
        <Text className="text-5xl mb-4">{emoji}</Text>
        <Text className="text-white text-lg font-bold">{label}</Text>
      </Pressable>
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-bg px-6 justify-between py-10">
      <View className="mt-10">
        <Text className="text-white text-2xl font-bold text-center mb-8">Choose your gender</Text>
        <View className="flex-row gap-4">
          <Card id="male" label="Male" emoji="\ud83d\udc68" />
          <Card id="female" label="Female" emoji="\ud83d\udc69" />
        </View>
      </View>

      <PrimaryButton
        label="Next"
        onPress={() => selected && navigation.navigate("RateApp")}
      />
    </SafeAreaView>
  );
}
