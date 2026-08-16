import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingNavigator from "./OnboardingNavigator";
import MainTabNavigator from "./MainTabNavigator";
import LevelUpPaywallScreen from "../screens/LevelUpPaywallScreen";
import SettingsSheetScreen from "../screens/SettingsSheetScreen";

const RootStack = createNativeStackNavigator();

// Top-level navigator.
// - Not authenticated -> OnboardingNavigator (Welcome...SignUp flow)
// - Authenticated -> MainTabs, with LevelUpPaywall and Settings
//   presented as modals on top of any tab.
export default function RootNavigator() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        {!isAuthenticated ? (
          <RootStack.Screen name="Onboarding">
            {() => <OnboardingNavigator onAuthenticated={() => setIsAuthenticated(true)} />}
          </RootStack.Screen>
        ) : (
          <>
            <RootStack.Screen name="MainTabs" component={MainTabNavigator} />
            <RootStack.Group screenOptions={{ presentation: "fullScreenModal" }}>
              <RootStack.Screen name="LevelUpPaywall" component={LevelUpPaywallScreen} />
            </RootStack.Group>
            <RootStack.Group screenOptions={{ presentation: "transparentModal", animation: "slide_from_bottom" }}>
              <RootStack.Screen name="Settings" component={SettingsSheetScreen} />
            </RootStack.Group>
          </>
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
