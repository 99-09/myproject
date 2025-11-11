

import React, { useState, useEffect, useRef } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, Alert, Dimensions, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

interface MeditationData {
  title: string;
  description: string;
  duration: number;
  level: string;
  type: string;
  instructor: string;
  instructorTitle: string;
  bgImage: string;
}

interface RecommendationItem {
  id: string;
  title: string;
  description: string;
  duration: number;
  level: string;
  image: string;
}

const MeditationDetailScreen: React.FC = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  
  // 播放状态管理
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState(1.0);
  const [isMuted, setIsMuted] = useState(false);
  const [isSpeedMenuVisible, setIsSpeedMenuVisible] = useState(false);
  
  const playIntervalRef = useRef<number | null>(null);
  
  // 模拟冥想课程数据
  const meditationData: Record<string, MeditationData> = {
    'meditation_001': {
      title: '深度放松冥想',
      description: '这是一个帮助你深度放松的冥想练习，通过引导式呼吸和正念观察，让你释放身心压力，找回内心的平静与安宁。适合初学者和有经验的冥想者。',
      duration: 15,
      level: '初学者',
      type: '引导冥想',
      instructor: '李静怡',
      instructorTitle: '资深冥想导师 · 10年经验',
      bgImage: 'https://s.coze.cn/image/yBRBNGzsF_M/'
    },
    'meditation_002': {
      title: '正念呼吸冥想',
      description: '专注于呼吸的正念练习，帮助你培养内在觉察力，活在当下这一刻。',
      duration: 10,
      level: '初学者',
      type: '正念冥想',
      instructor: '张明轩',
      instructorTitle: '正念导师 · 8年经验',
      bgImage: 'https://s.coze.cn/image/vfItErHNbDs/'
    },
    'meditation_003': {
      title: '睡前放松冥想',
      description: '温和的睡前冥想引导，帮助你放松身心，进入深度睡眠状态。',
      duration: 20,
      level: '所有人',
      type: '睡前冥想',
      instructor: '王雅琳',
      instructorTitle: '睡眠专家 · 12年经验',
      bgImage: 'https://s.coze.cn/image/Z-A2tPEkoHg/'
    }
  };

  const contentId = (params.content_id as string) || 'meditation_001';
  const currentCourse = meditationData[contentId] || meditationData['meditation_001'];
  const totalTime = currentCourse.duration * 60;

  // 相关推荐数据
  const recommendations: RecommendationItem[] = [
    {
      id: 'meditation_002',
      title: '正念呼吸冥想',
      description: '专注于呼吸，培养内在觉察力',
      duration: 10,
      level: '初学者',
      image: 'https://s.coze.cn/image/ByMcYKfqeZc/'
    },
    {
      id: 'meditation_003',
      title: '睡前放松冥想',
      description: '温和的引导帮助你进入深度睡眠',
      duration: 20,
      level: '所有人',
      image: 'https://s.coze.cn/image/4AndmfhQM7o/'
    },
    {
      id: 'meditation_004',
      title: '压力释放冥想',
      description: '系统性地释放身心压力',
      duration: 12,
      level: '进阶',
      image: 'https://s.coze.cn/image/oC_WyVyJZ8Y/'
    }
  ];

  // 格式化时间显示
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // 播放/暂停切换
  const handleTogglePlayPause = () => {
    if (isPlaying) {
      // 暂停播放
      setIsPlaying(false);
      if (playIntervalRef.current) {
        clearInterval(playIntervalRef.current);
        playIntervalRef.current = null;
      }
    } else {
      // 开始播放
      setIsPlaying(true);
      playIntervalRef.current = setInterval(() => {
        setCurrentTime(prevTime => {
          const newTime = prevTime + playbackSpeed;
          if (newTime >= totalTime) {
            // 播放完成
            handleStopPlayback();
            handleShowCompletionMessage();
            return totalTime;
          }
          return newTime;
        });
      }, 1000);
    }
  };

  // 停止播放
  const handleStopPlayback = () => {
    setIsPlaying(false);
    setCurrentTime(0);
    if (playIntervalRef.current) {
      clearInterval(playIntervalRef.current);
      playIntervalRef.current = null;
    }
  };

  // 显示完成消息
  const handleShowCompletionMessage = () => {
    Alert.alert('恭喜！', '您已完成本次冥想练习。继续保持，您正在培养健康的生活习惯。');
  };

  // 返回按钮处理
  const handleBackPress = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };

  // 分享按钮处理
  const handleSharePress = () => {
    Alert.alert('分享', '分享功能');
  };

  // 进度条点击处理
  const handleProgressPress = (event: any) => {
    const { locationX } = event.nativeEvent;
    const screenWidth = Dimensions.get('window').width;
    const progressWidth = screenWidth - 48; // 减去左右padding
    const progress = locationX / progressWidth;
    const newTime = Math.floor(progress * totalTime);
    setCurrentTime(newTime);
  };

  // 音量切换
  const handleToggleMute = () => {
    setIsMuted(!isMuted);
  };

  // 倍速选择
  const handleSpeedSelect = (speed: number) => {
    setPlaybackSpeed(speed);
    setIsSpeedMenuVisible(false);
  };

  // 相关推荐点击
  const handleRecommendationPress = (recommendationId: string) => {
    router.push(`/p-meditation_detail?content_id=${recommendationId}`);
  };

  // 清理定时器
  useEffect(() => {
    return () => {
      if (playIntervalRef.current) {
        clearInterval(playIntervalRef.current);
      }
    };
  }, []);

  const progressPercentage = (currentTime / totalTime) * 100;

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
          <TouchableOpacity style={styles.headerButton} onPress={handleBackPress}>
            <FontAwesome6 name="arrow-left" size={18} color="#ffffff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>冥想练习</Text>
          <TouchableOpacity style={styles.headerButton} onPress={handleSharePress}>
            <FontAwesome6 name="share-nodes" size={18} color="#ffffff" />
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* 视频播放器区域 */}
        <View style={styles.videoSection}>
          <View style={styles.videoContainer}>
            <Image source={{ uri: currentCourse.bgImage }} style={styles.videoBackground} />
            
            {/* 播放按钮 */}
            {!isPlaying && (
              <View style={styles.playButtonContainer}>
                <TouchableOpacity style={styles.playButtonLarge} onPress={handleTogglePlayPause}>
                  <FontAwesome6 name="play" size={24} color="#6366f1" style={styles.playIconLarge} />
                </TouchableOpacity>
              </View>
            )}
            
            {/* 播放进度条 */}
            <View style={styles.progressContainer}>
              <TouchableOpacity style={styles.progressBar} onPress={handleProgressPress}>
                <View style={styles.progressTrack}>
                  <View style={[styles.progressFill, { width: `${progressPercentage}%` }]} />
                </View>
              </TouchableOpacity>
              
              {/* 时间显示 */}
              <View style={styles.timeDisplay}>
                <Text style={styles.timeText}>{formatTime(currentTime)}</Text>
                <Text style={styles.timeText}>{formatTime(totalTime)}</Text>
              </View>
            </View>
          </View>
        </View>

        {/* 课程信息区 */}
        <View style={styles.courseInfoSection}>
          <View style={styles.contentCard}>
            <Text style={styles.courseTitle}>{currentCourse.title}</Text>
            <Text style={styles.courseDescription}>{currentCourse.description}</Text>
            
            {/* 课程信息标签 */}
            <View style={styles.courseMeta}>
              <View style={styles.metaTag}>
                <FontAwesome6 name="clock" size={12} color="#6366f1" />
                <Text style={styles.metaTagText}>{currentCourse.duration}分钟</Text>
              </View>
              <View style={[styles.metaTag, styles.metaTagSecondary]}>
                <FontAwesome6 name="user-graduate" size={12} color="#8b5cf6" />
                <Text style={[styles.metaTagText, styles.metaTagTextSecondary]}>{currentCourse.level}</Text>
              </View>
              <View style={[styles.metaTag, styles.metaTagTertiary]}>
                <FontAwesome6 name="headphones" size={12} color="#06b6d4" />
                <Text style={[styles.metaTagText, styles.metaTagTextTertiary]}>{currentCourse.type}</Text>
              </View>
            </View>
            
            {/* 讲师信息 */}
            <View style={styles.instructorInfo}>
              <Image 
                source={{ uri: 'https://s.coze.cn/image/dw6auuwceNY/' }} 
                style={styles.instructorAvatar} 
              />
              <View style={styles.instructorDetails}>
                <Text style={styles.instructorName}>{currentCourse.instructor}</Text>
                <Text style={styles.instructorTitle}>{currentCourse.instructorTitle}</Text>
              </View>
            </View>
          </View>
        </View>

        {/* 播放控制区 */}
        <View style={styles.controlsSection}>
          <View style={styles.contentCard}>
            <Text style={styles.sectionTitle}>播放控制</Text>
            
            {/* 主要控制按钮 */}
            <View style={styles.mainControls}>
              <TouchableOpacity style={styles.controlButton} onPress={() => setCurrentTime(Math.max(0, currentTime - 10))}>
                <FontAwesome6 name="backward-step" size={16} color="#ffffff" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.playPauseButton} onPress={handleTogglePlayPause}>
                <FontAwesome6 
                  name={isPlaying ? "pause" : "play"} 
                  size={20} 
                  color="#ffffff" 
                  style={isPlaying ? undefined : styles.playIconSmall}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.controlButton} onPress={() => setCurrentTime(Math.min(totalTime, currentTime + 10))}>
                <FontAwesome6 name="forward-step" size={16} color="#ffffff" />
              </TouchableOpacity>
            </View>
            
            {/* 音量和倍速控制 */}
            <View style={styles.secondaryControls}>
              <View style={styles.volumeControl}>
                <TouchableOpacity style={styles.volumeButton} onPress={handleToggleMute}>
                  <FontAwesome6 
                    name={isMuted ? "volume-xmark" : "volume-high"} 
                    size={16} 
                    color="#ffffff" 
                  />
                </TouchableOpacity>
                <View style={styles.volumeSlider}>
                  <View style={styles.volumeSliderFill} />
                </View>
              </View>
              
              <View style={styles.speedControl}>
                <TouchableOpacity 
                  style={styles.speedButton} 
                  onPress={() => setIsSpeedMenuVisible(!isSpeedMenuVisible)}
                >
                  <Text style={styles.speedText}>{playbackSpeed}x</Text>
                  <FontAwesome6 name="chevron-down" size={12} color="#ffffff" />
                </TouchableOpacity>
                
                {/* 倍速选择菜单 */}
                {isSpeedMenuVisible && (
                  <View style={styles.speedMenu}>
                    {[0.5, 0.75, 1.0, 1.25, 1.5, 2.0].map((speed) => (
                      <TouchableOpacity
                        key={speed}
                        style={[
                          styles.speedOption,
                          playbackSpeed === speed && styles.speedOptionActive
                        ]}
                        onPress={() => handleSpeedSelect(speed)}
                      >
                        <Text style={styles.speedOptionText}>{speed}x</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                )}
              </View>
            </View>
          </View>
        </View>

        {/* 相关推荐区 */}
        <View style={styles.recommendationsSection}>
          <Text style={styles.sectionTitle}>相关推荐</Text>
          
          {recommendations.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.recommendationCard}
              onPress={() => handleRecommendationPress(item.id)}
            >
              <Image source={{ uri: item.image }} style={styles.recommendationImage} />
              <View style={styles.recommendationContent}>
                <Text style={styles.recommendationTitle}>{item.title}</Text>
                <Text style={styles.recommendationDescription}>{item.description}</Text>
                <View style={styles.recommendationMeta}>
                  <View style={styles.recommendationDurationTag}>
                    <Text style={styles.recommendationDurationText}>{item.duration}分钟</Text>
                  </View>
                  <Text style={styles.recommendationLevel}>• {item.level}</Text>
                </View>
              </View>
              <FontAwesome6 name="circle-play" size={20} color="#6366f1" />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MeditationDetailScreen;

