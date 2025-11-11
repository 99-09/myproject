

import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import styles from './styles';

interface CustomSwitchProps {
  value: boolean;
  onValueChange: (value: boolean) => void;
}

const CustomSwitch: React.FC<CustomSwitchProps> = ({ value, onValueChange }) => {
  const translateX = useSharedValue(value ? 20 : 0);

  React.useEffect(() => {
    translateX.value = withTiming(value ? 20 : 0, { duration: 200 });
  }, [value, translateX]);

  const animatedThumbStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  const handlePress = () => {
    onValueChange(!value);
  };

  return (
    <TouchableOpacity
      style={[styles.container, value && styles.containerActive]}
      onPress={handlePress}
      activeOpacity={0.8}
    >
      <Animated.View style={[styles.thumb, animatedThumbStyle]} />
    </TouchableOpacity>
  );
};

export default CustomSwitch;

