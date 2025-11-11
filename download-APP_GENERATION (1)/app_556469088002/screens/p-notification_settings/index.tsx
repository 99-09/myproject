

import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { FontAwesome5, FontAwesome6 } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';
import NotificationSettingItem from './components/NotificationSettingItem';

interface NotificationSettings {
  energyReminder: boolean;
  communityInteraction: boolean;
  systemMessage: boolean;
  moodRecordReminder: boolean;
  todoReminder: boolean;
  personalizedRecommendation: boolean;
}

const NotificationSettingsScreen = () => {
  const router = useRouter();
  const [notificationSettings, setNotificationSettings] = useState<NotificationSettings>({
    energyReminder: true,
    communityInteraction: true,
    systemMessage: true,
    moodRecordReminder: false,
    todoReminder: true,
    personalizedRecommendation: true,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadNotificationSettings();
  }, []);

  const loadNotificationSettings = async () => {
    try {
      setIsLoading(true);
      const savedSettings = await AsyncStorage.getItem('@notification_settings');
      if (savedSettings) {
        const parsedSettings = JSON.parse(savedSettings);
        setNotificationSettings(parsedSettings);
      }
    } catch (error) {
      console.error('Failed to load notification settings:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const saveNotificationSettings = async (newSettings: NotificationSettings) => {
    try {
      await AsyncStorage.setItem('@notification_settings', JSON.stringify(newSettings));
    } catch (error) {
      console.error('Failed to save notification settings:', error);
      Alert.alert('错误', '保存设置失败，请重试');
    }
  };

  const handleBackPress = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };

  const handleNotificationSettingChange = (settingKey: keyof NotificationSettings, value: boolean) => {
    const newSettings = {
      ...notificationSettings,
      [settingKey]: value,
    };
    setNotificationSettings(newSettings);
    saveNotificationSettings(newSettings);
  };

  const notificationSettingsData = [
    {
      key: 'energyReminder' as keyof NotificationSettings,
      title: '能量提醒',
      description: '定时提醒您进行能量补给和练习',
      value: notificationSettings.energyReminder,
    },
    {
      key: 'communityInteraction' as keyof NotificationSettings,
      title: '社区互动通知',
      description: '当有人点赞、评论或关注您时通知',
      value: notificationSettings.communityInteraction,
    },
    {
      key: 'systemMessage' as keyof NotificationSettings,
      title: '系统消息',
      description: '应用更新、功能介绍等重要消息',
      value: notificationSettings.systemMessage,
    },
    {
      key: 'moodRecordReminder' as keyof NotificationSettings,
      title: '情绪记录提醒',
      description: '提醒您记录每日情绪状态',
      value: notificationSettings.moodRecordReminder,
    },
    {
      key: 'todoReminder' as keyof NotificationSettings,
      title: '待办事项提醒',
      description: '提醒您完成重要的待办事项',
      value: notificationSettings.todoReminder,
    },
    {
      key: 'personalizedRecommendation' as keyof NotificationSettings,
      title: '个性化推荐',
      description: '基于您的喜好推荐相关内容',
      value: notificationSettings.personalizedRecommendation,
    },
  ];

  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>加载中...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* 顶部导航栏 */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={handleBackPress}
          activeOpacity={0.7}
        >
          <FontAwesome6 name="arrow-left" size={18} color="#1e293b" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>通知设置</Text>
        <View style={styles.headerPlaceholder} />
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* 通知设置说明 */}
        <View style={styles.notificationDescription}>
          <View style={styles.descriptionContent}>
            <FontAwesome5 name="info-circle" size={18} color="#6366f1" style={styles.descriptionIcon} />
            <View style={styles.descriptionTextContainer}>
              <Text style={styles.descriptionTitle}>关于通知</Text>
              <Text style={styles.descriptionText}>
                您可以根据个人喜好开启或关闭各类通知，我们会在合适的时间为您推送有价值的内容。
              </Text>
            </View>
          </View>
        </View>

        {/* 通知设置列表 */}
        <View style={styles.notificationSettingsList}>
          {notificationSettingsData.map((setting) => (
            <NotificationSettingItem
              key={setting.key}
              title={setting.title}
              description={setting.description}
              value={setting.value}
              onValueChange={(value) => handleNotificationSettingChange(setting.key, value)}
            />
          ))}
        </View>

        {/* 底部说明 */}
        <View style={styles.bottomNotice}>
          <View style={styles.bottomNoticeContent}>
            <FontAwesome5 name="shield-alt" size={18} color="#3b82f6" style={styles.bottomNoticeIcon} />
            <View style={styles.bottomNoticeTextContainer}>
              <Text style={styles.bottomNoticeTitle}>隐私保护</Text>
              <Text style={styles.bottomNoticeText}>
                我们严格保护您的隐私，所有通知设置仅影响您接收信息的方式，不会泄露您的个人数据。
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NotificationSettingsScreen;

