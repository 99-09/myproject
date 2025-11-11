

import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import TimeRangeSelector from './components/TimeRangeSelector';
import MoodChart from './components/MoodChart';
import AnalysisReport from './components/AnalysisReport';
import RecommendationCard from './components/RecommendationCard';
import styles from './styles';

type TimeRange = 'week' | 'month' | 'year';

interface MoodData {
  positive: number;
  neutral: number;
  negative: number;
}

interface Recommendation {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  imageUrl: string;
  category: string;
  targetPage: string;
  iconColor: string;
}

const MoodAnalysisScreen: React.FC = () => {
  const router = useRouter();
  const [selectedTimeRange, setSelectedTimeRange] = useState<TimeRange>('week');
  const [isChartLoading, setIsChartLoading] = useState(false);

  const moodData: Record<TimeRange, MoodData> = {
    week: { positive: 5, neutral: 2, negative: 0 },
    month: { positive: 18, neutral: 8, negative: 4 },
    year: { positive: 210, neutral: 100, negative: 55 }
  };

  const recommendations: Recommendation[] = [
    {
      id: 'meditation_002',
      title: '工作压力缓解冥想',
      description: '专为职场人士设计的减压冥想练习',
      duration: '12分钟',
      level: '初学者',
      imageUrl: 'https://s.coze.cn/image/JAoCq7fAMwQ/',
      category: '自然风景',
      targetPage: '/p-meditation_detail',
      iconColor: '#6366f1'
    },
    {
      id: 'breathing_002',
      title: '快速放松呼吸法',
      description: '5分钟快速平复心情的呼吸技巧',
      duration: '5分钟',
      level: '所有人',
      imageUrl: 'https://s.coze.cn/image/zOfWVSr1cKc/',
      category: '自然风景',
      targetPage: '/p-breathing_detail',
      iconColor: '#06b6d4'
    },
    {
      id: 'mindfulness_002',
      title: '工作正念指南',
      description: '在工作中保持专注和内心平静',
      duration: '15分钟',
      level: '进阶',
      imageUrl: 'https://s.coze.cn/image/lD5VkBY3YQY/',
      category: '自然风景',
      targetPage: '/p-mindfulness_detail',
      iconColor: '#8b5cf6'
    }
  ];

  const handleBackPress = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };

  const handleTimeRangeChange = (range: TimeRange) => {
    setSelectedTimeRange(range);
    setIsChartLoading(true);
    
    // 模拟数据加载
    setTimeout(() => {
      setIsChartLoading(false);
    }, 500);
  };

  const handleRecommendationPress = (recommendation: Recommendation) => {
    router.push(`${recommendation.targetPage}?content_id=${recommendation.id}`);
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
          <TouchableOpacity 
            style={styles.backButton}
            onPress={handleBackPress}
            activeOpacity={0.7}
          >
            <FontAwesome6 name="arrow-left" size={18} color="#ffffff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>情绪分析</Text>
          <View style={styles.headerPlaceholder} />
        </View>
      </LinearGradient>

      {/* 主要内容区域 */}
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* 时间范围选择器 */}
        <TimeRangeSelector
          selectedRange={selectedTimeRange}
          onRangeChange={handleTimeRangeChange}
        />

        {/* 情绪趋势图 */}
        <MoodChart
          timeRange={selectedTimeRange}
          moodData={moodData[selectedTimeRange]}
          isLoading={isChartLoading}
        />

        {/* 分析报告区 */}
        <AnalysisReport timeRange={selectedTimeRange} />

        {/* 相关推荐区 */}
        <View style={styles.recommendationsSection}>
          <Text style={styles.sectionTitle}>为你推荐</Text>
          
          {recommendations.map((recommendation) => (
            <RecommendationCard
              key={recommendation.id}
              recommendation={recommendation}
              onPress={() => handleRecommendationPress(recommendation)}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MoodAnalysisScreen;

