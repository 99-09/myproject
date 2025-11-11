

import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, Alert, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

interface UserStats {
  favorites: number;
  following: number;
  followers: number;
}

interface UserProfile {
  nickname: string;
  userId: string;
  avatar: string;
  bio: string;
  stats: UserStats;
}

const ProfileScreen: React.FC = () => {
  const router = useRouter();
  
  const [userProfile] = useState<UserProfile>({
    nickname: '小雨',
    userId: '123456789',
    avatar: 'https://s.coze.cn/image/Fm7hmZHRuZc/',
    bio: '每天进步一点点，保持内心的平静与力量 ✨',
    stats: {
      favorites: 12,
      following: 45,
      followers: 89,
    },
  });

  const handleSettingsPress = () => {
    router.push('/p-settings');
  };

  const handleUserProfilePress = () => {
    router.push('/p-profile_edit');
  };

  const handleProfileEditPress = () => {
    router.push('/p-profile_edit');
  };

  const handleFavoritesPress = () => {
    Alert.alert('提示', '收藏功能开发中...');
  };

  const handleFollowingPress = () => {
    Alert.alert('提示', '关注功能开发中...');
  };

  const handleFollowersPress = () => {
    Alert.alert('提示', '粉丝功能开发中...');
  };

  const handleSettingsMenuPress = () => {
    router.push('/p-settings');
  };

  const handleFeedbackPress = () => {
    router.push('/p-feedback');
  };

  const handleAboutUsPress = () => {
    router.push('/p-about_us');
  };

  const renderUserStats = () => {
    const { stats } = userProfile;
    
    return (
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{stats.favorites}</Text>
          <Text style={styles.statLabel}>收藏</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={[styles.statNumber, { color: '#06b6d4' }]}>{stats.following}</Text>
          <Text style={styles.statLabel}>关注</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={[styles.statNumber, { color: '#10b981' }]}>{stats.followers}</Text>
          <Text style={styles.statLabel}>粉丝</Text>
        </View>
      </View>
    );
  };

  const renderMenuItem = (
    icon: string,
    iconColor: string,
    iconBgColor: string,
    title: string,
    onPress: () => void,
    showBadge?: boolean,
    badgeText?: string
  ) => (
    <TouchableOpacity style={styles.menuItem} onPress={onPress} activeOpacity={0.7}>
      <View style={styles.menuItemLeft}>
        <View style={[styles.menuIconContainer, { backgroundColor: iconBgColor }]}>
          <FontAwesome6 name={icon} size={16} color={iconColor} />
        </View>
        <Text style={styles.menuItemTitle}>{title}</Text>
      </View>
      <View style={styles.menuItemRight}>
        {showBadge && badgeText && (
          <Text style={styles.menuBadge}>{badgeText}</Text>
        )}
        <FontAwesome6 name="chevron-right" size={14} color="#64748b" />
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* 顶部标题栏 */}
        <LinearGradient
          colors={['#6366f1', '#8b5cf6']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.header}
        >
          <View style={styles.headerContent}>
            <Text style={styles.headerTitle}>我的</Text>
            <TouchableOpacity style={styles.settingsButton} onPress={handleSettingsPress}>
              <FontAwesome6 name="gear" size={18} color="#ffffff" />
            </TouchableOpacity>
          </View>
        </LinearGradient>

        {/* 用户信息卡片 */}
        <View style={styles.userProfileSection}>
          <TouchableOpacity 
            style={styles.userProfileCard} 
            onPress={handleUserProfilePress}
            activeOpacity={0.95}
          >
            <View style={styles.userInfoContainer}>
              <Image source={{ uri: userProfile.avatar }} style={styles.userAvatar} />
              <View style={styles.userDetails}>
                <Text style={styles.userNickname}>{userProfile.nickname}</Text>
                <Text style={styles.userId}>ID: {userProfile.userId}</Text>
                {renderUserStats()}
              </View>
              <FontAwesome6 name="chevron-right" size={14} color="#64748b" />
            </View>
            
            {/* 个人签名 */}
            <View style={styles.userBioContainer}>
              <Text style={styles.userBio}>{userProfile.bio}</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* 功能菜单 */}
        <View style={styles.menuSection}>
          {/* 个人管理 */}
          <View style={styles.menuGroup}>
            <View style={styles.menuGroupHeader}>
              <Text style={styles.menuGroupTitle}>个人管理</Text>
            </View>
            
            {renderMenuItem(
              'user-pen',
              '#6366f1',
              'rgba(99, 102, 241, 0.1)',
              '个人资料',
              handleProfileEditPress
            )}
            
            {renderMenuItem(
              'star',
              '#f59e0b',
              'rgba(245, 158, 11, 0.1)',
              '我的收藏',
              handleFavoritesPress,
              true,
              userProfile.stats.favorites.toString()
            )}
            
            {renderMenuItem(
              'heart',
              '#06b6d4',
              'rgba(6, 182, 212, 0.1)',
              '我的关注',
              handleFollowingPress,
              true,
              userProfile.stats.following.toString()
            )}
            
            {renderMenuItem(
              'users',
              '#10b981',
              'rgba(16, 185, 129, 0.1)',
              '我的粉丝',
              handleFollowersPress,
              true,
              userProfile.stats.followers.toString()
            )}
          </View>

          {/* 应用设置 */}
          <View style={styles.menuGroup}>
            <View style={styles.menuGroupHeader}>
              <Text style={styles.menuGroupTitle}>应用设置</Text>
            </View>
            
            {renderMenuItem(
              'gear',
              '#3b82f6',
              'rgba(59, 130, 246, 0.1)',
              '设置',
              handleSettingsMenuPress
            )}
            
            {renderMenuItem(
              'comment-dots',
              '#8b5cf6',
              'rgba(139, 92, 246, 0.1)',
              '意见反馈',
              handleFeedbackPress
            )}
            
            {renderMenuItem(
              'circle-info',
              '#6366f1',
              'rgba(99, 102, 241, 0.1)',
              '关于我们',
              handleAboutUsPress
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

