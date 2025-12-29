# How to Reduce APK Size - Optimization Guide

Your APK is currently 99MB. Here are several strategies to reduce it significantly.

## 🎯 Quick Wins (Can reduce to ~30-50MB)

### 1. Build APK for Single Architecture (BIGGEST WIN!)

By default, EAS builds APKs for all architectures (arm64-v8a, armeabi-v7a, x86, x86_64). Building for just one can reduce size by **60-70%**.

**Option A: Build for ARM64 only (recommended for most modern phones)**
```bash
eas build --platform android --profile preview --local
```
Then modify the build to target only arm64-v8a, OR use this command:

**Option B: Use EAS Build with architecture filter**

Update your `eas.json` preview profile:

```json
"preview": {
  "distribution": "internal",
  "android": {
    "buildType": "apk",
    "buildType": "apk",
    "splits": {
      "abi": {
        "enabled": true,
        "universalApk": false
      }
    }
  }
}
```

Then build:
```bash
eas build --platform android --profile preview
```

This creates separate APKs for each architecture. Share only the **arm64-v8a** APK (works on 95% of modern Android phones).

**Expected reduction: 60-70% (99MB → ~30-40MB)**

---

### 2. Enable Code Shrinking & Resource Optimization ✅ (Already Added)

I've already added these to your `app.json`:
- `enableProguardInReleaseBuilds: true` - Removes unused code
- `enableShrinkResourcesInReleaseBuilds: true` - Removes unused resources

**Expected reduction: 10-20%**

---

### 3. Remove Unused Images

I noticed you have several images that might be unused:

**Potentially Unused:**
- `react-logo.png`, `react-logo@2x.png`, `react-logo@3x.png` - React logos (likely unused)
- `partial-react-logo.png` - React logo variant (likely unused)

**To check and remove:**
1. Search your codebase for references to these files
2. If not used, delete them from `assets/images/`

**Expected reduction: 1-5MB**

---

### 4. Optimize Images

Your forceps images (JPG files) might be large. Optimize them:

**Using online tools:**
- https://tinypng.com/ (for PNG)
- https://compressor.io/ (for JPG)
- https://squoosh.app/ (Google's tool)

**Using command line (if you have ImageMagick):**
```bash
# Navigate to images folder
cd assets/images/forceps-images

# Optimize all JPGs (reduce quality to 80%)
for file in *.jpg; do
  magick "$file" -quality 80 -strip "optimized_$file"
done
```

**Expected reduction: 5-15MB**

---

### 5. Remove Unused Dependencies

I noticed `react-native-video` in your dependencies but it doesn't seem to be used. Check:

```bash
# Search for usage
grep -r "react-native-video" .
```

If not used, remove it:
```bash
npm uninstall react-native-video
```

**Expected reduction: 5-10MB**

---

## 🔧 Advanced Optimizations

### 6. Use App Bundle Instead of APK (For Production)

For Play Store, use AAB (Android App Bundle) instead of APK. It's automatically optimized:
```bash
eas build --platform android --profile production
```

AAB files are smaller because Google Play serves optimized APKs per device.

### 7. Enable Hermes Engine (Already Enabled)

Hermes is enabled by default in Expo SDK 54, which reduces app size.

### 8. Lazy Load Images

Instead of bundling all images, consider:
- Loading images from a CDN
- Using smaller thumbnails and loading full images on demand
- Converting images to WebP format (smaller than JPG/PNG)

---

## 📊 Expected Results

| Optimization | Size Reduction | New Size |
|-------------|----------------|----------|
| Current | - | 99MB |
| Single Architecture | -60MB | ~39MB |
| Code Shrinking | -10MB | ~29MB |
| Image Optimization | -5MB | ~24MB |
| Remove Unused Deps | -5MB | ~19MB |
| **Total Expected** | **~80MB** | **~19-25MB** |

---

## 🚀 Recommended Action Plan

### Step 1: Build for Single Architecture (Immediate)

Create a new build profile in `eas.json`:

```json
"preview-arm64": {
  "distribution": "internal",
  "android": {
    "buildType": "apk"
  },
  "env": {
    "EXPO_ANDROID_ABI_FILTER": "arm64-v8a"
  }
}
```

Then build:
```bash
eas build --platform android --profile preview-arm64
```

**This alone should reduce your APK from 99MB to ~35-40MB!**

### Step 2: Optimize Images

1. Use https://squoosh.app/ to optimize all images
2. Replace original images with optimized versions
3. Rebuild

### Step 3: Remove Unused Dependencies

1. Check if `react-native-video` is used
2. If not, remove it: `npm uninstall react-native-video`
3. Rebuild

### Step 4: Clean Up Unused Assets

1. Search for unused image references
2. Delete unused images
3. Rebuild

---

## 🛠️ Manual Build Configuration (Advanced)

If you want more control, you can create a custom `android/app/build.gradle` configuration. However, with Expo managed workflow, the `app.json` settings should be sufficient.

---

## 📝 Quick Commands

```bash
# Build optimized APK (after making changes)
eas build --platform android --profile preview

# Check current build size
eas build:list

# Download and check APK size
# APK will be in your downloads or Expo dashboard
```

---

## ✅ Checklist

- [ ] Build for single architecture (arm64-v8a)
- [ ] Enable code shrinking (already done ✅)
- [ ] Optimize all images
- [ ] Remove unused dependencies
- [ ] Remove unused image assets
- [ ] Rebuild and verify size reduction

---

## 💡 Tips

1. **Test on Real Device**: After optimization, test the APK to ensure everything works
2. **Compare Sizes**: Keep track of APK sizes before/after each optimization
3. **Modern Phones**: Most Android phones today use ARM64, so single-architecture builds are fine
4. **For Testing**: Single architecture APK is perfect for sharing with friends
5. **For Production**: Use AAB format for Play Store (smaller and optimized)

---

## 🎯 Expected Final Size

With all optimizations:
- **Single Architecture APK**: ~20-30MB (perfect for testing)
- **Production AAB**: ~15-25MB (for Play Store)

This is a **70-80% reduction** from your current 99MB! 🎉

---

## Need Help?

If you encounter issues:
1. Check build logs: `eas build:view [build-id]`
2. Verify images are optimized
3. Ensure dependencies are actually unused before removing
4. Test the optimized APK on a real device

Good luck optimizing! 🚀

