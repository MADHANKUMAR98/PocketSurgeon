# Publishing Guide: PocketSurgeon to Play Store & App Store

This guide will walk you through publishing your Expo app to both Google Play Store and Apple App Store.

## Prerequisites

### 1. Accounts Required
- **Google Play Console Account**: $25 one-time registration fee
  - Sign up at: https://play.google.com/console
- **Apple Developer Account**: $99/year subscription
  - Sign up at: https://developer.apple.com/programs/
- **Expo Account**: Free (for EAS Build)
  - Sign up at: https://expo.dev

### 2. Install EAS CLI
```bash
npm install -g eas-cli
```

### 3. Login to Expo
```bash
eas login
```

### 4. Link Your Project (if not already done)
```bash
eas build:configure
```

---

## Part 1: Publishing to Google Play Store

### Step 1: Prepare Your App Information

Before building, ensure your `app.json` has all required information:

- ✅ App name: "PocketSurgeon"
- ✅ Package name: "com.pocketsurgeon.app"
- ✅ Version: "1.0.0"
- ✅ Version code: 1

### Step 2: Create App Store Listing Assets

You'll need to prepare:
- **App Icon**: 512x512px PNG (already have: `assets/images/logo.png`)
- **Feature Graphic**: 1024x500px PNG (for Play Store listing)
- **Screenshots**: 
  - Phone: At least 2 screenshots (min 320px, max 3840px height)
  - Tablet (if supported): At least 2 screenshots
- **Short Description**: 80 characters max
- **Full Description**: 4000 characters max

### Step 3: Build Android Production App

```bash
# Build AAB (Android App Bundle) - recommended for Play Store
eas build --platform android --profile production
```

This will:
- Build your app in the cloud
- Generate an AAB (Android App Bundle) file
- Take approximately 15-30 minutes

### Step 4: Create App in Google Play Console

1. Go to https://play.google.com/console
2. Click "Create app"
3. Fill in:
   - App name: PocketSurgeon
   - Default language: English
   - App or game: App
   - Free or paid: Choose accordingly
   - Declarations: Check all applicable boxes
4. Click "Create app"

### Step 5: Complete Store Listing

1. Navigate to **Store presence > Main store listing**
2. Upload:
   - App icon (512x512px)
   - Feature graphic (1024x500px)
   - Screenshots
   - Short description
   - Full description
   - App category
   - Contact details

### Step 6: Set Up App Content

1. Go to **Policy > App content**
2. Complete:
   - Privacy Policy (required if app collects data)
   - Target audience
   - Content ratings questionnaire
   - Data safety form

### Step 7: Upload Your App Bundle

1. Go to **Production > Releases**
2. Click "Create new release"
3. Upload the AAB file from your EAS build
4. Add release notes
5. Click "Review release"

### Step 8: Complete App Review

1. Review all sections in the left sidebar
2. Ensure all required items have green checkmarks
3. Click "Submit for review"
4. Review typically takes 1-3 days

---

## Part 2: Publishing to Apple App Store

### Step 1: Prepare Your App Information

Your `app.json` already has:
- ✅ Bundle identifier: "com.pocketsurgeon.app"
- ✅ Build number: "1"
- ✅ Version: "1.0.0"

### Step 2: Create App Store Listing Assets

You'll need:
- **App Icon**: 1024x1024px PNG (no transparency, no rounded corners)
- **Screenshots**:
  - iPhone 6.7" (iPhone 14 Pro Max): 1290x2796px
  - iPhone 6.5" (iPhone 11 Pro Max): 1242x2688px
  - iPhone 5.5" (iPhone 8 Plus): 1242x2208px
  - iPad Pro 12.9": 2048x2732px (if tablet supported)
- **App Preview Videos** (optional but recommended)
- **Description**: Up to 4000 characters
- **Keywords**: Up to 100 characters
- **Support URL**: Required
- **Marketing URL**: Optional
- **Privacy Policy URL**: Required if app collects data

### Step 3: Build iOS Production App

```bash
# Build iOS app
eas build --platform ios --profile production
```

**Important**: For iOS builds, you'll need:
- Apple Developer account enrolled
- Distribution certificate and provisioning profile (EAS can generate these)

### Step 4: Configure App Store Connect

1. Go to https://appstoreconnect.apple.com
2. Sign in with your Apple Developer account
3. Click "My Apps" > "+" > "New App"
4. Fill in:
   - Platform: iOS
   - Name: PocketSurgeon
   - Primary language: English
   - Bundle ID: com.pocketsurgeon.app (must match app.json)
   - SKU: pocketsurgeon-001 (unique identifier)
   - User access: Full access (or limited if needed)

### Step 5: Complete App Information

1. In App Store Connect, go to your app
2. Fill in **App Information**:
   - Category
   - Subtitle (30 characters)
   - Privacy Policy URL (if required)
   - Support URL

3. Fill in **Pricing and Availability**:
   - Price tier (Free or Paid)
   - Availability countries

### Step 6: Complete Store Listing

