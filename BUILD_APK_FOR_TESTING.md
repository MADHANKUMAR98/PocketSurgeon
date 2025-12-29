# Building APK for Testing - Quick Guide

This guide will help you create an APK file to share with your friends for testing.

## Quick Steps

### 1. Install EAS CLI (if not already installed)
```bash
npm install -g eas-cli
```

### 2. Login to Expo
```bash
eas login
```
If you don't have an Expo account, create one at https://expo.dev (it's free!)

### 3. Build APK for Testing
```bash
eas build --platform android --profile preview
```

This will:
- Build your app as an APK file (not AAB)
- Take about 15-30 minutes
- Upload the build to Expo's servers
- Give you a download link

### 4. Download the APK

After the build completes, you'll see a URL like:
```
https://expo.dev/artifacts/eas/xxxxx.apk
```

**Option A: Download from Terminal**
- The build command will show you a download command
- Or visit the Expo dashboard: https://expo.dev

**Option B: Download from Expo Dashboard**
1. Go to https://expo.dev
2. Click on your project "PocketSurgeon"
3. Go to "Builds" section
4. Find your latest build
5. Click "Download" button

### 5. Share with Your Friend

Send the APK file to your friend via:
- Email
- Google Drive / Dropbox
- WhatsApp / Telegram
- Any file sharing method

### 6. Installation Instructions for Your Friend

Tell your friend to:
1. Download the APK file
2. On their Android phone, go to **Settings > Security**
3. Enable **"Install from Unknown Sources"** or **"Allow from this source"**
4. Open the downloaded APK file
5. Tap **"Install"**
6. Open the app!

**Note**: Some phones may show a warning about installing from unknown sources - this is normal for test builds.

---

## Alternative: Build APK Locally (Faster, but requires Android setup)

If you want to build faster without waiting for cloud build:

### Prerequisites
- Android Studio installed
- Android SDK configured
- Java JDK installed

### Build Locally
```bash
eas build --platform android --profile preview --local
```

This builds on your computer (much faster, but requires Android development setup).

---

## Troubleshooting

### "EAS CLI not found"
```bash
npm install -g eas-cli
```

### "Not logged in"
```bash
eas login
```

### "Build failed"
- Check the error message in the build logs
- Common issues:
  - Missing app icon
  - Invalid configuration in app.json
  - Network issues

### "Friend can't install APK"
- Make sure they enabled "Install from Unknown Sources"
- Check if their Android version is compatible (Android 5.0+)
- Some phones require enabling "Install unknown apps" for the specific app (Chrome, Files, etc.)

---

## Build Status

Check your build status:
```bash
eas build:list
```

View build logs:
```bash
eas build:view [build-id]
```

---

## What's the Difference?

- **APK**: Single file, easy to share, installs directly on Android
- **AAB**: Google Play format, smaller size, but can't install directly (needs Play Store)

For testing with friends, **APK is perfect**! ✅

---

## Quick Command Reference

```bash
# Build APK for testing
eas build --platform android --profile preview

# Check build status
eas build:list

# View build details
eas build:view [build-id]

# Download build (if you have the build ID)
eas build:download [build-id]
```

---

## Next Steps After Testing

Once your friend tests and gives feedback:
1. Make any necessary changes
2. Build again: `eas build --platform android --profile preview`
3. Share the new APK
4. When ready, build for production: `eas build --platform android --profile production`

---

## Tips

1. **Version Updates**: Before each new test build, you might want to update the version in `app.json` to track different test versions
2. **Build Time**: First build takes longer (~30 min), subsequent builds are faster
3. **File Size**: APK files are typically 20-50MB, make sure your friend has enough storage
4. **Multiple Testers**: You can share the same APK with multiple friends

Good luck with testing! 🚀

