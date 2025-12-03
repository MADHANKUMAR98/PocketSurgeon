# 🚀 Quick Build Commands - Copy & Paste

## First Time Setup (Run Once)

```bash
# 1. Install EAS CLI globally
npm install -g eas-cli

# 2. Login to Expo
eas login

# 3. Configure EAS Build
eas build:configure
```

## Build APK (Every Time You Want to Share)

```bash
# Build APK for Android
eas build --platform android --profile preview
```

## Check Build Status

```bash
# List all your builds
eas build:list

# View specific build details
eas build:view [BUILD_ID]
```

## Download APK

After build completes, you can:
1. Check your email for download link
2. Or use command: `eas build:download`

---

## Alternative: One-Line Build (If Already Configured)

```bash
eas build --platform android --profile preview --non-interactive
```

---

## Update App Version Before Building

Edit `app.json`:
- Change `"version": "1.0.1"` (for users to see)
- Change `"versionCode": 2` (for Android to track)

Then build again!

