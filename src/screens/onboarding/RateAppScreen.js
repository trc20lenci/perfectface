import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import PrimaryButton from "../../components/PrimaryButton";
import { colors } from "../../theme/tokens";

// Onboarding Step 3/6 - Ask for a 5-star rating (stars pre-filled).
export default function RateAppScreen({ navigation }) {
  return (
    <SafeAreaView className="flex-1 bg-bg px-6 justify-between py-10">
      <View className="items-center mt-16">
        <View className="w-24 h-24 rounded-full bg-neonPurple/15 items-center justify-center mb-8">
          <Ionicons name="sparkles" size={40} color={colors.neonPurple} />
        </View>
        <Text className="text-white text-2xl font-bold text-center">Rate our app</Text>
        <View className="flex-row mt-6 gap-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <Ionicons key={i} name="star" size={34} color={colors.warnYellow} />
          ))}
        </View>
        <Text className="text-textSecondary text-sm text-center mt-6 px-6">
          Leave us 5 stars to help improve the AI
        </Text>
      </View>

      <PrimaryButton label="Next" onPress={() => navigation.navigate("Referral")} />
    </SafeAreaView>
  );
}
