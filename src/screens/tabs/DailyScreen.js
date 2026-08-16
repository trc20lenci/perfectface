import React, { useState } from "react";
import { View, Text, ScrollView, SafeAreaView, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../theme/tokens";

// TAB 3: Daily (Glow Up Routine)
// Two states: no routine yet (prompt to scan) vs generated routine.
export default function DailyScreen({ navigation }) {
  const [hasRoutine, setHasRoutine] = useState(true);

  const days = [1, 2, 3, 4, 5, 6, 7];
  const completedDays = [1]; // Day 1 done

  const tasks = [
    { id: "1", label: "Apply cleanser & toner", icon: "water-outline", done: false },
    { id: "2", label: "Maintain eye contact", icon: "eye-outline", done: false },
    { id: "3", label: "Mewing & jawline workout", icon: "body-outline", done: false },
    { id: "4", label: "Apply SPF before going out", icon: "sunny-outline", done: false },
  ];
  const [taskState, setTaskState] = useState(tasks);

  const toggleTask = (id) =>
    setTaskState((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));

  return (
    <SafeAreaView className="flex-1 bg-bg">
      <ScrollView className="px-5" contentContainerStyle={{ paddingBottom: 40 }}>
        <View className="flex-row justify-between items-center pt-2 mb-5">
          <Text className="text-white text-xl font-bold">1 🔥 day streak</Text>
          <Pressable onPress={() => navigation.navigate("Settings")}>
            <Ionicons name="settings-outline" size={24} color={colors.textSecondary} />
          </Pressable>
        </View>

        {/* Progress banner */}
        <View className="bg-neonPurple rounded-3xl p-5 flex-row items-center justify-between mb-6">
          <View className="flex-row items-center">
            <Text className="text-3xl mr-3">😎</Text>
            <View>
              <Text className="text-white font-bold text-base">Your progress</Text>
              <Text className="text-white/80 text-xs mt-0.5">Keep the streak going</Text>
            </View>
          </View>
          <Pressable className="bg-white/20 px-4 py-2 rounded-xl">
            <Text className="text-white font-semibold text-sm">View</Text>
          </Pressable>
        </View>

        <Text className="text-white text-lg font-bold mb-3">Your routine</Text>

        {!hasRoutine ? (
          <Pressable
            onPress={() => setHasRoutine(true)}
            className="bg-card border border-border rounded-3xl p-6 items-center"
          >
            <Text className="text-textSecondary text-center">
              Scan to get your daily glow up routine
            </Text>
          </Pressable>
        ) : (
          <View>
            <Text className="text-white text-xl font-bold mb-4">Your Glow Up Routine</Text>

            {/* Day tracker */}
            <View className="flex-row justify-between mb-6">
              {days.map((d) => {
                const done = completedDays.includes(d);
                return (
                  <View key={d} className="items-center">
                    <View
                      className="w-9 h-9 rounded-full items-center justify-center border"
                      style={{
                        backgroundColor: done ? colors.acidGreen : colors.card,
                        borderColor: done ? colors.acidGreen : colors.border,
                      }}
                    >
                      {done ? (
                        <Ionicons name="checkmark" size={18} color={colors.bg} />
                      ) : (
                        <Text className="text-textSecondary text-xs">{d}</Text>
                      )}
                    </View>
                    <Text className="text-textSecondary text-[10px] mt-1">Day {d}</Text>
                  </View>
                );
              })}
            </View>

            <Text className="text-white text-lg font-bold mb-3">Today's plan</Text>
            <View className="bg-card border border-border rounded-3xl p-2 mb-6">
              {taskState.map((t) => (
                <Pressable
                  key={t.id}
                  onPress={() => toggleTask(t.id)}
                  className="flex-row items-center justify-between px-3 py-3.5 border-b border-border/50 last:border-b-0"
                >
                  <View className="flex-row items-center flex-1">
                    <View className="w-9 h-9 rounded-full bg-cardAlt items-center justify-center mr-3">
                      <Ionicons name={t.icon} size={18} color={colors.neonPurple} />
                    </View>
                    <Text
                      className="text-textPrimary text-sm flex-1"
                      style={{ textDecorationLine: t.done ? "line-through" : "none", opacity: t.done ? 0.5 : 1 }}
                    >
                      {t.label}
                    </Text>
                  </View>
                  <Ionicons
                    name={t.done ? "checkbox" : "square-outline"}
                    size={22}
                    color={t.done ? colors.acidGreen : colors.textSecondary}
                  />
                </Pressable>
              ))}
            </View>

            {/* Chat prompt banner */}
            <View className="bg-infoBlue rounded-2xl p-4">
              <Text className="text-white font-semibold text-sm">
                A daily plan built for YOU! ⭐⭐⭐⭐⭐
              </Text>
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
