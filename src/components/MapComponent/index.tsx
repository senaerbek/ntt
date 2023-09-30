import { View } from 'react-native';
import { GooglePlaceInputComponent } from '../GooglePlaceInputComponent';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import React, { useCallback, useEffect, useState } from 'react';
import { styles } from './style';
import { constants } from '../../theme/constants';
import { MarkerDragStartEndEvent } from 'react-native-maps/lib/sharedTypes';
import { Location } from '../../models/Location';

const initialLocation: Location = {
  latitude: 38.4237,
  longitude: 27.1428,
};

interface MapComponentProps {
  setLocation: (location: Location) => void;
}

export function MapComponent(props: MapComponentProps) {
  const { setLocation } = props;

  const [inputLocation, setInputLocation] = useState(initialLocation);

  const onChangeRegion = useCallback((e: Location) => {
    setLocation(e);
    setInputLocation(e);
  }, [setLocation]);

  const region = { ...inputLocation, latitudeDelta: 0.015, longitudeDelta: 0.015 };

  return (
    <>
      <View style={styles.inputContainer}>
        <GooglePlaceInputComponent setLocation={onChangeRegion} />
      </View>
      <MapView
        provider={PROVIDER_GOOGLE}
        region={region}
        style={{ height: '100%' }}>
        <Marker
          draggable
          pinColor={constants.colors.info}
          coordinate={inputLocation}
          onDragEnd={(e: MarkerDragStartEndEvent) => onChangeRegion(e.nativeEvent.coordinate)}
        />
      </MapView>
    </>
  );
}
