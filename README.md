# Perfect Face

**"Build your ideal face. Unlock your genetic potential."**

React Native (Expo) + NativeWind (Tailwind) UI scaffold: dark, glassmorphism,
neon-purple accent theme.

## Structure

```
App.js
src/
  navigation/
    RootNavigator.js       # switches Onboarding <-> MainTabs, hosts modals
    OnboardingNavigator.js # Welcome -> Gender -> RateApp -> Referral -> Notifications -> SignUp
    MainTabNavigator.js    # bottom tabs: Scan, Extras, Daily, Coach
  screens/
    onboarding/*           # 6 onboarding screens
    tabs/*                 # Scan, Extras, Daily, Coach
    LevelUpPaywallScreen.js
    SettingsSheetScreen.js
  components/
    FaceScanImage.js       # <- placeholder for all face-grid-scan photos
    PrimaryButton.js
    SecondaryButton.js
    MetricBar.js
  theme/tokens.js           # colors, gradients, scoreColor()
```

## Face-grid photo assets

All screens that need the "face scan with 3D grid overlay" photo use the
shared `<FaceScanImage />` component (`src/components/FaceScanImage.js`).
Drop real assets into `assets/images/` and pass them via the `source` prop,
e.g.:

```jsx
<FaceScanImage source={require('../../assets/images/face-grid-male-1.png')} variant="hero" />
```

Until a `source` is provided it renders a clearly labeled placeholder so the
layout stays intact.

## Setup

```bash
npm install
npx expo start
```

## Notes

- Google sign-in, IAP purchase flow, and push notification registration are
  stubbed with `// TODO` markers — wire up real providers before shipping.
- The Coach tab's "Ask me anything" button and the "Learn how to..." rows all
  route to `LevelUpPaywall` instead of a real chat, per spec.
