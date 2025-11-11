

import React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import styles from './styles';

interface ConfirmModalProps {
  visible: boolean;
  icon: string;
  iconColor: string;
  iconBackgroundColor: string;
  title: string;
  message: string;
  confirmText: string;
  confirmColor: string;
  cancelText: string;
  onConfirm: () => void;
  onCancel: () => void;
  onClose: () => void;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  visible,
  icon,
  iconColor,
  iconBackgroundColor,
  title,
  message,
  confirmText,
  confirmColor,
  cancelText,
  onConfirm,
  onCancel,
  onClose,
}) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableOpacity 
        style={styles.overlay} 
        activeOpacity={1} 
        onPress={onClose}
      >
        <View style={styles.container}>
          <TouchableOpacity activeOpacity={1} style={styles.modal}>
            <View style={styles.content}>
              <View style={[styles.iconContainer, { backgroundColor: iconBackgroundColor }]}>
                <FontAwesome6 name={icon} size={24} color={iconColor} />
              </View>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.message}>{message}</Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity 
                  style={styles.cancelButton} 
                  onPress={onCancel}
                  activeOpacity={0.7}
                >
                  <Text style={styles.cancelButtonText}>{cancelText}</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={[styles.confirmButton, { backgroundColor: confirmColor }]} 
                  onPress={onConfirm}
                  activeOpacity={0.7}
                >
                  <Text style={styles.confirmButtonText}>{confirmText}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default ConfirmModal;

