# 📱 How to Build APK for PocketSurgeon App

## Step-by-Step Guide to Build and Share Your APK

### Prerequisites
1. **Expo Account** (Free) - Sign up at [expo.dev](https://expo.dev)
2. **EAS CLI** - Expo's build service (we'll install it)
3. **Node.js** - Already installed ✅

---

## Method 1: Using EAS Build (Recommended - Easiest)

### Step 1: Install EAS CLI
Open your terminal in the project folder and run:

```bash
npm install -g eas-cli
```

### Step 2: Login to Expo
```bash
eas login
```
(Enter your Expo account credentials)

### Step 3: Configure EAS Build
```bash
eas build:configure
```
This will create an `eas.json` file in your project.

### Step 4: Build APK for Android
```bash
eas build --platform android --profile preview
```

**What this does:**
- Creates a preview APK (not for Play Store)
- Perfect for sharing with friends
- Builds in the cloud (no Android Studio needed!)

### Step 5: Wait for Build
- Build takes 10-20 minutes
- You'll get a URL to track progress
- You'll receive an email when done

### Step 6: Download APK
Once build completes:
1. Visit the build URL from email
2. Click "Download" to get the APK file
3. The APK will be named like: `PocketSurgeon-1.0.0-preview.apk`

---

## Method 2: Local Build (Advanced)

If you have Android Studio installed:

```bash
# Install Expo CLI
npm install -g @expo/cli

# Build locally
npx expo run:android --variant release
```

The APK will be in: `android/app/build/outputs/apk/release/app-release.apk`

---

## 📤 Sharing APK with Friends

### Option 1: Direct File Share
1. Upload APK to Google Drive / Dropbox
2. Share the link with friends
3. They download and install

### Option 2: Using File Sharing Services
- **WeTransfer** - Free, up to 2GB
- **SendAnywhere** - Quick file sharing
- **Telegram** - Send file directly

### Option 3: QR Code (EAS Build)
EAS Build provides a QR code that friends can scan to download directly!

---

## 📲 Installing APK on Android

**Your friends need to:**
1. Download the APK file
2. Enable "Install from Unknown Sources":
   - Go to Settings → Security → Enable "Unknown Sources"
   - OR Settings → Apps → Special Access → Install Unknown Apps
3. Open the downloaded APK file
4. Tap "Install"
5. Open the app!

---

## 🤖 Android Version Compatibility

### Current Support
Your app uses **React Native 0.81.5** and **Expo SDK 54**, which supports:

✅ **Android 5.0 (API 21) and above**
- Android 5.0 Lollipop (2014) ✅
- Android 6.0 Marshmallow ✅
- Android 7.0 Nougat ✅
- Android 8.0 Oreo ✅
- Android 9.0 Pie ✅
- Android 10 ✅
- Android 11 ✅
- Android 12 ✅
- Android 13 ✅
- Android 14 ✅
- Android 15 ✅

**This covers ~99% of active Android devices!**

### To Check/Update Minimum Android Version

Edit `app.json`:
```json
"android": {
  "package": "com.pocketsurgeon.app",
  "versionCode": 1,
  "minSdkVersion": 21,  // Android 5.0 (default)
  // ... rest of config
}
```

**Lower versions (if needed):**
- `minSdkVersion: 21` = Android 5.0 (Recommended)
- `minSdkVersion: 19` = Android 4.4 (Very old devices)
- `minSdkVersion: 23` = Android 6.0 (More modern)

---

## 🔧 Troubleshooting

### Build Fails?
```bash
# Clear cache and try again
eas build --platform android --profile preview --clear-cache
```

### APK Too Large?
- EAS Build creates optimized APKs
- Consider using App Bundle (AAB) for Play Store later

### Friends Can't Install?
- Make sure they enabled "Unknown Sources"
- Check if their Android version is 5.0+
- Try downloading on a different device

---

## 📋 Quick Command Reference

```bash
# Install EAS CLI
npm install -g eas-cli

# Login
eas login

# Configure
eas build:configure

# Build APK
eas build --platform android --profile preview

# Check build status
eas build:list

# Download build
eas build:download
```

---

## 🎯 Next Steps After Testing

1. **Get Feedback** from friends
2. **Fix Issues** based on reviews
3. **Update Version** in `app.json`:
   ```json
   "version": "1.0.1",
   "android": {
     "versionCode": 2
   }
   ```
4. **Build Again** with new version
5. **Publish to Play Store** when ready!

---

## 💡 Tips

- **Test on multiple devices** before sharing widely
- **Keep version numbers** updated for each build
- **Use EAS Build** - it's free for preview builds
- **APK size** will be ~30-50MB (normal for React Native apps)

---

## 📞 Need Help?

- Expo Docs: https://docs.expo.dev/build/introduction/
- EAS Build: https://docs.expo.dev/build/introduction/
- Community: https://forums.expo.dev/

Good luck with your app! 🚀

