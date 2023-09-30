import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { styles } from './style';

interface GooglePlaceInputComponentProps {
  setLocation: any;
}

const GOOGLE_PLACES_API_KEY = process.env.EXPO_PUBLIC_GOOGLE_PLACES_API_KEY;

export function GooglePlaceInputComponent(props: GooglePlaceInputComponentProps) {
  const { setLocation } = props;

  return (
    <GooglePlacesAutocomplete
      placeholder='Enter Location'
      minLength={2}
      fetchDetails={true}
      styles={{
        textInput: styles.inputContainer,
        listView: styles.listView,
      }}
      query={{
        key: GOOGLE_PLACES_API_KEY,
        language: 'tr',
      }}
      onPress={(data, details = null) => {
        setLocation({
          latitude: details?.geometry.location.lat,
          longitude: details?.geometry.location.lng,
        });
      }}
    />
  );
}
