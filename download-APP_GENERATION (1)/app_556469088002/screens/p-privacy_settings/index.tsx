

import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Switch, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { FontAwesome5, FontAwesome6 } from '@expo/vector-icons';
import styles from './styles';

const PrivacySettingsScreen = () => {
  const router = useRouter();

  // 社交隐私设置状态
  const [isMoodDiaryVisible, setIsMoodDiaryVisible] = useState(true);
  const [isPrivateMessageAllowed, setIsPrivateMessageAllowed] = useState(true);
  const [isOnlineStatusVisible, setIsOnlineStatusVisible] = useState(false);

  // 数据与推荐设置状态
  const [isPersonalizedRecommendationEnabled, setIsPersonalizedRecommendationEnabled] = useState(true);
  const [isDataAnalysisEnabled, setIsDataAnalysisEnabled] = useState(true);

  const handleBackPress = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };

  const handleBlacklistManagementPress = () => {
    Alert.alert('提示', '黑名单管理功能开发中...');
  };

  const handleAuthorizationManagementPress = () => {
    Alert.alert('提示', '授权管理功能开发中...');
  };

  const handleDataExportPress = () => {
    Alert.alert('提示', '数据导出功能开发中...');
  };

  const handlePrivacyPolicyPress = () => {
    Alert.alert('提示', '即将跳转到隐私政策页面...');
  };

  const renderToggleSettingItem = (
    title: string,
    description: string,
    value: boolean,
    onValueChange: (value: boolean) => void,
    showBorder: boolean = true
  ) => (
    <View style={[styles.settingItem, !showBorder && styles.settingItemNoBorder]}>
      <View style={styles.settingItemContent}>
        <Text style={styles.settingItemTitle}>{title}</Text>
        <Text style={styles.settingItemDescription}>{description}</Text>
      </View>
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{ false: '#cbd5e1', true: '#6366f1' }}
        thumbColor="#ffffff"
        ios_backgroundColor="#cbd5e1"
      />
    </View>
  );

  const renderNavigationItem = (
    title: string,
    description: string,
    iconName: string,
    iconColor: string,
    iconBgColor: string,
    onPress: () => void,
    showBorder: boolean = true
  ) => (
    <TouchableOpacity
      style={[styles.navigationItem, !showBorder && styles.navigationItemNoBorder]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.navigationItemContent}>
        <View style={[styles.navigationItemIcon, { backgroundColor: iconBgColor }]}>
          <FontAwesome6 name={iconName} size={14} color={iconColor} />
        </View>
        <View style={styles.navigationItemTextContainer}>
          <Text style={styles.navigationItemTitle}>{title}</Text>
          <Text style={styles.navigationItemDescription}>{description}</Text>
        </View>
      </View>
      <FontAwesome6 name="chevron-right" size={14} color="#64748b" />
    </TouchableOpacity>
  );

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
        <Text style={styles.headerTitle}>隐私设置</Text>
        <View style={styles.headerPlaceholder} />
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          {/* 隐私设置说明 */}
          <View style={styles.privacyIntroCard}>
            <View style={styles.privacyIntroContent}>
              <View style={styles.privacyIntroIcon}>
                <FontAwesome5 name="shield-alt" size={14} color="#6366f1" />
              </View>
              <View style={styles.privacyIntroTextContainer}>
                <Text style={styles.privacyIntroTitle}>隐私保护</Text>
                <Text style={styles.privacyIntroDescription}>
                  我们致力于保护您的隐私安全，您可以根据个人喜好调整以下设置。
                </Text>
              </View>
            </View>
          </View>

          {/* 社交隐私设置 */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>社交隐私</Text>
            <View style={styles.settingsCard}>
              {renderToggleSettingItem(
                '允许他人查看我的情绪日记',
                '开启后，其他用户可以查看您的公开情绪记录',
                isMoodDiaryVisible,
                setIsMoodDiaryVisible
              )}
              {renderToggleSettingItem(
                '允许他人私信我',
                '开启后，其他用户可以向您发送私信',
                isPrivateMessageAllowed,
                setIsPrivateMessageAllowed
              )}
              {renderToggleSettingItem(
                '显示在线状态',
                '开启后，其他用户可以看到您是否在线',
                isOnlineStatusVisible,
                setIsOnlineStatusVisible,
                false
              )}
            </View>
          </View>

          {/* 数据与推荐设置 */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>数据与推荐</Text>
            <View style={styles.settingsCard}>
              {renderToggleSettingItem(
                '个性化推荐',
                '基于您的使用习惯推荐内容',
                isPersonalizedRecommendationEnabled,
                setIsPersonalizedRecommendationEnabled
              )}
              {renderToggleSettingItem(
                '数据统计分析',
                '帮助我们改善产品体验',
                isDataAnalysisEnabled,
                setIsDataAnalysisEnabled,
                false
              )}
            </View>
          </View>

          {/* 管理设置 */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>管理设置</Text>
            <View style={styles.settingsCard}>
              {renderNavigationItem(
                '黑名单管理',
                '管理已屏蔽的用户',
                'ban',
                '#ef4444',
                'rgba(239, 68, 68, 0.1)',
                handleBlacklistManagementPress
              )}
              {renderNavigationItem(
                '授权管理',
                '管理第三方应用授权',
                'key',
                '#f59e0b',
                'rgba(245, 158, 11, 0.1)',
                handleAuthorizationManagementPress
              )}
              {renderNavigationItem(
                '数据导出',
                '导出您的个人数据',
                'download',
                '#3b82f6',
                'rgba(59, 130, 246, 0.1)',
                handleDataExportPress,
                false
              )}
            </View>
          </View>

          {/* 隐私政策说明 */}
          <View style={styles.privacyPolicyCard}>
            <View style={styles.privacyPolicyContent}>
              <View style={styles.privacyPolicyIcon}>
                <FontAwesome5 name="info-circle" size={14} color="#3b82f6" />
              </View>
              <View style={styles.privacyPolicyTextContainer}>
                <Text style={styles.privacyPolicyTitle}>隐私政策</Text>
                <Text style={styles.privacyPolicyDescription}>
                  了解我们如何收集、使用和保护您的个人信息。
                </Text>
                <TouchableOpacity
                  onPress={handlePrivacyPolicyPress}
                  activeOpacity={0.7}
                >
                  <Text style={styles.privacyPolicyLink}>查看完整隐私政策</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PrivacySettingsScreen;

