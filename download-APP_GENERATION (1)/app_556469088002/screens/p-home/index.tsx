

import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, Alert, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

interface RecommendedContent {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  imageUrl: string;
  category: string;
  iconName: string;
  iconColor: string;
  durationColor: string;
}

const HomeScreen: React.FC = () => {
  const router = useRouter();
  const [currentGreeting, setCurrentGreeting] = useState<string>('晚上好，小雨');

  const recommendedContentList: RecommendedContent[] = [
    {
      id: 'meditation_001',
      title: '深度放松冥想',
      description: '帮助你释放压力，找回内心平静',
      duration: '15分钟',
      level: '初学者',
      imageUrl: 'https://s.coze.cn/image/SORM34KKZKc/',
      category: 'meditation',
      iconName: 'play-circle',
      iconColor: '#6366f1',
      durationColor: '#6366f1',
    },
    {
      id: 'breathing_001',
      title: '4-7-8呼吸法',
      description: '快速缓解焦虑的呼吸技巧',
      duration: '8分钟',
      level: '所有人',
      imageUrl: 'https://s.coze.cn/image/kqrUuym6kq0/',
      category: 'breathing',
      iconName: 'play-circle',
      iconColor: '#06b6d4',
      durationColor: '#06b6d4',
    },
    {
      id: 'mindfulness_001',
      title: '正念行走指南',
      description: '在行走中体验当下的力量',
      duration: '12分钟',
      level: '进阶',
      imageUrl: 'https://s.coze.cn/image/vCZQDkp95nE/',
      category: 'mindfulness',
      iconName: 'book-open',
      iconColor: '#8b5cf6',
      durationColor: '#8b5cf6',
    },
    {
      id: 'whitenoise_001',
      title: '雨声白噪音',
      description: '轻柔的雨声帮助深度睡眠',
      duration: '60分钟',
      level: '助眠',
      imageUrl: 'https://s.coze.cn/image/OZZYOG21dYA/',
      category: 'whitenoise',
      iconName: 'volume-high',
      iconColor: '#10b981',
      durationColor: '#10b981',
    },
  ];

  useEffect(() => {
    updateGreeting();
  }, []);

  const updateGreeting = () => {
    const now = new Date();
    const hour = now.getHours();
    
    if (hour < 6) {
      setCurrentGreeting('深夜好，小雨');
    } else if (hour < 12) {
      setCurrentGreeting('早上好，小雨');
    } else if (hour < 18) {
      setCurrentGreeting('下午好，小雨');
    } else {
      setCurrentGreeting('晚上好，小雨');
    }
  };

  const handleUserAvatarPress = () => {
    router.push('/p-profile');
  };

  const handleNotificationPress = () => {
    Alert.alert('通知', '暂无新通知');
  };

  const handleEnergyFeedPress = () => {
    router.push('/p-energy_feed');
  };

  const handleMoodDiaryPress = () => {
    router.push('/p-mood_diary');
  };

  const handleCommunityPress = () => {
    router.push('/p-community');
  };

  const handleRecommendedContentPress = (content: RecommendedContent) => {
    const routeMap: Record<string, string> = {
      meditation: '/p-meditation_detail',
      breathing: '/p-breathing_detail',
      mindfulness: '/p-mindfulness_detail',
      whitenoise: '/p-white_noise_detail',
    };

    const targetRoute = routeMap[content.category];
    if (targetRoute) {
      router.push(`${targetRoute}?content_id=${content.id}`);
    }
  };

  const renderEnergyDots = () => {
    const dots = [];
    for (let i = 0; i < 5; i++) {
      dots.push(
        <View
          key={i}
          style={[
            styles.energyDot,
            i < 4 ? styles.energyDotActive : styles.energyDotInactive,
          ]}
        />
      );
    }
    return dots;
  };

  const renderRecommendedItem = (item: RecommendedContent) => (
    <TouchableOpacity
      key={item.id}
      style={styles.recommendedItem}
      onPress={() => handleRecommendedContentPress(item)}
      activeOpacity={0.7}
    >
      <Image source={{ uri: item.imageUrl }} style={styles.recommendedImage} />
      <View style={styles.recommendedContent}>
        <Text style={styles.recommendedTitle}>{item.title}</Text>
        <Text style={styles.recommendedDescription}>{item.description}</Text>
        <View style={styles.recommendedTags}>
          <View style={[styles.durationTag, { backgroundColor: `${item.durationColor}1A` }]}>
            <Text style={[styles.durationText, { color: item.durationColor }]}>
              {item.duration}
            </Text>
          </View>
          <Text style={styles.levelText}>• {item.level}</Text>
        </View>
      </View>
      <FontAwesome6
        name={item.iconName as any}
        size={20}
        color={item.iconColor}
      />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* 顶部用户信息区 */}
        <LinearGradient
          colors={['#6366f1', '#8b5cf6']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.headerGradient}
        >
          <View style={styles.userInfoSection}>
            <View style={styles.userInfo}>
              <TouchableOpacity onPress={handleUserAvatarPress}>
                <Image
                  source={{ uri: 'https://s.coze.cn/image/oOuL0VIezT8/' }}
                  style={styles.userAvatar}
                />
              </TouchableOpacity>
              <View style={styles.userTextInfo}>
                <Text style={styles.userGreeting}>{currentGreeting}</Text>
                <Text style={styles.userStatus}>今天也要保持好心情哦 ✨</Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.notificationButton}
              onPress={handleNotificationPress}
            >
              <FontAwesome6 name="bell" size={18} color="#ffffff" />
            </TouchableOpacity>
          </View>

          {/* 今日能量状态 */}
          <View style={styles.energyStatusCard}>
            <View style={styles.energyStatusContent}>
              <View>
                <Text style={styles.energyLabel}>今日能量</Text>
                <Text style={styles.energyValue}>85%</Text>
              </View>
              <View style={styles.energyDots}>
                {renderEnergyDots()}
              </View>
            </View>
          </View>
        </LinearGradient>

        {/* 核心功能区 */}
        <View style={styles.coreFunctionsSection}>
          <View style={styles.coreFunctionsGrid}>
            <TouchableOpacity
              style={styles.coreFunctionCard}
              onPress={handleEnergyFeedPress}
              activeOpacity={0.8}
            >
              <LinearGradient
                colors={['#6366f1', '#8b5cf6']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.coreFunctionGradient}
              >
                <FontAwesome6 name="bolt" size={24} color="#ffffff" />
                <Text style={styles.coreFunctionText}>能量补给</Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.coreFunctionCard}
              onPress={handleMoodDiaryPress}
              activeOpacity={0.8}
            >
              <LinearGradient
                colors={['#06b6d4', '#0891b2']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.coreFunctionGradient}
              >
                <FontAwesome6 name="heart" size={24} color="#ffffff" />
                <Text style={styles.coreFunctionText}>情绪日记</Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.coreFunctionCard}
              onPress={handleCommunityPress}
              activeOpacity={0.8}
            >
              <LinearGradient
                colors={['#10b981', '#059669']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.coreFunctionGradient}
              >
                <FontAwesome6 name="users" size={24} color="#ffffff" />
                <Text style={styles.coreFunctionText}>社区动态</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>

        {/* 推荐内容区 */}
        <View style={styles.recommendedSection}>
          <Text style={styles.sectionTitle}>为你推荐</Text>
          <View style={styles.recommendedList}>
            {recommendedContentList.map(renderRecommendedItem)}
          </View>
        </View>

        {/* 今日练习统计 */}
        <View style={styles.dailyStatsSection}>
          <View style={styles.dailyStatsCard}>
            <Text style={styles.dailyStatsTitle}>今日练习</Text>
            <View style={styles.dailyStatsGrid}>
              <View style={styles.dailyStatItem}>
                <Text style={[styles.dailyStatValue, { color: '#6366f1' }]}>2</Text>
                <Text style={styles.dailyStatLabel}>完成练习</Text>
              </View>
              <View style={styles.dailyStatItem}>
                <Text style={[styles.dailyStatValue, { color: '#06b6d4' }]}>28</Text>
                <Text style={styles.dailyStatLabel}>分钟</Text>
              </View>
              <View style={styles.dailyStatItem}>
                <Text style={[styles.dailyStatValue, { color: '#10b981' }]}>3</Text>
                <Text style={styles.dailyStatLabel}>连续天数</Text>
              </View>
            </View>
          </View>
        </View>

        {/* 底部安全区域 */}
        <View style={styles.bottomSafeArea} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

