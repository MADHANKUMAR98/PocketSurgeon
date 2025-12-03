# 🍎 Quick iOS Testing Commands

## Test on iOS Simulator (Mac Only)

```bash
# Start development server
npm start

# Then press 'i' to open iOS simulator
# OR run directly:
npm run ios
```

---

## Build iOS App for TestFlight

```bash
# Build iOS app
eas build --platform ios --profile preview

# Submit to TestFlight (after build completes)
eas submit --platform ios
```

---

## Check iOS Build Status

```bash
eas build:list --platform ios
```

---

## Quick Test Checklist

- [ ] App runs on iOS Simulator (if Mac)
- [ ] App builds successfully with EAS
- [ ] TestFlight link works
- [ ] Friends can install via TestFlight
- [ ] App works on iPhone and iPad

---

## iOS Support

✅ **iOS 13.0+** (iPhone 6s and newer)
✅ **iPad Support** (enabled)
✅ **All modern iPhones** supported

---

**That's it! Your app works on iOS automatically!** 🎉

