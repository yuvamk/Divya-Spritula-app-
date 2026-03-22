export default {
  expo: {
    name: "Divya",
    slug: "divya-mandir",
    version: "1.0.0",
    sdkVersion: "54.0.0",
    scheme: "divya",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    userInterfaceStyle: "automatic",
    splash: {
      image: "./assets/images/splash.png",
      resizeMode: "cover",
      backgroundColor: "#7E1E1E"
    },
    ios: {
      supportsTablet: false,
      bundleIdentifier: "com.divya.mandir",
      infoPlist: {
        NSCameraUsageDescription: "Temple QR sticker scan ke liye camera chahiye",
        NSLocationWhenInUseUsageDescription: "Aapke najdeeki mandirs dhundhne ke liye",
        NSPhotoLibraryUsageDescription: "Temple aur puja photos upload karne ke liye",
        NSMicrophoneUsageDescription: "Voice se DivyaBot se baat karne ke liye"
      }
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#7E1E1E"
      },
      package: "com.divya.mandir",
      permissions: [
        "CAMERA", "ACCESS_FINE_LOCATION", "READ_EXTERNAL_STORAGE",
        "RECORD_AUDIO", "VIBRATE", "RECEIVE_BOOT_COMPLETED"
      ]
    },
    plugins: [
      "expo-router",
      "expo-camera",
      "expo-location",
      "expo-notifications",
      "expo-image-picker",
      "expo-av"
    ],
    experiments: { typedRoutes: true }
  }
}
