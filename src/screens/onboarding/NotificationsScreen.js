import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import PrimaryButton from "../../components/PrimaryButton";
import SecondaryButton from "../../components/SecondaryButton";
import { colors } from "../../theme/tokens";

// Onboarding Step 5/6 - Push notifications opt-in.
export default function NotificationsScreen({ navigation }) {
  const goNext = () => navigation.navigate("SignUp");

  return (
    <SafeAreaView className="flex-1 bg-bg px-6 justify-between py-10">
      <View className="items-center mt-16">
        <View className="w-24 h-24 rounded-full bg-neonPurple/15 items-center justify-center mb-8">
          <Ionicons name="notifications" size={40} color={colors.neonPurple} />
        </View>
        <Text className="text-white text-2xl font-bold text-center px-4">
          Turn on notifications so you don't miss important glow up tips
        </Text>
      </View>

      <View className="gap-3">
        <PrimaryButton label="Turn On" onPress={goNext} />
        <SecondaryButton label="Later" onPress={goNext} />
      </View>
    </SafeAreaView>
  );
}
