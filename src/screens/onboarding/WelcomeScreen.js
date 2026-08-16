import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import PrimaryButton from "../../components/PrimaryButton";
import { gradients } from "../../theme/tokens";

// Onboarding Step 1/6 - Welcome / logo / slogan.
export default function WelcomeScreen({ navigation }) {
  return (
    <LinearGradient colors={gradients.onboardingHero} className="flex-1">
      <SafeAreaView className="flex-1 px-6 justify-between py-10">
        <View className="items-center mt-16">
          {/* App logo mark - swap for real logo asset */}
          <View className="w-20 h-20 rounded-2xl bg-neonPurple/20 border border-neonPurple items-center justify-center mb-6">
            <Text className="text-neonPurple text-3xl font-black">PF</Text>
          </View>
          <Text className="text-white text-4xl font-black tracking-tight text-center">
            Perfect Face
          </Text>
          <Text className="text-textSecondary text-base text-center mt-3 px-4">
            Build your ideal face.{"\n"}Unlock your genetic potential.
          </Text>
        </View>

        <PrimaryButton label="Get Started" onPress={() => navigation.navigate("Gender")} />
      </SafeAreaView>
    </LinearGradient>
  );
}
