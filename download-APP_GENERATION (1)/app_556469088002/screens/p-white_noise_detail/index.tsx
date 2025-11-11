

import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, Alert, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { FontAwesome5, FontAwesome6 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Slider from '@react-native-community/slider';
import styles from './styles';

interface WhiteNoiseItem {
  id: string;
  name: string;
  description: string;
  image: string;
  icon: string;
}

const WhiteNoiseDetailScreen = () => {
  const router = useRouter();
  
  // 白噪音数据
  const whiteNoiseData: WhiteNoiseItem[] = [
    {
      id: 'rain',
      name: '雨声白噪音',
      description: '轻柔的雨声帮助深度睡眠',
      image: 'https://s.coze.cn/image/ezNCSNyhUlk/',
      icon: 'cloud-rain'
    },
    {
      id: 'ocean',
      name: '海浪声',
      description: '海浪拍打岸边的舒缓声音',
      image: 'https://s.coze.cn/image/V_11tgd3bqo/',
      icon: 'water'
    },
    {
      id: 'forest',
      name: '森林声',
      description: '鸟鸣和树叶的自然声音',
      image: 'https://s.coze.cn/image/YDA9Bn0xGtQ/',
      icon: 'tree'
    },
    {
      id: 'wind',
      name: '风声',
      description: '轻柔的风声带来宁静',
      image: 'https://s.coze.cn/image/KdKW96bWtwc/',
      icon: 'wind'
    },
    {
      id: 'cafe',
      name: '咖啡厅声',
      description: '温和的交谈和咖啡香气',
      image: 'https://s.coze.cn/image/zHueTlroZXI/',
      icon: 'coffee'
    },
    {
      id: 'white',
      name: '纯白噪音',
      description: '均匀的白噪音屏蔽外界干扰',
      image: 'https://s.coze.cn/image/WVytlFPMhYM/',
      icon: 'wave-square'
    }
  ];

  // 状态管理
  const [currentNoiseId, setCurrentNoiseId] = useState('rain');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentVolume, setCurrentVolume] = useState(70);
  const [selectedTimerMinutes, setSelectedTimerMinutes] = useState(0);
  const [remainingTime, setRemainingTime] = useState(0);
  const [isFavorited, setIsFavorited] = useState(false);
  
  const timerIntervalRef = useRef<number | null>(null);

  // 获取当前白噪音信息
  const currentNoise = whiteNoiseData.find(noise => noise.id === currentNoiseId);

  // 返回按钮处理
  const handleBackPress = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };

  // 收藏按钮处理
  const handleFavoritePress = () => {
    setIsFavorited(!isFavorited);
  };

  // 播放/暂停处理
  const handlePlayPausePress = () => {
    if (isPlaying) {
      setIsPlaying(false);
      // 停止定时
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current);
        timerIntervalRef.current = null;
      }
    } else {
      setIsPlaying(true);
      // 如果有定时，开始倒计时
      if (selectedTimerMinutes > 0) {
        startTimer();
      }
    }
  };

  // 音量变化处理
  const handleVolumeChange = (value: number) => {
    setCurrentVolume(Math.round(value));
  };

  // 定时选择处理
  const handleTimerSelect = (minutes: number) => {
    setSelectedTimerMinutes(minutes);
    setRemainingTime(minutes * 60);
    
    // 停止当前定时
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
      timerIntervalRef.current = null;
    }
    
    // 如果正在播放且选择了非零定时，开始倒计时
    if (isPlaying && minutes > 0) {
      startTimer();
    }
  };

  // 开始定时
  const startTimer = () => {
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
    }
    
    timerIntervalRef.current = setInterval(() => {
      setRemainingTime(prev => {
        if (prev <= 1) {
          // 定时结束，停止播放
          handlePlayPausePress();
          setSelectedTimerMinutes(0);
          if (timerIntervalRef.current) {
            clearInterval(timerIntervalRef.current);
            timerIntervalRef.current = null;
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000) as unknown as number;
  };

  // 白噪音选择处理
  const handleNoiseSelect = (noiseId: string) => {
    if (noiseId === currentNoiseId) {
      // 选择当前正在播放的白噪音，切换播放状态
      handlePlayPausePress();
    } else {
      // 停止当前播放
      if (isPlaying) {
        handlePlayPausePress();
      }
      // 选择新的白噪音
      setCurrentNoiseId(noiseId);
    }
  };

  // 格式化剩余时间
  const formatRemainingTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // 获取音量图标
  const getVolumeIcon = (): string => {
    if (currentVolume === 0) return 'volume-mute';
    if (currentVolume < 50) return 'volume-low';
    return 'volume-high';
  };

  // 清理定时器
  useEffect(() => {
    return () => {
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current);
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
        style={styles.header}
      >
        <View style={styles.headerContent}>
          <TouchableOpacity
            style={styles.headerButton}
            onPress={handleBackPress}
            activeOpacity={0.7}
          >
            <FontAwesome6 name="arrow-left" size={18} color="#ffffff" />
          </TouchableOpacity>
          
          <Text style={styles.headerTitle}>白噪音</Text>
          
          <TouchableOpacity
            style={styles.headerButton}
            onPress={handleFavoritePress}
            activeOpacity={0.7}
          >
            <FontAwesome6
              name="heart"
              size={18}
              color={isFavorited ? '#ef4444' : '#ffffff'}
              solid={isFavorited}
            />
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* 当前播放区域 */}
        <View style={styles.currentPlayingSection}>
          <View style={styles.currentPlayingCard}>
            {/* 背景图片 */}
            <View style={styles.backgroundImageContainer}>
              <Image
                source={{ uri: currentNoise?.image }}
                style={styles.backgroundImage}
                resizeMode="cover"
              />
            </View>
            
            {/* 白噪音名称和描述 */}
            <Text style={styles.currentNoiseName}>{currentNoise?.name}</Text>
            <Text style={styles.currentNoiseDescription}>{currentNoise?.description}</Text>
            
            {/* 播放控制区 */}
            <View style={styles.playbackControls}>
              {/* 播放/暂停按钮 */}
              <TouchableOpacity
                style={styles.playPauseButton}
                onPress={handlePlayPausePress}
                activeOpacity={0.8}
              >
                <LinearGradient
                  colors={['#6366f1', '#8b5cf6']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={styles.playPauseGradient}
                >
                  <FontAwesome6
                    name={isPlaying ? 'pause' : 'play'}
                    size={24}
                    color="#ffffff"
                    style={!isPlaying ? styles.playIconOffset : undefined}
                  />
                </LinearGradient>
              </TouchableOpacity>
              
              {/* 音量控制 */}
              <View style={styles.volumeControl}>
                <FontAwesome6 name={getVolumeIcon()} size={18} color="#6366f1" />
                <Slider
                  style={styles.volumeSlider}
                  minimumValue={0}
                  maximumValue={100}
                  value={currentVolume}
                  onValueChange={handleVolumeChange}
                  minimumTrackTintColor="#6366f1"
                  maximumTrackTintColor="#e2e8f0"
                  thumbTintColor="#6366f1"
                />
                <FontAwesome5 name="volume-mute" size={18} color="#6366f1" />
              </View>
              
              {/* 音量值显示 */}
              <Text style={styles.volumeValue}>音量: {currentVolume}%</Text>
            </View>
          </View>
        </View>

        {/* 定时关闭设置 */}
        <View style={styles.timerSection}>
          <View style={styles.timerCard}>
            <Text style={styles.sectionTitle}>定时关闭</Text>
            <View style={styles.timerOptions}>
              {[
                { minutes: 0, label: '不关闭' },
                { minutes: 15, label: '15分钟' },
                { minutes: 30, label: '30分钟' },
                { minutes: 60, label: '60分钟' }
              ].map((option) => (
                <TouchableOpacity
                  key={option.minutes}
                  style={[
                    styles.timerOption,
                    selectedTimerMinutes === option.minutes && styles.timerOptionActive
                  ]}
                  onPress={() => handleTimerSelect(option.minutes)}
                  activeOpacity={0.7}
                >
                  <Text
                    style={[
                      styles.timerOptionText,
                      selectedTimerMinutes === option.minutes && styles.timerOptionTextActive
                    ]}
                  >
                    {option.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            
            {/* 定时剩余时间显示 */}
            {selectedTimerMinutes > 0 && (
              <View style={styles.timerDisplay}>
                <Text style={styles.timerDisplayText}>
                  将在 <Text style={styles.timerRemaining}>{formatRemainingTime(remainingTime)}</Text> 后关闭
                </Text>
              </View>
            )}
          </View>
        </View>

        {/* 白噪音列表 */}
        <View style={styles.noiseListSection}>
          <Text style={styles.sectionTitle}>选择白噪音</Text>
          
          {whiteNoiseData.map((noise) => (
            <TouchableOpacity
              key={noise.id}
              style={[
                styles.noiseItem,
                currentNoiseId === noise.id && styles.noiseItemActive
              ]}
              onPress={() => handleNoiseSelect(noise.id)}
              activeOpacity={0.7}
            >
              <View style={styles.noiseItemContent}>
                <Image
                  source={{ uri: noise.image }}
                  style={styles.noiseItemImage}
                  resizeMode="cover"
                />
                <View style={styles.noiseItemInfo}>
                  <Text
                    style={[
                      styles.noiseItemName,
                      currentNoiseId === noise.id && styles.noiseItemNameActive
                    ]}
                  >
                    {noise.name}
                  </Text>
                  <Text
                    style={[
                      styles.noiseItemDescription,
                      currentNoiseId === noise.id && styles.noiseItemDescriptionActive
                    ]}
                  >
                    {noise.description}
                  </Text>
                </View>
                <FontAwesome6
                  name="play"
                  size={18}
                  color={currentNoiseId === noise.id ? '#ffffff' : '#6366f1'}
                />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default WhiteNoiseDetailScreen;

