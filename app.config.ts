import { ExpoConfig, ConfigContext } from '@expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  slug: 'ntt',
  name: 'ntt',
  ios: {
    supportsTablet: false,
    bundleIdentifier: 'com.project.ntt',
    buildNumber: '1.0.0',
    config: {
      googleMapsApiKey: process.env.EXPO_GOOGLE_MAPS_API_KEY,
    },
  },
  android: {
    package: 'com.project.ntt',
    versionCode: 1,
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#ffffff',
    },
    config: {
      googleMaps: {
        apiKey: process.env.EXPO_GOOGLE_MAPS_API_KEY,
      },
    },
  },
});
