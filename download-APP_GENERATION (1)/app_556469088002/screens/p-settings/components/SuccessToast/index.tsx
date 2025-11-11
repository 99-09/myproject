

import React from 'react';
import { View, Text, Modal } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import styles from './styles';

interface SuccessToastProps {
  visible: boolean;
  message: string;
}

const SuccessToast: React.FC<SuccessToastProps> = ({ visible, message }) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      pointerEvents="none"
    >
      <View style={styles.container}>
        <View style={styles.toast}>
          <FontAwesome6 name="circle-check" size={16} color="#ffffff" />
          <Text style={styles.message}>{message}</Text>
        </View>
      </View>
    </Modal>
  );
};

export default SuccessToast;

