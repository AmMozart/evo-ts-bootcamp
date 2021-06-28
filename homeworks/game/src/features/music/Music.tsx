import React, { useEffect } from 'react';
import { useAppSelector } from '../../app/hooks';
import { selectIsOn } from './musicSlice';

export const Music = () => {
  const isOn = useAppSelector(selectIsOn)

  useEffect(() => {
    console.log('music: ', isOn)
  }, [isOn])
  return null
}
