

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import styles from './styles';

interface SettingItemProps {
  icon: string;
  iconColor: string;
  iconBackgroundColor: string;
  title: string;
  subtitle: string;
  titleColor?: string;
  onPress: () => void;
}

const SettingItem: React.FC<SettingItemProps> = ({
  icon,
  iconColor,
  iconBackgroundColor,
  title,
  subtitle,
  titleColor = '#1e293b',
  onPress,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.item} onPress={onPress} activeOpacity={0.7}>
        <View style={styles.leftContent}>
          <View style={[styles.iconContainer, { backgroundColor: iconBackgroundColor }]}>
            <FontAwesome6 name={icon} size={18} color={iconColor} />
          </View>
          <View style={styles.textContainer}>
            <Text style={[styles.title, { color: titleColor }]}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
          </View>
        </View>
        <FontAwesome6 name="chevron-right" size={14} color="#64748b" />
      </TouchableOpacity>
    </View>
  );
};

export default SettingItem;

