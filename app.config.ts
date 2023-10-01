import { ExpoConfig, ConfigContext } from '@expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  slug: 'ntt',
  name: 'ntt',
  extra: {
    'eas': {
      'projectId': '5f5a2d41-3a8f-43c6-b432-89974d241829',
    },
  },
  updates: {
    'url': 'https://u.expo.dev/5f5a2d41-3a8f-43c6-b432-89974d241829',
  },
  runtimeVersion: {
    'policy': 'appVersion',
  },
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
