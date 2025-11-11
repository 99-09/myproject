

import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import SettingItem from './components/SettingItem';
import ConfirmModal from './components/ConfirmModal';
import SuccessToast from './components/SuccessToast';
import styles from './styles';

const SettingsScreen = () => {
  const router = useRouter();
  const [isCacheModalVisible, setIsCacheModalVisible] = useState(false);
  const [isLogoutModalVisible, setIsLogoutModalVisible] = useState(false);
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [cacheSize, setCacheSize] = useState('128.5 MB');

  const handleBackPress = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };

  const handleNotificationSettings = () => {
    router.push('/p-notification_settings');
  };

  const handlePrivacySettings = () => {
    router.push('/p-privacy_settings');
  };

  const handleClearCache = () => {
    setIsCacheModalVisible(true);
  };

  const handleLogout = () => {
    setIsLogoutModalVisible(true);
  };

  const handleCacheConfirm = () => {
    setIsCacheModalVisible(false);
    showToast('缓存已清除');
    setTimeout(() => {
      setCacheSize('1.2 MB');
    }, 500);
  };

  const handleLogoutConfirm = () => {
    setIsLogoutModalVisible(false);
    showToast('正在退出登录...');
    setTimeout(() => {
      router.replace('/p-login');
    }, 1500);
  };

  const showToast = (message: string) => {
    setToastMessage(message);
    setIsToastVisible(true);
    setTimeout(() => {
      setIsToastVisible(false);
    }, 2000);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* 顶部导航栏 */}
      <LinearGradient
        colors={['#6366f1', '#8b5cf6']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.header}
      >
        <View style={styles.headerContent}>
          <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
            <FontAwesome6 name="arrow-left" size={18} color="#ffffff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>设置</Text>
          <View style={styles.headerPlaceholder} />
        </View>
      </LinearGradient>

      {/* 主要内容区域 */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* 通知设置 */}
        <View style={styles.section}>
          <SettingItem
            icon="bell"
            iconColor="#6366f1"
            iconBackgroundColor="rgba(99, 102, 241, 0.1)"
            title="通知设置"
            subtitle="管理应用通知"
            onPress={handleNotificationSettings}
          />
        </View>

        {/* 隐私设置 */}
        <View style={styles.section}>
          <SettingItem
            icon="shield-halved"
            iconColor="#06b6d4"
            iconBackgroundColor="rgba(6, 182, 212, 0.1)"
            title="隐私设置"
            subtitle="管理个人隐私偏好"
            onPress={handlePrivacySettings}
          />
        </View>

        {/* 清除缓存 */}
        <View style={styles.section}>
          <SettingItem
            icon="broom"
            iconColor="#f59e0b"
            iconBackgroundColor="rgba(245, 158, 11, 0.1)"
            title="清除缓存"
            subtitle={`缓存大小：${cacheSize}`}
            onPress={handleClearCache}
          />
        </View>

        {/* 退出登录 */}
        <View style={styles.section}>
          <SettingItem
            icon="right-from-bracket"
            iconColor="#ef4444"
            iconBackgroundColor="rgba(239, 68, 68, 0.1)"
            title="退出登录"
            subtitle="退出当前账号"
            titleColor="#ef4444"
            onPress={handleLogout}
          />
        </View>
      </ScrollView>

      {/* 清除缓存确认弹窗 */}
      <ConfirmModal
        visible={isCacheModalVisible}
        icon="broom"
        iconColor="#f59e0b"
        iconBackgroundColor="rgba(245, 158, 11, 0.1)"
        title="清除缓存"
        message="确定要清除所有缓存数据吗？这将释放存储空间，但可能会影响应用加载速度。"
        confirmText="清除"
        confirmColor="#f59e0b"
        cancelText="取消"
        onConfirm={handleCacheConfirm}
        onCancel={() => setIsCacheModalVisible(false)}
        onClose={() => setIsCacheModalVisible(false)}
      />

      {/* 退出登录确认弹窗 */}
      <ConfirmModal
        visible={isLogoutModalVisible}
        icon="right-from-bracket"
        iconColor="#ef4444"
        iconBackgroundColor="rgba(239, 68, 68, 0.1)"
        title="退出登录"
        message="确定要退出当前账号吗？退出后需要重新登录才能使用完整功能。"
        confirmText="退出"
        confirmColor="#ef4444"
        cancelText="取消"
        onConfirm={handleLogoutConfirm}
        onCancel={() => setIsLogoutModalVisible(false)}
        onClose={() => setIsLogoutModalVisible(false)}
      />

      {/* 成功提示 */}
      <SuccessToast
        visible={isToastVisible}
        message={toastMessage}
      />
    </SafeAreaView>
  );
};

export default SettingsScreen;

