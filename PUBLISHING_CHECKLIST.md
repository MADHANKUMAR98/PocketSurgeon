# Publishing Checklist - Quick Reference

## Pre-Build Checklist

### App Configuration
- [ ] App version updated in `app.json` (currently: 1.0.0)
- [ ] App name is final (currently: PocketSurgeon)
- [ ] Bundle ID/Package name is correct (com.pocketsurgeon.app)
- [ ] App icon is 1024x1024px for iOS
- [ ] Android adaptive icon assets are ready

### Assets Needed
- [ ] **iOS App Icon**: 1024x1024px PNG (no transparency)
- [ ] **Android App Icon**: 512x512px PNG
- [ ] **iOS Screenshots**: 
  - [ ] iPhone 6.7" (1290x2796px) - at least 2
  - [ ] iPhone 6.5" (1242x2688px) - at least 2
  - [ ] iPad Pro 12.9" (2048x2732px) - at least 2 (if tablet supported)
- [ ] **Android Screenshots**:
  - [ ] Phone screenshots - at least 2
  - [ ] Tablet screenshots - at least 2 (if tablet supported)
- [ ] **Feature Graphic** (Android): 1024x500px PNG

### Content Needed
- [ ] App description (4000 chars max)
- [ ] Short description (80 chars for Android, 30 chars for iOS)
- [ ] Keywords (100 chars for iOS)
- [ ] Privacy Policy URL (required if app collects data)
- [ ] Support URL (required for iOS)
- [ ] Marketing URL (optional)
- [ ] Release notes for version 1.0.0

### Accounts Setup
- [ ] Google Play Console account created ($25)
- [ ] Apple Developer account created ($99/year)
- [ ] Expo account created (free)
- [ ] EAS CLI installed: `npm install -g eas-cli`
- [ ] Logged into EAS: `eas login`

---

## Android Publishing Steps

### Build
- [ ] Run: `eas build --platform android --profile production`
- [ ] Wait for build to complete (~15-30 min)
- [ ] Download AAB file from Expo dashboard

### Play Console Setup
- [ ] Create app in Google Play Console
- [ ] Complete "Store presence > Main store listing"
- [ ] Upload app icon, feature graphic, screenshots
- [ ] Add app description
- [ ] Complete "Policy > App content"
- [ ] Fill privacy policy (if needed)
- [ ] Complete content rating questionnaire
- [ ] Complete data safety form

### Upload & Submit
- [ ] Go to "Production > Releases"
- [ ] Create new release
- [ ] Upload AAB file
- [ ] Add release notes
- [ ] Review all sections
- [ ] Submit for review

---

## iOS Publishing Steps

### Build
- [ ] Run: `eas build --platform ios --profile production`
- [ ] Wait for build to complete (~20-40 min)
- [ ] Note: First build may require certificate setup

### App Store Connect Setup
- [ ] Create app in App Store Connect
- [ ] Complete "App Information"
- [ ] Set pricing and availability
- [ ] Complete "App Store" tab
- [ ] Upload app icon (1024x1024px)
- [ ] Upload screenshots for each device size
- [ ] Add description, keywords, support URL
- [ ] Complete "App Review Information"
- [ ] Add contact information
- [ ] Add demo account (if app requires login)

### Submit
- [ ] Run: `eas submit --platform ios --profile production`
- [ ] OR manually upload via Transporter/Xcode
- [ ] Select build in App Store Connect
- [ ] Complete export compliance questions
- [ ] Submit for review

---

## Post-Submission

### While Waiting for Review
- [ ] Monitor build status
- [ ] Prepare marketing materials
- [ ] Set up analytics (if not already done)
- [ ] Plan launch announcement

### After Approval
- [ ] App goes live automatically (Android)
- [ ] Manually release on App Store (iOS) - you control when
- [ ] Monitor initial reviews and ratings
- [ ] Respond to user feedback
- [ ] Monitor crash reports

---

## Common Commands Reference

```bash
# Login to Expo
eas login

# Configure project
eas build:configure

# Build for production
eas build --platform android --profile production
eas build --platform ios --profile production
eas build --platform all --profile production

# Submit to stores
eas submit --platform android --profile production
eas submit --platform ios --profile production
eas submit --platform all --profile production

# Check build status
eas build:list

# View build logs
eas build:view [build-id]
```

---

## Important Notes

1. **Version Updates**: Before each new release, update `version` in `app.json`
2. **Build Numbers**: EAS auto-increments build numbers for production builds
3. **Privacy Policy**: Required if app collects any user data
4. **Review Time**: 
   - Android: 1-3 days typically
   - iOS: 1-7 days typically
5. **First Submission**: May take longer due to initial review
6. **Rejections**: Common reasons include missing privacy policy, incomplete information, or policy violations

---

## Quick Links

- Expo Dashboard: https://expo.dev
- Google Play Console: https://play.google.com/console
- App Store Connect: https://appstoreconnect.apple.com
- EAS Build Docs: https://docs.expo.dev/build/introduction/
- EAS Submit Docs: https://docs.expo.dev/submit/introduction/

