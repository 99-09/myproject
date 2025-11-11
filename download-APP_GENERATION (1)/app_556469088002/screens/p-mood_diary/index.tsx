

import React, { useState, useCallback } from 'react';
import { View, Text, ScrollView, TouchableOpacity, RefreshControl, Alert, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

interface MoodEntry {
  id: string;
  date: string;
  time: string;
  mood: 'happy' | 'calm' | 'anxious' | 'sad' | 'excited';
  moodText: string;
  content: string;
  duration: string;
  tags: string;
}

interface WeeklyStats {
  averageMood: number;
  streakDays: number;
  monthlyStats: {
    recordedDays: number;
    averageMonthlyMood: number;
    longestStreak: number;
  };
}

const MoodDiaryScreen: React.FC = () => {
  const router = useRouter();
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // 模拟数据
  const [weeklyStats] = useState<WeeklyStats>({
    averageMood: 7.2,
    streakDays: 12,
    monthlyStats: {
      recordedDays: 28,
      averageMonthlyMood: 7.5,
      longestStreak: 12,
    },
  });

  const [moodEntries] = useState<MoodEntry[]>([
    {
      id: '1',
      date: '今天',
      time: '14:30',
      mood: 'happy',
      moodText: '开心',
      content: '今天工作很顺利，完成了一个重要项目，感觉很有成就感。和同事们一起庆祝，心情特别好！',
      duration: '5分钟',
      tags: '工作、成就感',
    },
    {
      id: '2',
      date: '昨天',
      time: '21:15',
      mood: 'calm',
      moodText: '平静',
      content: '晚上做了冥想练习，感觉内心很平静。今天的压力得到了很好的释放。',
      duration: '3分钟',
      tags: '冥想、放松',
    },
    {
      id: '3',
      date: '前天',
      time: '18:45',
      mood: 'anxious',
      moodText: '焦虑',
      content: '明天要做一个重要的演讲，有点紧张。不过相信自己可以做好！',
      duration: '4分钟',
      tags: '演讲、紧张',
    },
    {
      id: '4',
      date: '周一',
      time: '22:00',
      mood: 'excited',
      moodText: '兴奋',
      content: '新的一周开始了！制定了本周的目标，感觉充满了动力和激情。',
      duration: '6分钟',
      tags: '新开始、目标',
    },
  ]);

  const handleBackPress = useCallback(() => {
    if (router.canGoBack()) {
      router.back();
    }
  }, [router]);

  const handleAddMoodPress = useCallback(() => {
    router.push('/p-mood_entry');
  }, [router]);

  const handleViewAnalysisPress = useCallback(() => {
    router.push('/p-mood_analysis');
  }, [router]);

  const handleTrendChartPress = useCallback(() => {
    router.push('/p-mood_analysis');
  }, [router]);

  const handleMoodEntryPress = useCallback((entry: MoodEntry) => {
    Alert.alert('情绪记录详情', `查看${entry.date}的情绪记录`);
  }, []);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    try {
      // 模拟刷新数据
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      console.error('刷新失败:', error);
    } finally {
      setIsRefreshing(false);
    }
  }, []);

  const getMoodIcon = (mood: string): string => {
    switch (mood) {
      case 'happy':
        return 'face-smile';
      case 'calm':
        return 'leaf';
      case 'anxious':
        return 'triangle-exclamation';
      case 'sad':
        return 'face-sad';
      case 'excited':
        return 'fire';
      default:
        return 'face-smile';
    }
  };

  const getMoodTagStyle = (mood: string) => {
    switch (mood) {
      case 'happy':
        return styles.moodTagHappy;
      case 'calm':
        return styles.moodTagCalm;
      case 'anxious':
        return styles.moodTagAnxious;
      case 'sad':
        return styles.moodTagSad;
      case 'excited':
        return styles.moodTagExcited;
      default:
        return styles.moodTagHappy;
    }
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating / 2);
    const hasHalfStar = rating % 2 >= 1;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FontAwesome6
          key={`full-${i}`}
          name="star"
          solid
          style={styles.starFilled}
        />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <FontAwesome6
          key="half"
          name="star-half-stroke"
          solid
          style={styles.starFilled}
        />
      );
    }

    const remainingStars = 5 - Math.ceil(rating / 2);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <FontAwesome6
          key={`empty-${i}`}
          name="star"
          style={styles.starEmpty}
        />
      );
    }

    return stars;
  };

  const renderMoodTrend = () => {
    const trendData = [
      { day: '周一', height: 40 },
      { day: '周二', height: 60 },
      { day: '周三', height: 80 },
      { day: '周四', height: 50 },
      { day: '周五', height: 90 },
      { day: '周六', height: 70 },
      { day: '今天', height: 85 },
    ];

    return (
      <View style={styles.trendChartContainer}>
        {trendData.map((item, index) => (
          <View key={index} style={styles.trendBarWrapper}>
            <View
              style={[
                styles.trendBar,
                { height: `${item.height}%` },
              ]}
            />
            <Text style={styles.trendDayLabel}>{item.day}</Text>
          </View>
        ))}
      </View>
    );
  };

  const renderMoodEntry = (entry: MoodEntry) => (
    <TouchableOpacity
      key={entry.id}
      style={styles.moodEntryCard}
      onPress={() => handleMoodEntryPress(entry)}
      activeOpacity={0.7}
    >
      <View style={styles.moodEntryHeader}>
        <View style={styles.moodEntryDateContainer}>
          <Text style={styles.moodEntryDate}>{entry.date}</Text>
          <Text style={styles.moodEntryTime}>{entry.time}</Text>
        </View>
        <View style={[styles.moodTag, getMoodTagStyle(entry.mood)]}>
          <FontAwesome6
            name={getMoodIcon(entry.mood)}
            style={styles.moodTagIcon}
          />
          <Text style={styles.moodTagText}>{entry.moodText}</Text>
        </View>
      </View>
      <Text style={styles.moodEntryContent}>{entry.content}</Text>
      <View style={styles.moodEntryFooter}>
        <View style={styles.moodEntryMeta}>
          <FontAwesome6 name="clock" style={styles.moodEntryMetaIcon} />
          <Text style={styles.moodEntryMetaText}>{entry.duration}</Text>
        </View>
        <View style={styles.moodEntryMeta}>
          <FontAwesome6 name="tag" style={styles.moodEntryMetaIcon} />
          <Text style={styles.moodEntryMetaText}>{entry.tags}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={handleRefresh}
            colors={['#6366f1']}
            tintColor="#6366f1"
          />
        }
      >
        {/* 顶部导航栏 */}
        <LinearGradient
          colors={['#6366f1', '#8b5cf6']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.header}
        >
          <View style={styles.headerTop}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={handleBackPress}
              activeOpacity={0.7}
            >
              <FontAwesome6 name="arrow-left" style={styles.backButtonIcon} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>情绪日记</Text>
            <View style={styles.headerPlaceholder} />
          </View>

          {/* 情绪统计卡片 */}
          <View style={styles.moodStatsCard}>
            <View style={styles.moodStatsContent}>
              <View style={styles.moodStatsLeft}>
                <Text style={styles.moodStatsLabel}>本周平均情绪</Text>
                <View style={styles.moodStatsRatingContainer}>
                  <Text style={styles.moodStatsRating}>{weeklyStats.averageMood}</Text>
                  <View style={styles.starsContainer}>
                    {renderStars(weeklyStats.averageMood)}
                  </View>
                </View>
              </View>
              <View style={styles.moodStatsRight}>
                <Text style={styles.moodStatsLabel}>连续记录</Text>
                <Text style={styles.moodStatsStreak}>{weeklyStats.streakDays}天</Text>
              </View>
            </View>
          </View>
        </LinearGradient>

        {/* 情绪趋势图 */}
        <View style={styles.trendSection}>
          <TouchableOpacity
            style={styles.trendCard}
            onPress={handleTrendChartPress}
            activeOpacity={0.7}
          >
            <View style={styles.trendHeader}>
              <Text style={styles.trendTitle}>情绪趋势</Text>
              <TouchableOpacity
                onPress={handleViewAnalysisPress}
                activeOpacity={0.7}
              >
                <View style={styles.viewAnalysisButton}>
                  <Text style={styles.viewAnalysisText}>查看分析</Text>
                  <FontAwesome6 name="chevron-right" style={styles.viewAnalysisIcon} />
                </View>
              </TouchableOpacity>
            </View>
            {renderMoodTrend()}
          </TouchableOpacity>
        </View>

        {/* 情绪记录列表 */}
        <View style={styles.entriesSection}>
          <Text style={styles.sectionTitle}>情绪记录</Text>
          {moodEntries.map(renderMoodEntry)}
        </View>

        {/* 快速统计 */}
        <View style={styles.quickStatsSection}>
          <View style={styles.quickStatsCard}>
            <Text style={styles.quickStatsTitle}>本月统计</Text>
            <View style={styles.quickStatsGrid}>
              <View style={styles.quickStatsItem}>
                <Text style={styles.quickStatsValue}>{weeklyStats.monthlyStats.recordedDays}</Text>
                <Text style={styles.quickStatsLabel}>记录天数</Text>
              </View>
              <View style={styles.quickStatsItem}>
                <Text style={[styles.quickStatsValue, { color: '#06b6d4' }]}>
                  {weeklyStats.monthlyStats.averageMonthlyMood}
                </Text>
                <Text style={styles.quickStatsLabel}>平均情绪</Text>
              </View>
              <View style={styles.quickStatsItem}>
                <Text style={[styles.quickStatsValue, { color: '#10b981' }]}>
                  {weeklyStats.monthlyStats.longestStreak}
                </Text>
                <Text style={styles.quickStatsLabel}>连续天数</Text>
              </View>
            </View>
          </View>
        </View>

        {/* 底部间距 */}
        <View style={styles.bottomSpacing} />
      </ScrollView>

      {/* 浮动按钮 */}
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={handleAddMoodPress}
        activeOpacity={0.8}
      >
        <LinearGradient
          colors={['#6366f1', '#8b5cf6']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.floatingButtonGradient}
        >
          <FontAwesome6 name="plus" style={styles.floatingButtonIcon} />
        </LinearGradient>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default MoodDiaryScreen;

