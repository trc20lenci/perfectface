import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/onboarding/WelcomeScreen";
import GenderScreen from "../screens/onboarding/GenderScreen";
import RateAppScreen from "../screens/onboarding/RateAppScreen";
import ReferralScreen from "../screens/onboarding/ReferralScreen";
import NotificationsScreen from "../screens/onboarding/NotificationsScreen";
import SignUpScreen from "../screens/onboarding/SignUpScreen";

const Stack = createNativeStackNavigator();

// First-run flow: Welcome -> Gender -> RateApp -> Referral -> Notifications -> SignUp
export default function OnboardingNavigator({ onAuthenticated }) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Gender" component={GenderScreen} />
      <Stack.Screen name="RateApp" component={RateAppScreen} />
      <Stack.Screen name="Referral" component={ReferralScreen} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="SignUp">
        {(props) => <SignUpScreen {...props} onAuthenticated={onAuthenticated} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
