# 🍎 Testing Your App on iOS - Complete Guide

## Quick Overview

Your app **already works on iOS!** React Native/Expo apps are cross-platform. Here's how to test it:

---

## 🎯 Method 1: iOS Simulator (Mac Required)

### If You Have a Mac:

#### Step 1: Install Xcode
```bash
# Install from Mac App Store (free, ~12GB download)
# Or use command line:
xcode-select --install
```

#### Step 2: Install iOS Simulator
Xcode includes iOS Simulator automatically.

#### Step 3: Run on Simulator
```bash
# Start Expo
npm start

# Press 'i' to open iOS simulator
# OR run directly:
npm run ios
```

**This opens your app in an iPhone simulator instantly!**

---

## 🎯 Method 2: Physical iPhone (TestFlight - Recommended)

### Best Way to Share with Friends on iPhone:

#### Step 1: Build iOS App
```bash
eas build --platform ios --profile preview
```

#### Step 2: Upload to TestFlight
After build completes:
```bash
eas submit --platform ios
```

#### Step 3: Share TestFlight Link
- Friends get TestFlight app from App Store
- You send them invitation link
- They install your app like a normal app!

**TestFlight is FREE and allows up to 10,000 testers!**

---

## 🎯 Method 3: Direct Install (Advanced)

### For Personal Testing Only:

#### Requirements:
- Mac computer
- Apple Developer Account ($99/year)
- Xcode installed

#### Steps:
```bash
# Build for your device
eas build --platform ios --profile preview

# Install via Xcode or EAS
```

---

## 📱 iOS Version Support

### Your App Supports:
✅ **iOS 13.0 and above**
- iPhone 6s and newer
- iPad (5th generation) and newer
- iPod touch (7th generation)

**This covers ~95% of active iOS devices!**

### To Check/Update Minimum iOS Version:

Edit `app.json`:
```json
"ios": {
  "bundleIdentifier": "com.pocketsurgeon.app",
  "buildNumber": "1",
  "deploymentTarget": "13.0",  // iOS 13.0 minimum
  "supportsTablet": true
}
```

---

## 🚀 Quick Commands for iOS Testing

### Test on Simulator (Mac):
```bash
npm start
# Press 'i' when Metro bundler starts
```

### Build for TestFlight:
```bash
eas build --platform ios --profile preview
```

### Submit to TestFlight:
```bash
eas submit --platform ios
```

### Check Build Status:
```bash
eas build:list --platform ios
```

---

## 🔧 iOS Configuration I've Added

✅ **Bundle Identifier**: `com.pocketsurgeon.app`
✅ **Build Number**: `1`
✅ **Tablet Support**: Enabled

---

## 📋 Comparison: Android vs iOS Testing

| Feature | Android | iOS |
|---------|---------|-----|
| **Build Command** | `eas build --platform android` | `eas build --platform ios` |
| **Share Method** | Direct APK file | TestFlight (recommended) |
| **Testing** | Install APK directly | Install via TestFlight |
| **Requirements** | None | Mac for simulator, Apple ID for TestFlight |
| **Cost** | Free | Free (TestFlight), $99/year (App Store) |

---

## 🎯 Recommended Workflow

### For Quick Testing:
1. **Mac Users**: Use iOS Simulator (`npm run ios`)
2. **No Mac**: Build with EAS and use TestFlight

### For Sharing with Friends:
1. **Android Friends**: Share APK file
2. **iPhone Friends**: Share TestFlight link

---

## 🆘 Troubleshooting

### "Cannot find simulator"
```bash
# List available simulators
xcrun simctl list devices

# Or open Xcode → Preferences → Components → Download iOS Simulator
```

### "Build fails for iOS"
- Make sure you have Apple Developer account linked:
  ```bash
  eas build:configure
  ```
- You may need to set up credentials first time

### "TestFlight not working"
- Check Apple Developer account status
- Verify bundle identifier is unique
- Wait 24-48 hours for first TestFlight processing

---

## 💡 Tips

1. **Test on Multiple Devices**: iPhone SE, iPhone 14 Pro, iPad
2. **Test Different iOS Versions**: iOS 13, 14, 15, 16, 17
3. **Use TestFlight**: It's the easiest way to share with iPhone users
4. **Simulator is Fast**: Great for development, but test on real device too

---

## 📞 Next Steps

1. **If you have Mac**: Run `npm run ios` to test immediately
2. **If no Mac**: Build with EAS and use TestFlight
3. **Share with friends**: TestFlight link for iPhone, APK for Android

---

## ✅ Your App is iOS-Ready!

Your React Native app works on both platforms automatically. Just build and test! 🚀

