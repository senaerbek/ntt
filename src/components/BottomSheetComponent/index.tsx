import React, { PropsWithChildren, useCallback, useMemo, useRef, useState } from 'react';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetScrollView,
  useBottomSheetModal,
} from '@gorhom/bottom-sheet';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../../navigation/style';
import { BottomSheetBackdropProps } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop';

interface Props {
  children: React.ReactNode;
  content: React.ReactNode;
}

export function BottomSheetComponent(props: Props) {
  const { children, content } = props;
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const snapPoints = useMemo(() => ['50%', '90%'], []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={1}
        animatedIndex={{
          value: 1,
        }}
      />
    ),
    [],
  );

  return (
    <>
      <TouchableOpacity onPress={handlePresentModalPress}>
        {children}
      </TouchableOpacity>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
        backdropComponent={renderBackdrop}
        enableDynamicSizing={false}
      >
        <BottomSheetScrollView contentContainerStyle={{
          flex: 1,
        }}>
          {content}
        </BottomSheetScrollView>
      </BottomSheetModal>
    </>
  );
}
