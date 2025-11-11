

import React, { useState, useRef, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, Alert, Dimensions, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { FontAwesome5, FontAwesome6 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

const { width: screenWidth } = Dimensions.get('window');

interface MindfulnessContent {
  title: string;
  author: string;
  publishDate: string;
  readTime: string;
  image: string;
  audioUrl: string;
  audioDuration: number;
}

interface RelatedItem {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: string;
  level: string;
}

const MindfulnessDetailScreen: React.FC = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  
  // 音频播放状态
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [currentAudioTime, setCurrentAudioTime] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showFloatingPlayer, setShowFloatingPlayer] = useState(false);
  
  const audioIntervalRef = useRef<number | null>(null);
  const scrollYRef = useRef(0);

  // 正念指导内容数据
  const mindfulnessContentData: Record<string, MindfulnessContent> = {
    'mindfulness_001': {
      title: '正念行走指南',
      author: '正念导师 李明',
      publishDate: '2024年1月15日',
      readTime: '12分钟阅读',
      image: 'https://s.coze.cn/image/r61M-KYEVD4/',
      audioUrl: 'mindfulness_walking_audio.mp3',
      audioDuration: 750 // 12:30 in seconds
    },
    'mindfulness_002': {
      title: '正念饮食指南',
      author: '正念导师 王静',
      publishDate: '2024年1月12日',
      readTime: '15分钟阅读',
      image: 'https://s.coze.cn/image/wfBLSQ3YB5k/',
      audioUrl: 'mindfulness_eating_audio.mp3',
      audioDuration: 900 // 15:00 in seconds
    },
    'mindfulness_003': {
      title: '正念工作法',
      author: '正念导师 张强',
      publishDate: '2024年1月10日',
      readTime: '20分钟阅读',
      image: 'https://s.coze.cn/image/7KviRRVKL68/',
      audioUrl: 'mindfulness_work_audio.mp3',
      audioDuration: 1200 // 20:00 in seconds
    },
    'mindfulness_004': {
      title: '正念睡眠指南',
      author: '正念导师 刘芳',
      publishDate: '2024年1月8日',
      readTime: '18分钟阅读',
      image: 'https://s.coze.cn/image/tom5PcLyF6c/',
      audioUrl: 'mindfulness_sleep_audio.mp3',
      audioDuration: 1080 // 18:00 in seconds
    }
  };

  // 相关推荐数据
  const relatedContentData: RelatedItem[] = [
    {
      id: 'mindfulness_002',
      title: '正念饮食指南',
      description: '学会用心感受每一口食物的美味',
      image: 'https://s.coze.cn/image/F8zp21bm5sU/',
      duration: '15分钟',
      level: '初学者'
    },
    {
      id: 'mindfulness_003',
      title: '正念工作法',
      description: '提升工作效率的正念技巧',
      image: 'https://s.coze.cn/image/Mg5nb8PJ400/',
      duration: '20分钟',
      level: '进阶'
    },
    {
      id: 'mindfulness_004',
      title: '正念睡眠指南',
      description: '通过正念练习改善睡眠质量',
      image: 'https://s.coze.cn/image/ppY7jGLbpVw/',
      duration: '18分钟',
      level: '所有人'
    }
  ];

  const contentId = (params.content_id as string) || 'mindfulness_001';
  const currentContent = mindfulnessContentData[contentId] || mindfulnessContentData['mindfulness_001'];

  // 格式化时间显示
  const formatAudioTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  // 计算进度百分比
  const getAudioProgress = (): number => {
    return (currentAudioTime / currentContent.audioDuration) * 100;
  };

  // 开始音频播放
  const handleStartAudio = () => {
    setIsAudioPlaying(true);
    audioIntervalRef.current = setInterval(() => {
      setCurrentAudioTime(prev => {
        const newTime = prev + 1;
        if (newTime >= currentContent.audioDuration) {
          handleStopAudio();
          return 0;
        }
        return newTime;
      });
    }, 1000);
  };

  // 停止音频播放
  const handleStopAudio = () => {
    setIsAudioPlaying(false);
    if (audioIntervalRef.current) {
      clearInterval(audioIntervalRef.current);
      audioIntervalRef.current = null;
    }
  };

  // 播放/暂停切换
  const handleToggleAudioPlayback = () => {
    if (isAudioPlaying) {
      handleStopAudio();
    } else {
      handleStartAudio();
    }
  };

  // 音量切换
  const handleToggleMute = () => {
    setIsMuted(!isMuted);
  };

  // 返回按钮处理
  const handleBackPress = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };

  // 收藏按钮处理
  const handleBookmarkPress = () => {
    setIsBookmarked(!isBookmarked);
    Alert.alert('提示', isBookmarked ? '已取消收藏' : '已添加到收藏');
  };

  // 相关推荐点击处理
  const handleRelatedItemPress = (targetContentId: string) => {
    router.push(`/p-mindfulness_detail?content_id=${targetContentId}`);
  };

  // 关闭浮动播放器
  const handleCloseFloatingPlayer = () => {
    setShowFloatingPlayer(false);
  };

  // 滚动处理
  const handleScroll = (event: any) => {
    const scrollY = event.nativeEvent.contentOffset.y;
    const scrollDirection = scrollY > scrollYRef.current ? 'down' : 'up';
    
    if (scrollY > 300 && scrollDirection === 'down') {
      setShowFloatingPlayer(true);
    } else if (scrollY < scrollYRef.current - 100 && scrollDirection === 'up') {
      setShowFloatingPlayer(false);
    }
    
    scrollYRef.current = scrollY;
  };

  // 清理定时器
  useEffect(() => {
    return () => {
      if (audioIntervalRef.current) {
        clearInterval(audioIntervalRef.current);
      }
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* 顶部导航栏 */}
      <LinearGradient
        colors={['#6366f1', '#8b5cf6']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.headerGradient}
      >
        <View style={styles.headerContainer}>
          <TouchableOpacity
            style={styles.headerButton}
            onPress={handleBackPress}
            activeOpacity={0.7}
          >
            <FontAwesome6 name="arrow-left" size={18} color="#ffffff" />
          </TouchableOpacity>
          
          <Text style={styles.headerTitle}>正念指导</Text>
          
          <TouchableOpacity
            style={styles.headerButton}
            onPress={handleBookmarkPress}
            activeOpacity={0.7}
          >
            <FontAwesome6 
              name="bookmark" 
              size={18} 
              color="#ffffff" 
              solid={isBookmarked}
            />
          </TouchableOpacity>
        </View>
      </LinearGradient>

      {/* 主要内容区域 */}
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollContent}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
      >
        {/* 正念指导内容卡片 */}
        <View style={styles.contentCard}>
          {/* 主图 */}
          <Image
            source={{ uri: currentContent.image }}
            style={styles.contentImage}
            resizeMode="cover"
          />
          
          {/* 内容信息 */}
          <View style={styles.contentInfo}>
            <Text style={styles.contentTitle}>{currentContent.title}</Text>
            
            <View style={styles.metaInfo}>
              <View style={styles.metaItem}>
                <FontAwesome5 name="user-circle" size={12} color="#64748b" />
                <Text style={styles.metaText}>{currentContent.author}</Text>
              </View>
              
              <View style={styles.metaItem}>
                <FontAwesome6 name="calendar" size={12} color="#64748b" />
                <Text style={styles.metaText}>{currentContent.publishDate}</Text>
              </View>
              
              <View style={styles.metaItem}>
                <FontAwesome6 name="clock" size={12} color="#64748b" />
                <Text style={styles.metaText}>{currentContent.readTime}</Text>
              </View>
            </View>
            
            {/* 内容标签 */}
            <View style={styles.tagsContainer}>
              <View style={styles.tagSecondary}>
                <Text style={styles.tagSecondaryText}>正念练习</Text>
              </View>
              <View style={styles.tagTertiary}>
                <Text style={styles.tagTertiaryText}>行走冥想</Text>
              </View>
              <View style={styles.tagSuccess}>
                <Text style={styles.tagSuccessText}>身心健康</Text>
              </View>
            </View>
          </View>
          
          {/* 引导音频播放器 */}
          <LinearGradient
            colors={['#8b5cf6', '#6366f1']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.audioPlayerGradient}
          >
            <View style={styles.audioPlayerContainer}>
              <TouchableOpacity
                style={styles.playButton}
                onPress={handleToggleAudioPlayback}
                activeOpacity={0.7}
              >
                <FontAwesome6 
                  name={isAudioPlaying ? "pause" : "play"} 
                  size={18} 
                  color="#ffffff" 
                />
              </TouchableOpacity>
              
              <View style={styles.audioProgressContainer}>
                <View style={styles.audioTimeContainer}>
                  <Text style={styles.audioTime}>{formatAudioTime(currentAudioTime)}</Text>
                  <Text style={styles.audioTime}>{formatAudioTime(currentContent.audioDuration)}</Text>
                </View>
                <View style={styles.progressBar}>
                  <View 
                    style={[
                      styles.progressFill, 
                      { width: `${getAudioProgress()}%` }
                    ]} 
                  />
                </View>
              </View>
              
              <TouchableOpacity
                style={styles.volumeButton}
                onPress={handleToggleMute}
                activeOpacity={0.7}
              >
                <FontAwesome6 
                  name={isMuted ? "volume-mute" : "volume-up"} 
                  size={18} 
                  color="#ffffff" 
                />
              </TouchableOpacity>
            </View>
          </LinearGradient>
          
          {/* 正文内容 */}
          <View style={styles.contentBody}>
            <Text style={styles.bodyText}>
              正念行走是一种简单而有效的冥想练习，它让我们在日常行走中培养专注力和觉察力。通过正念行走，我们可以学会活在当下，感受每一步的力量和宁静。
            </Text>
            
            <Text style={styles.sectionTitle}>正念行走的好处</Text>
            <View style={styles.benefitsList}>
              <View style={styles.benefitItem}>
                <FontAwesome5 name="check-circle" size={16} color="#10b981" />
                <Text style={styles.benefitText}>减轻压力和焦虑，提升内心平静</Text>
              </View>
              <View style={styles.benefitItem}>
                <FontAwesome5 name="check-circle" size={16} color="#10b981" />
                <Text style={styles.benefitText}>改善专注力和注意力</Text>
              </View>
              <View style={styles.benefitItem}>
                <FontAwesome5 name="check-circle" size={16} color="#10b981" />
                <Text style={styles.benefitText}>增强身体感知和觉察能力</Text>
              </View>
              <View style={styles.benefitItem}>
                <FontAwesome5 name="check-circle" size={16} color="#10b981" />
                <Text style={styles.benefitText}>促进身心连接，提升幸福感</Text>
              </View>
            </View>
            
            <Text style={styles.sectionTitle}>练习步骤</Text>
            <View style={styles.stepsContainer}>
              <View style={styles.stepCard}>
                <Text style={styles.stepTitle}>第一步：准备</Text>
                <Text style={styles.stepText}>
                  找一个安静、安全的地方开始你的正念行走练习。可以是室内的走廊，也可以是室外的公园小径。
                </Text>
              </View>
              
              <View style={styles.stepCard}>
                <Text style={styles.stepTitle}>第二步：站姿</Text>
                <Text style={styles.stepText}>
                  双脚并拢或与肩同宽站立，感受身体的重量均匀分布在双脚上。保持背部挺直，肩膀放松。
                </Text>
              </View>
              
              <View style={styles.stepCard}>
                <Text style={styles.stepTitle}>第三步：开始行走</Text>
                <Text style={styles.stepText}>
                  以自然的步伐开始行走，不需要太快或太慢。将注意力集中在脚部的感受上：抬起、移动、放下。
                </Text>
              </View>
              
              <View style={styles.stepCard}>
                <Text style={styles.stepTitle}>第四步：觉察当下</Text>
                <Text style={styles.stepText}>
                  当思绪wandering时，温和地将注意力带回到脚部的感受上。感受地面的触感、肌肉的运动、身体的平衡。
                </Text>
              </View>
            </View>
            
            <Text style={styles.sectionTitle}>小贴士</Text>
            <View style={styles.tipsContainer}>
              <View style={styles.tipItem}>
                <FontAwesome6 name="lightbulb" size={16} color="#f59e0b" />
                <Text style={styles.tipText}>每天练习10-15分钟，坚持21天形成习惯</Text>
              </View>
              <View style={styles.tipItem}>
                <FontAwesome6 name="lightbulb" size={16} color="#f59e0b" />
                <Text style={styles.tipText}>不要评判自己的练习，保持耐心和善意</Text>
              </View>
              <View style={styles.tipItem}>
                <FontAwesome6 name="lightbulb" size={16} color="#f59e0b" />
                <Text style={styles.tipText}>可以在日常行走中随时练习正念觉察</Text>
              </View>
            </View>
            
            <Text style={styles.bodyText}>
              正念行走不是要达到某种特定的状态，而是要培养一种持续的觉察能力。通过这种简单的练习，我们可以在忙碌的生活中找到内心的宁静和力量。
            </Text>
          </View>
        </View>

        {/* 相关推荐 */}
        <View style={styles.relatedSection}>
          <Text style={styles.relatedTitle}>相关推荐</Text>
          
          <View style={styles.relatedList}>
            {relatedContentData.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.relatedItem}
                onPress={() => handleRelatedItemPress(item.id)}
                activeOpacity={0.7}
              >
                <Image
                  source={{ uri: item.image }}
                  style={styles.relatedImage}
                  resizeMode="cover"
                />
                <View style={styles.relatedInfo}>
                  <Text style={styles.relatedItemTitle}>{item.title}</Text>
                  <Text style={styles.relatedItemDescription}>{item.description}</Text>
                  <View style={styles.relatedMeta}>
                    <View style={styles.relatedDurationTag}>
                      <Text style={styles.relatedDurationText}>{item.duration}</Text>
                    </View>
                    <Text style={styles.relatedLevelText}>• {item.level}</Text>
                  </View>
                </View>
                <FontAwesome6 name="chevron-right" size={14} color="#64748b" />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* 浮动音频播放器 */}
      {showFloatingPlayer && (
        <LinearGradient
          colors={['#8b5cf6', '#6366f1']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.floatingPlayerGradient}
        >
          <View style={styles.floatingPlayerContainer}>
            <TouchableOpacity
              style={styles.floatingPlayButton}
              onPress={handleToggleAudioPlayback}
              activeOpacity={0.7}
            >
              <FontAwesome6 
                name={isAudioPlaying ? "pause" : "play"} 
                size={14} 
                color="#ffffff" 
              />
            </TouchableOpacity>
            
            <View style={styles.floatingProgressContainer}>
              <Text style={styles.floatingTitle}>{currentContent.title}引导</Text>
              <View style={styles.floatingProgressBar}>
                <View 
                  style={[
                    styles.floatingProgressFill, 
                    { width: `${getAudioProgress()}%` }
                  ]} 
                />
              </View>
            </View>
            
            <TouchableOpacity
              style={styles.floatingCloseButton}
              onPress={handleCloseFloatingPlayer}
              activeOpacity={0.7}
            >
              <FontAwesome5 name="times" size={14} color="#ffffff" />
            </TouchableOpacity>
          </View>
        </LinearGradient>
      )}
    </SafeAreaView>
  );
};

export default MindfulnessDetailScreen;

