import React, { useState } from "react";
import { View, Text, TextInput, SafeAreaView } from "react-native";
import PrimaryButton from "../../components/PrimaryButton";
import { colors } from "../../theme/tokens";

// Onboarding Step 4/6 - Enter referral code (optional).
export default function ReferralScreen({ navigation }) {
  const [code, setCode] = useState("");

  return (
    <SafeAreaView className="flex-1 bg-bg px-6 justify-between py-10">
      <View className="mt-16">
        <Text className="text-white text-2xl font-bold text-center mb-8">
          Enter Referral Code
        </Text>
        <TextInput
          value={code}
          onChangeText={setCode}
          placeholder="Enter code to get bonuses"
          placeholderTextColor={colors.textSecondary}
          autoCapitalize="characters"
          className="w-full bg-card border border-border rounded-2xl px-5 py-4 text-white text-base"
        />
      </View>

      <PrimaryButton label="Next" onPress={() => navigation.navigate("Notifications")} />
    </SafeAreaView>
  );
}
