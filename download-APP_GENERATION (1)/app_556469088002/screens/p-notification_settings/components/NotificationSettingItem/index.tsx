

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import CustomSwitch from '../CustomSwitch';

interface NotificationSettingItemProps {
  title: string;
  description: string;
  value: boolean;
  onValueChange: (value: boolean) => void;
}

const NotificationSettingItem: React.FC<NotificationSettingItemProps> = ({
  title,
  description,
  value,
  onValueChange,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onValueChange(!value)}
      activeOpacity={0.7}
    >
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        <CustomSwitch value={value} onValueChange={onValueChange} />
      </View>
    </TouchableOpacity>
  );
};

export default NotificationSettingItem;

