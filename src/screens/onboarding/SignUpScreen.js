import React from "react";
import { View, Text, Pressable, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// Onboarding Step 6/6 - Create account (Google sign-in).
// On success this should set an isAuthenticated flag and the root
// navigator (RootNavigator.js) will switch to the MainTabs stack.
export default function SignUpScreen({ navigation, onAuthenticated }) {
  const handleGoogleSignIn = () => {
    // TODO: wire up real Google OAuth (expo-auth-session / firebase, etc)
    onAuthenticated && onAuthenticated();
  };

  return (
    <SafeAreaView className="flex-1 bg-bg px-6 justify-between py-10">
      <View className="mt-20">
        <Text className="text-white text-2xl font-bold text-center mb-10">
          Create your account
        </Text>

        <Pressable
          onPress={handleGoogleSignIn}
          className="w-full bg-white rounded-2xl py-4 flex-row items-center justify-center active:opacity-80"
        >
          <Ionicons name="logo-google" size={20} color="#0F0F0F" style={{ marginRight: 10 }} />
          <Text className="text-bg text-base font-bold">Sign in with Google</Text>
        </Pressable>
      </View>

      <Pressable onPress={handleGoogleSignIn} className="items-center pb-4">
        <Text className="text-textSecondary text-sm">
          Already have an account? <Text className="text-neonPurple font-semibold">Sign in</Text>
        </Text>
      </Pressable>
    </SafeAreaView>
  );
}
