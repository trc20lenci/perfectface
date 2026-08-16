import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import ScanScreen from "../screens/tabs/ScanScreen";
import ExtrasScreen from "../screens/tabs/ExtrasScreen";
import DailyScreen from "../screens/tabs/DailyScreen";
import CoachScreen from "../screens/tabs/CoachScreen";
import { colors } from "../theme/tokens";

const Tab = createBottomTabNavigator();

const ICONS = {
  Scan: "scan-outline",
  Extras: "ellipsis-horizontal-circle-outline",
  Daily: "checkmark-done-outline",
  Coach: "chatbubbles-outline",
};

export default function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.neonPurple,
        tabBarInactiveTintColor: colors.textSecondary,
        tabBarStyle: {
          backgroundColor: colors.card,
          borderTopColor: colors.border,
          borderTopWidth: 1,
          height: 88,
          paddingTop: 8,
        },
        tabBarIcon: ({ color, size }) => (
          <Ionicons name={ICONS[route.name]} size={size} color={color} />
        ),
      })}
    >
      <Tab.Screen name="Scan" component={ScanScreen} />
      <Tab.Screen name="Extras" component={ExtrasScreen} />
      <Tab.Screen name="Daily" component={DailyScreen} />
      <Tab.Screen name="Coach" component={CoachScreen} />
    </Tab.Navigator>
  );
}
