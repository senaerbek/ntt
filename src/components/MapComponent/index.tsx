import { View } from 'react-native';
import { GooglePlaceInputComponent } from '../GooglePlaceInputComponent';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import React, { useCallback, useEffect, useState } from 'react';
import { styles } from './style';
import { constants } from '../../theme/constants';
import { MarkerDragStartEndEvent, MarkerPressEvent } from 'react-native-maps/lib/sharedTypes';
import { Location } from '../../models/Location';

const initialLocation: Location = {
  latitude: 38.4237,
  longitude: 27.1428,
};

interface MapComponentProps {
  setLocation?: (location: Location) => void;
  location?: Location;
  search?: boolean;
}

export function MapComponent(props: MapComponentProps) {
  const { setLocation, location, search = false } = props;
  const [inputLocation, setInputLocation] = useState(initialLocation);
  const region = { ...inputLocation, latitudeDelta: 0.015, longitudeDelta: 0.015 };

  const onChangeRegion = useCallback((e: Location) => {
    if (setLocation) {
      setLocation(e);
      setInputLocation(e);
    }
  }, [setLocation]);


  useEffect(() => {
    if (location) {
      setInputLocation(location);
    }
  }, [location]);

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
          coordinate={inputLocation}
          onDragEnd={(e: MarkerDragStartEndEvent) => {
            search ?
              onChangeRegion(e.nativeEvent.coordinate) : null;
          }}
        />
      </MapView>
    </>
  );
}
