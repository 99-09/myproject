

import React, { useState, useCallback } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, Alert, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { FontAwesome5, FontAwesome6 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

interface AssessmentData {
  energyLevel: number | null;
  stressLevel: number | null;
  moodState: number | null;
}

interface RecommendationItem {
  id: string;
  type: 'meditation' | 'breathing' | 'mindfulness' | 'whitenoise';
  title: string;
  description: string;
  duration: string;
  difficulty: string;
  image: string;
  icon: string;
}

interface HistoryItem {
  id: string;
  title: string;
  time: string;
  duration: string;
  image: string;
  status: string;
  contentId: string;
}

const EnergyFeedScreen: React.FC = () => {
  const router = useRouter();
  
  const [assessmentData, setAssessmentData] = useState<AssessmentData>({
    energyLevel: null,
    stressLevel: null,
    moodState: null,
  });
  
  const [isAssessmentLoading, setIsAssessmentLoading] = useState(false);
  const [recommendations, setRecommendations] = useState<RecommendationItem[]>([]);

  const historyData: HistoryItem[] = [
    {
      id: '1',
      title: '深度放松冥想',
      time: '今天 15:30',
      duration: '15分钟',
      image: 'https://s.coze.cn/image/KWdm7kJxWK4/',
      status: '已完成',
      contentId: 'meditation_001',
    },
    {
      id: '2',
      title: '4-7-8呼吸法',
      time: '昨天 20:15',
      duration: '8分钟',
      image: 'https://s.coze.cn/image/GAstKcQNbc8/',
      status: '已完成',
      contentId: 'breathing_001',
    },
    {
      id: '3',
      title: '雨声白噪音',
      time: '昨天 23:00',
      duration: '30分钟',
      image: 'https://s.coze.cn/image/ObY9wLVZ19k/',
      status: '已完成',
      contentId: 'whitenoise_001',
    },
  ];

  const handleBackPress = useCallback(() => {
    if (router.canGoBack()) {
      router.back();
    }
  }, [router]);

  const handleAssessmentOptionPress = useCallback((type: keyof AssessmentData, value: number) => {
    setAssessmentData(prev => ({
      ...prev,
      [type]: value,
    }));
  }, []);

  const isAssessmentComplete = assessmentData.energyLevel !== null && 
                             assessmentData.stressLevel !== null && 
                             assessmentData.moodState !== null;

  const generateRecommendations = useCallback(() => {
    const recommendationData = {
      lowEnergy: [
        {
          id: 'meditation_001',
          type: 'meditation' as const,
          title: '晨间唤醒冥想',
          description: '帮助你快速提升能量，开启美好一天',
          duration: '10分钟',
          difficulty: '初学者',
          image: 'https://s.coze.cn/image/0IeOqIDrZZk/',
          icon: 'sun',
        },
        {
          id: 'breathing_002',
          type: 'breathing' as const,
          title: '活力呼吸法',
          description: '提升氧气摄入，快速恢复活力',
          duration: '5分钟',
          difficulty: '所有人',
          image: 'https://s.coze.cn/image/8RzrBEl4dSA/',
          icon: 'wind',
        },
      ],
      highStress: [
        {
          id: 'meditation_002',
          type: 'meditation' as const,
          title: '压力释放冥想',
          description: '深度放松，释放身心压力',
          duration: '20分钟',
          difficulty: '初学者',
          image: 'https://s.coze.cn/image/XrT1FlCxHIY/',
          icon: 'leaf',
        },
        {
          id: 'whitenoise_001',
          type: 'whitenoise' as const,
          title: '森林白噪音',
          description: '宁静的森林声音，帮助放松心情',
          duration: '60分钟',
          difficulty: '所有人',
          image: 'https://s.coze.cn/image/0jm56aKn2a8/',
          icon: 'tree',
        },
      ],
      lowMood: [
        {
          id: 'mindfulness_001',
          type: 'mindfulness' as const,
          title: '感恩正念练习',
          description: '培养感恩心态，提升积极情绪',
          duration: '15分钟',
          difficulty: '初学者',
          image: 'https://s.coze.cn/image/CvTH8gGz3G0/',
          icon: 'heart',
        },
        {
          id: 'meditation_003',
          type: 'meditation' as const,
          title: '自我关怀冥想',
          description: '学会关爱自己，提升内在力量',
          duration: '12分钟',
          difficulty: '初学者',
          image: 'https://s.coze.cn/image/nRFmi9pCx_E/',
          icon: 'hand-heart',
        },
      ],
      balanced: [
        {
          id: 'meditation_004',
          type: 'meditation' as const,
          title: '专注力冥想',
          description: '提升专注力，保持内心平静',
          duration: '15分钟',
          difficulty: '进阶',
          image: 'https://s.coze.cn/image/tcuk-sNSuHo/',
          icon: 'bullseye',
        },
        {
          id: 'mindfulness_002',
          type: 'mindfulness' as const,
          title: '正念行走指南',
          description: '在行走中体验当下的力量',
          duration: '12分钟',
          difficulty: '进阶',
          image: 'https://s.coze.cn/image/-MFPvu51Xg8/',
          icon: 'walking',
        },
      ],
    };

    let newRecommendations: RecommendationItem[] = [];

    if (assessmentData.energyLevel !== null && assessmentData.energyLevel <= 2) {
      newRecommendations = newRecommendations.concat(recommendationData.lowEnergy);
    } else if (assessmentData.stressLevel !== null && assessmentData.stressLevel >= 4) {
      newRecommendations = newRecommendations.concat(recommendationData.highStress);
    } else if (assessmentData.moodState !== null && assessmentData.moodState <= 2) {
      newRecommendations = newRecommendations.concat(recommendationData.lowMood);
    } else {
      newRecommendations = newRecommendations.concat(recommendationData.balanced);
    }

    setRecommendations(newRecommendations.slice(0, 4));
  }, [assessmentData]);

  const handleCompleteAssessment = useCallback(async () => {
    if (!isAssessmentComplete || isAssessmentLoading) return;

    setIsAssessmentLoading(true);

    try {
      // 模拟API调用延迟
      await new Promise(resolve => setTimeout(resolve, 1500));
      generateRecommendations();
    } catch (error) {
      Alert.alert('错误', '推荐生成失败，请重试');
    } finally {
      setIsAssessmentLoading(false);
    }
  }, [isAssessmentComplete, isAssessmentLoading, generateRecommendations]);

  const handleRecommendationPress = useCallback((item: RecommendationItem) => {
    switch (item.type) {
      case 'meditation':
        router.push(`/p-meditation_detail?content_id=${item.id}`);
        break;
      case 'breathing':
        router.push(`/p-breathing_detail?content_id=${item.id}`);
        break;
      case 'mindfulness':
        router.push(`/p-mindfulness_detail?content_id=${item.id}`);
        break;
      case 'whitenoise':
        router.push(`/p-white_noise_detail?content_id=${item.id}`);
        break;
    }
  }, [router]);

  const handleHistoryItemPress = useCallback((item: HistoryItem) => {
    if (item.id === '1') {
      router.push('/p-meditation_detail?content_id=meditation_001');
    } else if (item.id === '2') {
      router.push('/p-breathing_detail?content_id=breathing_001');
    } else if (item.id === '3') {
      router.push('/p-white_noise_detail?content_id=whitenoise_001');
    }
  }, [router]);

  const renderAssessmentOption = useCallback((
    type: keyof AssessmentData,
    value: number,
    icon: string,
    label: string
  ) => {
    const isSelected = assessmentData[type] === value;
    
    return (
      <TouchableOpacity
        key={`${type}-${value}`}
        style={[
          styles.assessmentOption,
          isSelected && styles.assessmentOptionSelected,
        ]}
        onPress={() => handleAssessmentOptionPress(type, value)}
        activeOpacity={0.7}
      >
        <FontAwesome6
          name={icon}
          style={[
            styles.assessmentOptionIcon,
            isSelected && styles.assessmentOptionIconSelected,
          ]}
        />
        <Text
          style={[
            styles.assessmentOptionText,
            isSelected && styles.assessmentOptionTextSelected,
          ]}
        >
          {label}
        </Text>
      </TouchableOpacity>
    );
  }, [assessmentData, handleAssessmentOptionPress]);

  const renderRecommendationCard = useCallback((item: RecommendationItem) => (
    <TouchableOpacity
      key={item.id}
      style={styles.recommendationCard}
      onPress={() => handleRecommendationPress(item)}
      activeOpacity={0.8}
    >
      <View style={styles.recommendationContent}>
        <Image source={{ uri: item.image }} style={styles.recommendationImage} />
        <View style={styles.recommendationInfo}>
          <Text style={styles.recommendationTitle}>{item.title}</Text>
          <Text style={styles.recommendationDescription}>{item.description}</Text>
          <View style={styles.recommendationMeta}>
            <View style={styles.recommendationDuration}>
              <Text style={styles.recommendationDurationText}>{item.duration}</Text>
            </View>
            <Text style={styles.recommendationDifficulty}>• {item.difficulty}</Text>
          </View>
        </View>
        <FontAwesome5 name="play-circle" style={styles.recommendationPlayIcon} />
      </View>
    </TouchableOpacity>
  ), [handleRecommendationPress]);

  const renderHistoryItem = useCallback((item: HistoryItem) => (
    <TouchableOpacity
      key={item.id}
      style={styles.historyItem}
      onPress={() => handleHistoryItemPress(item)}
      activeOpacity={0.8}
    >
      <View style={styles.historyContent}>
        <Image source={{ uri: item.image }} style={styles.historyImage} />
        <View style={styles.historyInfo}>
          <Text style={styles.historyTitle}>{item.title}</Text>
          <Text style={styles.historyTime}>{item.time} • {item.duration}</Text>
        </View>
      </View>
      <View style={styles.historyRight}>
        <View style={styles.historyStatus}>
          <Text style={styles.historyStatusText}>{item.status}</Text>
        </View>
        <FontAwesome6 name="chevron-right" style={styles.historyChevron} />
      </View>
    </TouchableOpacity>
  ), [handleHistoryItemPress]);

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
            <FontAwesome6 name="arrow-left" style={styles.backIcon} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>能量补给</Text>
          <View style={styles.headerPlaceholder} />
        </View>
      </LinearGradient>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          {/* 能量状态评估区 */}
          <View style={styles.assessmentSection}>
            <View style={styles.assessmentCard}>
              <View style={styles.assessmentTitleContainer}>
                <FontAwesome6 name="heart" style={styles.assessmentTitleIcon} />
                <Text style={styles.assessmentTitle}>今天感觉怎么样？</Text>
              </View>

              {/* 能量水平评估 */}
              <View style={styles.assessmentGroup}>
                <Text style={styles.assessmentGroupTitle}>能量水平</Text>
                <View style={styles.assessmentOptions}>
                  {renderAssessmentOption('energyLevel', 1, 'bed', '很低')}
                  {renderAssessmentOption('energyLevel', 2, 'moon', '较低')}
                  {renderAssessmentOption('energyLevel', 3, 'sun', '一般')}
                  {renderAssessmentOption('energyLevel', 4, 'bolt', '较高')}
                  {renderAssessmentOption('energyLevel', 5, 'fire', '很高')}
                </View>
              </View>

              {/* 压力程度评估 */}
              <View style={styles.assessmentGroup}>
                <Text style={styles.assessmentGroupTitle}>压力程度</Text>
                <View style={styles.assessmentOptions}>
                  {renderAssessmentOption('stressLevel', 1, 'leaf', '很轻松')}
                  {renderAssessmentOption('stressLevel', 2, 'face-smile', '较轻松')}
                  {renderAssessmentOption('stressLevel', 3, 'face-meh', '一般')}
                  {renderAssessmentOption('stressLevel', 4, 'face-frown', '较紧张')}
                  {renderAssessmentOption('stressLevel', 5, 'triangle-exclamation', '很紧张')}
                </View>
              </View>

              {/* 情绪状态评估 */}
              <View style={styles.assessmentGroup}>
                <Text style={styles.assessmentGroupTitle}>情绪状态</Text>
                <View style={styles.assessmentOptions}>
                  {renderAssessmentOption('moodState', 1, 'face-sad-tear', '低落')}
                  {renderAssessmentOption('moodState', 2, 'face-frown', '较差')}
                  {renderAssessmentOption('moodState', 3, 'face-meh', '一般')}
                  {renderAssessmentOption('moodState', 4, 'face-smile', '较好')}
                  {renderAssessmentOption('moodState', 5, 'face-laugh', '很好')}
                </View>
              </View>

              {/* 评估完成按钮 */}
              <TouchableOpacity
                style={[
                  styles.completeAssessmentButton,
                  (!isAssessmentComplete || isAssessmentLoading) && styles.completeAssessmentButtonDisabled,
                ]}
                onPress={handleCompleteAssessment}
                disabled={!isAssessmentComplete || isAssessmentLoading}
                activeOpacity={0.8}
              >
                {isAssessmentLoading ? (
                  <View style={styles.loadingSpinner} />
                ) : (
                  <Text style={styles.completeAssessmentButtonText}>
                    {recommendations.length > 0 ? '重新评估' : '开始推荐'}
                  </Text>
                )}
              </TouchableOpacity>
            </View>
          </View>

          {/* 推荐内容区 */}
          {recommendations.length > 0 && (
            <View style={styles.recommendedSection}>
              <Text style={styles.sectionTitle}>为你推荐</Text>
              <View style={styles.recommendationsContainer}>
                {recommendations.map(renderRecommendationCard)}
              </View>
            </View>
          )}

          {/* 历史记录区 */}
          <View style={styles.historySection}>
            <Text style={styles.sectionTitle}>最近练习</Text>
            <View style={styles.historyContainer}>
              {historyData.map(renderHistoryItem)}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EnergyFeedScreen;

