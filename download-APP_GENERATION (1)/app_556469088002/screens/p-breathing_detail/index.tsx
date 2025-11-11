

import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Modal, Alert, Image, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { FontAwesome5, FontAwesome6 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { useSharedValue, useAnimatedStyle, withRepeat, withTiming, withSequence, cancelAnimation, } from 'react-native-reanimated';
import styles from './styles';

interface BreathingPhase {
  name: string;
  duration: number;
  instruction: string;
}

interface BreathingExercise {
  title: string;
  description: string;
  image: string;
  phases: BreathingPhase[];
}

const BreathingDetailScreen = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  
  // 呼吸练习数据
  const breathingExercises: Record<string, BreathingExercise> = {
    'breathing_001': {
      title: '4-7-8呼吸法',
      description: '一种简单而有效的呼吸技巧，通过特定的呼吸节奏帮助你快速放松身心，缓解焦虑和压力。',
      image: 'https://s.coze.cn/image/_wbLUGpnJHo/',
      phases: [
        { name: '吸气', duration: 4, instruction: '缓慢吸气...' },
        { name: '屏息', duration: 7, instruction: '保持呼吸...' },
        { name: '呼气', duration: 8, instruction: '缓慢呼气...' }
      ]
    },
    'breathing_002': {
      title: '腹式呼吸',
      description: '通过腹部的扩张和收缩来进行深呼吸，帮助放松神经系统，改善氧气摄入。',
      image: 'https://s.coze.cn/image/uxyUr9Eyz-Q/',
      phases: [
        { name: '吸气', duration: 5, instruction: '腹部鼓起...' },
        { name: '屏息', duration: 2, instruction: '稍作停顿...' },
        { name: '呼气', duration: 6, instruction: '腹部收缩...' }
      ]
    },
    'breathing_003': {
      title: '交替鼻孔呼吸',
      description: '通过交替堵塞左右鼻孔来调节呼吸，有助于平衡自主神经系统，提升专注力。',
      image: 'https://s.coze.cn/image/CMaApIsFXaw/',
      phases: [
        { name: '左鼻吸气', duration: 4, instruction: '左鼻孔吸气...' },
        { name: '屏息', duration: 2, instruction: '保持呼吸...' },
        { name: '右鼻呼气', duration: 4, instruction: '右鼻孔呼气...' },
        { name: '右鼻吸气', duration: 4, instruction: '右鼻孔吸气...' },
        { name: '屏息', duration: 2, instruction: '保持呼吸...' },
        { name: '左鼻呼气', duration: 4, instruction: '左鼻孔呼气...' }
      ]
    }
  };

  const contentId = (params.content_id as string) || 'breathing_001';
  const exercise = breathingExercises[contentId] || breathingExercises['breathing_001'];

  // 状态管理
  const [isRunning, setIsRunning] = useState(false);
  const [currentPhaseIndex, setCurrentPhaseIndex] = useState(0);
  const [totalTimeElapsed, setTotalTimeElapsed] = useState(0);
  const [selectedDuration, setSelectedDuration] = useState(10);
  const [isMusicEnabled, setIsMusicEnabled] = useState(true);
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const [currentPhaseTimeLeft, setCurrentPhaseTimeLeft] = useState(0);

  // 动画值
  const circleScale = useSharedValue(1);
  const circleColor = useSharedValue(0);

  // 计时器引用
  const totalTimerRef = useRef<number | null>(null);
  const phaseTimerRef = useRef<number | null>(null);

  // 动画样式
  const animatedCircleStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: circleScale.value }],
      backgroundColor: circleColor.value === 0 ? '#06b6d4' : '#0891b2',
    };
  });

  // 返回按钮处理
  const handleBackPress = () => {
    if (isRunning) {
      Alert.alert(
        '练习正在进行中',
        '确定要离开吗？',
        [
          { text: '取消', style: 'cancel' },
          { 
            text: '确定', 
            onPress: () => {
              stopExercise();
              router.back();
            }
          }
        ]
      );
    } else {
      router.back();
    }
  };

  // 开始练习
  const startExercise = () => {
    setIsRunning(true);
    
    // 开始总计时器
    totalTimerRef.current = setInterval(() => {
      setTotalTimeElapsed(prev => {
        const newTime = prev + 1;
        if (newTime >= selectedDuration * 60) {
          completeExercise();
        }
        return newTime;
      });
    }, 1000);
    
    // 开始第一个阶段
    startPhase(0);
  };

  // 暂停练习
  const pauseExercise = () => {
    setIsRunning(false);
    
    if (phaseTimerRef.current) {
      clearInterval(phaseTimerRef.current);
    }
    if (totalTimerRef.current) {
      clearInterval(totalTimerRef.current);
    }
    
    cancelAnimation(circleScale);
    cancelAnimation(circleColor);
    circleScale.value = 1;
    circleColor.value = 0;
  };

  // 重置练习
  const resetExercise = () => {
    setIsRunning(false);
    setCurrentPhaseIndex(0);
    setTotalTimeElapsed(0);
    setCurrentPhaseTimeLeft(0);
    
    if (phaseTimerRef.current) {
      clearInterval(phaseTimerRef.current);
    }
    if (totalTimerRef.current) {
      clearInterval(totalTimerRef.current);
    }
    
    cancelAnimation(circleScale);
    cancelAnimation(circleColor);
    circleScale.value = 1;
    circleColor.value = 0;
  };

  // 开始呼吸阶段
  const startPhase = (phaseIndex: number) => {
    if (phaseIndex >= exercise.phases.length) {
      phaseIndex = 0; // 循环所有阶段
    }
    
    setCurrentPhaseIndex(phaseIndex);
    const phase = exercise.phases[phaseIndex];
    setCurrentPhaseTimeLeft(phase.duration);
    
    // 设置圆圈动画
    cancelAnimation(circleScale);
    cancelAnimation(circleColor);
    
    if (phase.name.includes('吸气')) {
      circleScale.value = withTiming(1.3, { duration: phase.duration * 1000 });
      circleColor.value = withTiming(1, { duration: phase.duration * 1000 });
    } else if (phase.name.includes('屏息')) {
      circleScale.value = 1.3;
      circleColor.value = 1;
    } else if (phase.name.includes('呼气')) {
      circleScale.value = withTiming(1, { duration: phase.duration * 1000 });
      circleColor.value = withTiming(0, { duration: phase.duration * 1000 });
    }
    
    // 阶段计时器
    phaseTimerRef.current = setInterval(() => {
      setCurrentPhaseTimeLeft(prev => {
        if (prev <= 1) {
          if (phaseTimerRef.current) {
            clearInterval(phaseTimerRef.current);
          }
          startPhase(phaseIndex + 1); // 进入下一个阶段
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  // 完成练习
  const completeExercise = () => {
    stopExercise();
    setShowCompletionModal(true);
  };

  // 停止练习
  const stopExercise = () => {
    setIsRunning(false);
    
    if (phaseTimerRef.current) {
      clearInterval(phaseTimerRef.current);
    }
    if (totalTimerRef.current) {
      clearInterval(totalTimerRef.current);
    }
    
    cancelAnimation(circleScale);
    cancelAnimation(circleColor);
    circleScale.value = 1;
    circleColor.value = 0;
  };

  // 关闭完成模态框
  const closeCompletionModal = () => {
    setShowCompletionModal(false);
    resetExercise();
  };

  // 格式化时间显示
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  // 获取当前阶段信息
  const getCurrentPhase = () => {
    if (isRunning && currentPhaseIndex < exercise.phases.length) {
      return exercise.phases[currentPhaseIndex];
    }
    return null;
  };

  // 清理定时器
  useEffect(() => {
    return () => {
      if (phaseTimerRef.current) {
        clearInterval(phaseTimerRef.current);
      }
      if (totalTimerRef.current) {
        clearInterval(totalTimerRef.current);
      }
    };
  }, []);

  const currentPhase = getCurrentPhase();

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
          <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
            <FontAwesome6 name="arrow-left" size={18} color="#ffffff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>呼吸练习</Text>
          <View style={styles.headerPlaceholder} />
        </View>
      </LinearGradient>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* 练习信息卡片 */}
        <View style={styles.infoCard}>
          <View style={styles.exerciseInfo}>
            <Image source={{ uri: exercise.image }} style={styles.exerciseImage} />
            <Text style={styles.exerciseTitle}>{exercise.title}</Text>
            <Text style={styles.exerciseDescription}>{exercise.description}</Text>
          </View>
          
          {/* 练习时长选择 */}
          <View style={styles.durationSection}>
            <Text style={styles.sectionLabel}>练习时长</Text>
            <View style={styles.durationOptions}>
              <TouchableOpacity
                style={[
                  styles.durationOption,
                  selectedDuration === 5 && styles.durationOptionActive
                ]}
                onPress={() => !isRunning && setSelectedDuration(5)}
                disabled={isRunning}
              >
                <Text style={[
                  styles.durationOptionText,
                  selectedDuration === 5 && styles.durationOptionTextActive
                ]}>
                  5分钟
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.durationOption,
                  selectedDuration === 10 && styles.durationOptionActive
                ]}
                onPress={() => !isRunning && setSelectedDuration(10)}
                disabled={isRunning}
              >
                <Text style={[
                  styles.durationOptionText,
                  selectedDuration === 10 && styles.durationOptionTextActive
                ]}>
                  10分钟
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.durationOption,
                  selectedDuration === 15 && styles.durationOptionActive
                ]}
                onPress={() => !isRunning && setSelectedDuration(15)}
                disabled={isRunning}
              >
                <Text style={[
                  styles.durationOptionText,
                  selectedDuration === 15 && styles.durationOptionTextActive
                ]}>
                  15分钟
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          
          {/* 背景音乐开关 */}
          <TouchableOpacity
            style={styles.musicToggle}
            onPress={() => setIsMusicEnabled(!isMusicEnabled)}
            disabled={isRunning}
          >
            <View style={styles.musicInfo}>
              <Text style={styles.musicTitle}>背景音乐</Text>
              <Text style={styles.musicDescription}>轻柔的自然音乐帮助放松</Text>
            </View>
            <View style={[styles.toggleSwitch, isMusicEnabled && styles.toggleSwitchActive]}>
              <View style={[styles.toggleThumb, isMusicEnabled && styles.toggleThumbActive]} />
            </View>
          </TouchableOpacity>
        </View>

        {/* 呼吸练习区域 */}
        <View style={styles.breathingCard}>
          <View style={styles.breathingArea}>
            <Animated.View style={[styles.breathingCircle, animatedCircleStyle]}>
              <Text style={styles.breathingInstruction}>
                {isRunning ? (currentPhase?.instruction || '练习中...') : '点击开始'}
              </Text>
            </Animated.View>
            <Text style={styles.breathingPhase}>
              {isRunning ? (currentPhase?.name || '练习中') : '准备开始'}
            </Text>
            <Text style={styles.breathingTimer}>{formatTime(totalTimeElapsed)}</Text>
          </View>
          
          {/* 控制按钮 */}
          <View style={styles.controlButtons}>
            <TouchableOpacity
              style={styles.startPauseButton}
              onPress={isRunning ? pauseExercise : startExercise}
            >
              <LinearGradient
                colors={['#06b6d4', '#0891b2']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.startPauseGradient}
              >
                <FontAwesome6 
                  name={isRunning ? "pause" : "play"} 
                  size={16} 
                  color="#ffffff" 
                />
                <Text style={styles.startPauseText}>
                  {isRunning ? '暂停' : '开始练习'}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.resetButton, isRunning && styles.resetButtonActive]}
              onPress={resetExercise}
              disabled={!isRunning}
            >
              <FontAwesome5 name="redo" size={16} color={isRunning ? "#64748b" : "#9ca3af"} />
            </TouchableOpacity>
          </View>
        </View>

        {/* 练习指南 */}
        <View style={styles.guideCard}>
          <Text style={styles.cardTitle}>练习指南</Text>
          <View style={styles.guideSteps}>
            <View style={styles.guideStep}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepNumberText}>1</Text>
              </View>
              <View style={styles.stepContent}>
                <Text style={styles.stepTitle}>吸气阶段</Text>
                <Text style={styles.stepDescription}>缓慢吸气4秒钟，感受氧气充满你的肺部</Text>
              </View>
            </View>
            <View style={styles.guideStep}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepNumberText}>2</Text>
              </View>
              <View style={styles.stepContent}>
                <Text style={styles.stepTitle}>屏息阶段</Text>
                <Text style={styles.stepDescription}>屏住呼吸7秒钟，让氧气充分被身体吸收</Text>
              </View>
            </View>
            <View style={styles.guideStep}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepNumberText}>3</Text>
              </View>
              <View style={styles.stepContent}>
                <Text style={styles.stepTitle}>呼气阶段</Text>
                <Text style={styles.stepDescription}>缓慢呼气8秒钟，释放所有的紧张和压力</Text>
              </View>
            </View>
          </View>
        </View>

        {/* 练习好处 */}
        <View style={styles.benefitsCard}>
          <Text style={styles.cardTitle}>练习好处</Text>
          <View style={styles.benefitsGrid}>
            <View style={styles.benefitItem}>
              <FontAwesome6 name="heart" size={20} color="#06b6d4" />
              <Text style={styles.benefitText}>缓解焦虑</Text>
            </View>
            <View style={styles.benefitItem}>
              <FontAwesome6 name="bed" size={20} color="#06b6d4" />
              <Text style={styles.benefitText}>改善睡眠</Text>
            </View>
            <View style={styles.benefitItem}>
              <FontAwesome6 name="brain" size={20} color="#06b6d4" />
              <Text style={styles.benefitText}>提升专注</Text>
            </View>
            <View style={styles.benefitItem}>
              <FontAwesome6 name="leaf" size={20} color="#06b6d4" />
              <Text style={styles.benefitText}>放松身心</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* 完成提示模态框 */}
      <Modal
        visible={showCompletionModal}
        transparent={true}
        animationType="fade"
        onRequestClose={closeCompletionModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalIcon}>
              <FontAwesome6 name="check" size={24} color="#10b981" />
            </View>
            <Text style={styles.modalTitle}>练习完成！</Text>
            <Text style={styles.modalDescription}>恭喜你完成了本次呼吸练习，感觉怎么样？</Text>
            <TouchableOpacity style={styles.modalButton} onPress={closeCompletionModal}>
              <LinearGradient
                colors={['#06b6d4', '#0891b2']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.modalButtonGradient}
              >
                <Text style={styles.modalButtonText}>确定</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default BreathingDetailScreen;

