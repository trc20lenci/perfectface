// Central design tokens for Perfect Face.
// Keep colors here in sync with tailwind.config.js so both
// Tailwind classNames (nativewind) and raw style props (e.g. LinearGradient) match.

export const colors = {
  bg: "#0F0F0F",
  card: "#1C1C1E",
  cardAlt: "#232326",
  border: "#2C2C2E",
  textPrimary: "#FFFFFF",
  textSecondary: "#9A9AA0",
  neonPurple: "#8B5CF6",
  neonPurpleDark: "#6D28D9",
  acidGreen: "#39FF88",
  warnYellow: "#FFD54A",
  infoBlue: "#4CA6FF",
  dangerRed: "#FF5B5B",
};

export const gradients = {
  purple: ["#8B5CF6", "#6D28D9"],
  onboardingHero: ["#2D1B69", "#0F0F0F"],
  paywall: ["#0A0A2A", "#000000"],
};

// Returns a color along a red -> yellow -> green scale based on a 0-100 score.
// Used for metric progress bars (Overall, Skin Quality, Jawline, etc).
export function scoreColor(score) {
  if (score >= 90) return colors.acidGreen;
  if (score >= 75) return "#9BE85A";
  if (score >= 60) return colors.warnYellow;
  if (score >= 40) return "#FF9A4A";
  return colors.dangerRed;
}
