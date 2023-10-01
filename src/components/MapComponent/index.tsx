import { View } from 'react-native';
import { GooglePlaceInputComponent } from '../GooglePlaceInputComponent';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import React, { useCallback, useEffect, useState } from 'react';
import { styles } from './style';
import { constants } from '../../theme/constants';
import { MarkerDragStartEndEvent } from 'react-native-maps/lib/sharedTypes';
import { Location } from '../../models/Location';
import * as ExpoLocation from 'expo-location';

const initialLocation: Location = {
  latitude: 38.4237,
  longitude: 27.1428,
};

interface MapComponentProps {
  onLocationChange?: (location: Location) => void;
  location?: Location;
  search?: boolean;
}

export function MapComponent(props: MapComponentProps) {
  const { onLocationChange, location, search = false } = props;
  const [defaultLocation, setDefaultLocation] = useState(initialLocation);
  const region = { ...defaultLocation, latitudeDelta: 0.015, longitudeDelta: 0.015 };
  const [currentLocation, setCurrentLocation] = useState<Location | null>(null);

  const onChangeRegion = useCallback((e: Location) => {
    if (onLocationChange) {
      onLocationChange(e);
      setDefaultLocation(e);
    }
  }, [onLocationChange]);

  useEffect(() => {
    (async () => {
      const { status } = await ExpoLocation.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        alert('Permission to access location was denied');
        return;
      }
      const location = await ExpoLocation.getCurrentPositionAsync({});
      setCurrentLocation({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        },
      );
    })();
  }, []);

  useEffect(() => {
    if (location) {
      setDefaultLocation(location);
    } else {
      setDefaultLocation(currentLocation || initialLocation);
    }
  }, [currentLocation, location]);

  return (
    <>
      {search ? (
        <View style={styles.inputContainer}>
          <GooglePlaceInputComponent setLocation={onChangeRegion} />
        </View>
      ) : null}
      <MapView
        provider={PROVIDER_GOOGLE}
        region={region}
        onPress={(e) => {
          search ?
            onChangeRegion(e.nativeEvent.coordinate) : null;
        }}
        style={{ height: '100%' }}>
        <Marker
          draggable={search}
          pinColor={constants.colors.info}
          coordinate={defaultLocation}
          onDragEnd={(e: MarkerDragStartEndEvent) => {
            search ?
              onChangeRegion(e.nativeEvent.coordinate) : null;
          }}
        />
      </MapView>
    </>
  );
}
