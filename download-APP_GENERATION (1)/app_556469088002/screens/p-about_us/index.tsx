

import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Linking, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

const AboutUsScreen = () => {
  const router = useRouter();

  const handleBackPress = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };

  const handleUserAgreementPress = async () => {
    try {
      const url = 'https://www.shushu-energy.com/terms';
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert('错误', '无法打开链接');
      }
    } catch (error) {
      Alert.alert('错误', '打开链接时发生错误');
    }
  };

  const handlePrivacyPolicyPress = async () => {
    try {
      const url = 'https://www.shushu-energy.com/privacy';
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert('错误', '无法打开链接');
      }
    } catch (error) {
      Alert.alert('错误', '打开链接时发生错误');
    }
  };

  const handleContactUsPress = async () => {
    try {
      const email = 'feedback@shushu-energy.com';
      const url = `mailto:${email}`;
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert('联系我们', `请发送邮件至: ${email}`);
      }
    } catch (error) {
      Alert.alert('联系我们', `请发送邮件至: feedback@shushu-energy.com`);
    }
  };

  const handleOfficialWebsitePress = async () => {
    try {
      const url = 'https://www.shushu-energy.com';
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert('错误', '无法打开链接');
      }
    } catch (error) {
      Alert.alert('错误', '打开链接时发生错误');
    }
  };

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
        <Text style={styles.headerTitle}>关于我们</Text>
        <View style={styles.headerPlaceholder} />
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          {/* 应用信息卡片 */}
          <View style={styles.appInfoCard}>
            {/* 应用Logo */}
            <LinearGradient
              colors={['#6366f1', '#8b5cf6']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.appLogo}
            >
              <FontAwesome6 name="bolt" size={30} color="#ffffff" />
            </LinearGradient>
            
            {/* 应用名称 */}
            <Text style={styles.appName}>鼠鼠能量补给站</Text>
            
            {/* 版本号 */}
            <Text style={styles.appVersion}>版本 1.0.0</Text>
            
            {/* 应用描述 */}
            <Text style={styles.appDescription}>
              你的专属身心健康伙伴，帮助你有效管理能量，积极应对生活挑战，享受平衡、充实的生活。
            </Text>
          </View>

          {/* 功能列表 */}
          <View style={styles.functionList}>
            {/* 用户协议 */}
            <TouchableOpacity 
              style={[styles.listItem, styles.listItemWithBorder]} 
              onPress={handleUserAgreementPress}
              activeOpacity={0.7}
            >
              <View style={styles.listItemContent}>
                <View style={[styles.listItemIcon, styles.primaryIconBg]}>
                  <FontAwesome6 name="file-contract" size={18} color="#6366f1" />
                </View>
                <View style={styles.listItemText}>
                  <Text style={styles.listItemTitle}>用户协议</Text>
                  <Text style={styles.listItemSubtitle}>查看用户服务协议</Text>
                </View>
              </View>
              <FontAwesome6 name="chevron-right" size={14} color="#64748b" />
            </TouchableOpacity>

            {/* 隐私政策 */}
            <TouchableOpacity 
              style={[styles.listItem, styles.listItemWithBorder]} 
              onPress={handlePrivacyPolicyPress}
              activeOpacity={0.7}
            >
              <View style={styles.listItemContent}>
                <View style={[styles.listItemIcon, styles.tertiaryIconBg]}>
                  <FontAwesome6 name="shield-halved" size={18} color="#06b6d4" />
                </View>
                <View style={styles.listItemText}>
                  <Text style={styles.listItemTitle}>隐私政策</Text>
                  <Text style={styles.listItemSubtitle}>了解我们如何保护你的隐私</Text>
                </View>
              </View>
              <FontAwesome6 name="chevron-right" size={14} color="#64748b" />
            </TouchableOpacity>

            {/* 联系我们 */}
            <TouchableOpacity 
              style={[styles.listItem, styles.listItemWithBorder]} 
              onPress={handleContactUsPress}
              activeOpacity={0.7}
            >
              <View style={styles.listItemContent}>
                <View style={[styles.listItemIcon, styles.successIconBg]}>
                  <FontAwesome6 name="envelope" size={18} color="#10b981" />
                </View>
                <View style={styles.listItemText}>
                  <Text style={styles.listItemTitle}>联系我们</Text>
                  <Text style={styles.listItemSubtitle}>feedback@shushu-energy.com</Text>
                </View>
              </View>
              <FontAwesome6 name="chevron-right" size={14} color="#64748b" />
            </TouchableOpacity>

            {/* 官方网站 */}
            <TouchableOpacity 
              style={styles.listItem} 
              onPress={handleOfficialWebsitePress}
              activeOpacity={0.7}
            >
              <View style={styles.listItemContent}>
                <View style={[styles.listItemIcon, styles.secondaryIconBg]}>
                  <FontAwesome6 name="globe" size={18} color="#8b5cf6" />
                </View>
                <View style={styles.listItemText}>
                  <Text style={styles.listItemTitle}>官方网站</Text>
                  <Text style={styles.listItemSubtitle}>www.shushu-energy.com</Text>
                </View>
              </View>
              <FontAwesome6 name="chevron-right" size={14} color="#64748b" />
            </TouchableOpacity>
          </View>

          {/* 版权信息 */}
          <View style={styles.copyrightInfo}>
            <Text style={styles.copyrightText}>© 2024 鼠鼠能量补给站</Text>
            <Text style={styles.copyrightSubtext}>让每一个心灵都充满能量</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AboutUsScreen;