1. Go to **App Store** tab
2. Select version 1.0
3. Upload:
   - App icon (1024x1024px)
   - Screenshots for each device size
   - Description
   - Keywords
   - Support URL
   - Marketing URL (optional)
   - Promotional text (170 characters, optional)

### Step 7: Submit Your Build

**Option A: Using EAS Submit (Recommended)**
```bash
# Submit to App Store automatically
eas submit --platform ios --profile production
```

**Option B: Manual Upload**
1. Download the `.ipa` file from your EAS build
2. Use Transporter app or Xcode to upload
3. In App Store Connect, select the build in "TestFlight" or "App Store" section

### Step 8: Complete App Review Information

1. Go to **App Review Information**:
   - Contact information
   - Demo account (if app requires login)
   - Notes for reviewer
   - Attachments (if needed)

2. Complete **Version Information**:
   - What's New in This Version
   - Review notes
   - Screenshots and description

### Step 9: Submit for Review

1. Ensure all sections are complete
2. Click "Add for Review"
3. Answer export compliance questions
4. Submit for review
5. Review typically takes 1-7 days

---

## Part 3: Using EAS Build & Submit (Recommended Workflow)

### Build Commands

```bash
# Build for Android
eas build --platform android --profile production

# Build for iOS
eas build --platform ios --profile production

# Build for both platforms
eas build --platform all --profile production
```

### Submit Commands

```bash
# Submit Android to Play Store
eas submit --platform android --profile production

# Submit iOS to App Store
eas submit --platform ios --profile production

# Submit both
eas submit --platform all --profile production
```

### Check Build Status

```bash
eas build:list
```

### Download Builds

Builds are available at: https://expo.dev/accounts/[your-account]/projects/PocketSurgeon/builds

---

## Part 4: Important Considerations

### Version Management

Your `eas.json` has `autoIncrement: true` for production builds, which automatically increments:
- Android: `versionCode` in `app.json`
- iOS: `buildNumber` in `app.json`

**Before each release**, update the `version` in `app.json`:
```json
{
  "expo": {
    "version": "1.0.1"  // Update this for each release
  }
}
```

### Privacy Policy

Both stores require a privacy policy if your app:
- Collects user data
- Uses analytics
- Accesses device features (camera, location, etc.)

Create a privacy policy and host it online, then add the URL to both stores.

### App Icons

- **Android**: Already configured with adaptive icon
- **iOS**: Ensure `assets/images/logo.png` is 1024x1024px

### Testing Before Release

1. **Internal Testing**:
   ```bash
   eas build --platform android --profile preview
   eas build --platform ios --profile preview
   ```

2. **TestFlight (iOS)**: 
   - Upload build to App Store Connect
   - Add testers in TestFlight section
   - Test before submitting to review

3. **Internal Testing (Android)**:
   - Upload AAB to Play Console
   - Create internal testing track
   - Add testers

### Common Issues & Solutions

1. **iOS Build Fails**: 
   - Ensure Apple Developer account is active
   - Check bundle identifier matches App Store Connect
   - Verify certificates are valid

2. **Android Build Fails**:
   - Check package name is unique
   - Verify all required permissions are declared

3. **App Rejected**:
   - Read rejection reasons carefully
   - Address all issues
   - Resubmit with updated build

---

## Part 5: Post-Publication

### Monitoring

- **Google Play Console**: Track downloads, ratings, crashes
- **App Store Connect**: Track downloads, ratings, analytics
- **Expo Dashboard**: Monitor build status and errors

### Updates

For app updates:
1. Update version in `app.json`
2. Build new version: `eas build --platform all --profile production`
3. Submit: `eas submit --platform all --profile production`
4. Update store listings if needed

### Maintenance

- Respond to user reviews
- Monitor crash reports
- Update app regularly
- Keep dependencies updated

---

## Quick Start Checklist

### Before Building:
- [ ] Update app version in `app.json`
- [ ] Prepare app icons (1024x1024 for iOS, 512x512 for Android)
- [ ] Prepare screenshots for both platforms
- [ ] Write app description and keywords
- [ ] Create privacy policy (if needed)
- [ ] Test app thoroughly

### Android:
- [ ] Create Google Play Console account
- [ ] Build AAB: `eas build --platform android --profile production`
- [ ] Create app in Play Console
- [ ] Complete store listing
- [ ] Upload AAB and submit

### iOS:
- [ ] Create Apple Developer account
- [ ] Build iOS app: `eas build --platform ios --profile production`
- [ ] Create app in App Store Connect
- [ ] Complete store listing
- [ ] Submit build: `eas submit --platform ios --profile production`

---

## Resources

- **Expo EAS Build Docs**: https://docs.expo.dev/build/introduction/
- **Expo EAS Submit Docs**: https://docs.expo.dev/submit/introduction/
- **Google Play Console Help**: https://support.google.com/googleplay/android-developer
- **App Store Connect Help**: https://help.apple.com/app-store-connect/
- **Expo Discord**: https://chat.expo.dev (for community support)

---

## Need Help?

If you encounter issues:
1. Check Expo documentation
2. Review error messages in EAS build logs
3. Check store-specific requirements
4. Join Expo Discord for community support

Good luck with your app launch! 🚀

