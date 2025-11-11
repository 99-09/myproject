

import React, { useState, useRef } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, Alert, KeyboardAvoidingView, Platform, Image, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import * as ImagePicker from 'expo-image-picker';
import styles from './styles';

interface MoodTag {
  id: string;
  label: string;
  icon: string;
  color: string;
}

interface UploadedImage {
  id: string;
  uri: string;
  name: string;
}

const moodTags: MoodTag[] = [
  { id: 'happy', label: '开心', icon: 'face-smile', color: '#f59e0b' },
  { id: 'sad', label: '难过', icon: 'face-frown', color: '#3b82f6' },
  { id: 'anxious', label: '焦虑', icon: 'triangle-exclamation', color: '#ef4444' },
  { id: 'calm', label: '平静', icon: 'leaf', color: '#10b981' },
  { id: 'excited', label: '兴奋', icon: 'star', color: '#f59e0b' },
  { id: 'tired', label: '疲惫', icon: 'bed', color: '#64748b' },
  { id: 'angry', label: '愤怒', icon: 'fire', color: '#ef4444' },
  { id: 'grateful', label: '感恩', icon: 'hands-praying', color: '#06b6d4' },
];

const MoodEntryScreen: React.FC = () => {
  const router = useRouter();
  const triggerInputRef = useRef<TextInput>(null);
  const thoughtsInputRef = useRef<TextInput>(null);

  const [selectedDate, setSelectedDate] = useState<string>(
    new Date().toISOString().split('T')[0]
  );
  const [selectedMoods, setSelectedMoods] = useState<string[]>([]);
  const [triggerText, setTriggerText] = useState<string>('');
  const [thoughtsText, setThoughtsText] = useState<string>('');
  const [uploadedImages, setUploadedImages] = useState<UploadedImage[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleBackPress = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };

  const handleMoodTagPress = (moodId: string) => {
    setSelectedMoods(prevMoods => {
      if (prevMoods.includes(moodId)) {
        return prevMoods.filter(id => id !== moodId);
      } else {
        return [...prevMoods, moodId];
      }
    });
  };

  const handleImageUpload = async () => {
    try {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      
      if (status !== 'granted') {
        Alert.alert('权限提示', '需要访问相册权限才能上传图片');
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsMultipleSelection: true,
        quality: 0.8,
        selectionLimit: 5,
      });

      if (!result.canceled && result.assets) {
        const newImages: UploadedImage[] = result.assets.map((asset, index) => ({
          id: `image-${Date.now()}-${index}`,
          uri: asset.uri,
          name: asset.fileName || `image_${Date.now()}_${index}.jpg`,
        }));

        setUploadedImages(prevImages => [...prevImages, ...newImages]);
      }
    } catch (error) {
      Alert.alert('错误', '上传图片时发生错误');
    }
  };

  const handleRemoveImage = (imageId: string) => {
    setUploadedImages(prevImages => 
      prevImages.filter(image => image.id !== imageId)
    );
  };

  const handleSavePress = async () => {
    // 验证必填项
    if (selectedMoods.length === 0) {
      Alert.alert('提示', '请选择至少一个情绪标签');
      return;
    }

    if (!triggerText.trim()) {
      Alert.alert('提示', '请描述今天发生了什么');
      return;
    }

    if (!thoughtsText.trim()) {
      Alert.alert('提示', '请记录你的想法和感受');
      return;
    }

    setIsLoading(true);

    try {
      // 模拟保存数据
      const moodEntry = {
        date: selectedDate,
        moods: selectedMoods,
        trigger: triggerText.trim(),
        thoughts: thoughtsText.trim(),
        images: uploadedImages,
        timestamp: new Date().toISOString(),
      };

      console.log('保存情绪记录:', moodEntry);

      // 模拟API调用延迟
      await new Promise(resolve => setTimeout(resolve, 1000));

      Alert.alert('成功', '保存成功！', [
        {
          text: '确定',
          onPress: () => {
            if (router.canGoBack()) {
              router.back();
            }
          },
        },
      ]);
    } catch (error) {
      Alert.alert('错误', '保存失败，请重试');
    } finally {
      setIsLoading(false);
    }
  };

  const renderMoodTag = (mood: MoodTag) => {
    const isSelected = selectedMoods.includes(mood.id);
    
    return (
      <TouchableOpacity
        key={mood.id}
        style={[
          styles.moodTag,
          isSelected ? styles.moodTagSelected : styles.moodTagUnselected,
        ]}
        onPress={() => handleMoodTagPress(mood.id)}
        activeOpacity={0.8}
      >
        <FontAwesome6
          name={mood.icon as any}
          size={14}
          color={isSelected ? '#ffffff' : mood.color}
          style={styles.moodTagIcon}
        />
        <Text
          style={[
            styles.moodTagText,
            isSelected ? styles.moodTagTextSelected : styles.moodTagTextUnselected,
          ]}
        >
          {mood.label}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderImagePreview = (image: UploadedImage) => (
    <View key={image.id} style={styles.imagePreviewContainer}>
      <Image source={{ uri: image.uri }} style={styles.imagePreview} />
      <TouchableOpacity
        style={styles.imageRemoveButton}
        onPress={() => handleRemoveImage(image.id)}
        activeOpacity={0.8}
      >
        <FontAwesome6 name="xmark" size={10} color="#ffffff" />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
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
              activeOpacity={0.8}
            >
              <FontAwesome6 name="arrow-left" size={18} color="#ffffff" />
            </TouchableOpacity>
            
            <Text style={styles.headerTitle}>记录情绪</Text>
            
            <TouchableOpacity
              style={styles.saveButton}
              onPress={handleSavePress}
              disabled={isLoading}
              activeOpacity={0.8}
            >
              <Text style={styles.saveButtonText}>
                {isLoading ? '保存中...' : '保存'}
              </Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>

        {/* 主要内容区域 */}
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollViewContent}
          showsVerticalScrollIndicator={false}
        >
          {/* 日期选择器 */}
          <View style={styles.section}>
            <Text style={styles.sectionLabel}>
              <FontAwesome6 name="calendar-days" size={14} color="#6366f1" />
              {'  '}选择日期
            </Text>
            <TextInput
              style={styles.dateInput}
              value={selectedDate}
              onChangeText={setSelectedDate}
              placeholder="YYYY-MM-DD"
              placeholderTextColor="#94a3b8"
            />
          </View>

          {/* 情绪标签选择 */}
          <View style={styles.section}>
            <Text style={styles.sectionLabel}>
              <FontAwesome6 name="heart" size={14} color="#6366f1" />
              {'  '}今天的心情如何？
            </Text>
            <View style={styles.moodTagsGrid}>
              {moodTags.map(renderMoodTag)}
            </View>
          </View>

          {/* 触发事件输入 */}
          <View style={styles.section}>
            <Text style={styles.sectionLabel}>
              <FontAwesome6 name="lightbulb" size={14} color="#f59e0b" />
              {'  '}今天发生了什么？
            </Text>
            <TextInput
              ref={triggerInputRef}
              style={styles.textArea}
              value={triggerText}
              onChangeText={setTriggerText}
              placeholder="描述一下今天发生的事情，是什么触发了这种情绪..."
              placeholderTextColor="#94a3b8"
              multiline
              textAlignVertical="top"
            />
          </View>

          {/* 想法和感受输入 */}
          <View style={styles.section}>
            <Text style={styles.sectionLabel}>
              <FontAwesome6 name="brain" size={14} color="#8b5cf6" />
              {'  '}你的想法和感受是？
            </Text>
            <TextInput
              ref={thoughtsInputRef}
              style={styles.textAreaLarge}
              value={thoughtsText}
              onChangeText={setThoughtsText}
              placeholder="记录下你的想法、感受和反思..."
              placeholderTextColor="#94a3b8"
              multiline
              textAlignVertical="top"
            />
          </View>

          {/* 图片上传 */}
          <View style={styles.section}>
            <Text style={styles.sectionLabel}>
              <FontAwesome6 name="camera" size={14} color="#06b6d4" />
              {'  '}添加图片（可选）
            </Text>
            
            <TouchableOpacity
              style={styles.imageUploadArea}
              onPress={handleImageUpload}
              activeOpacity={0.8}
            >
              <FontAwesome6 name="cloud-arrow-up" size={32} color="#64748b" />
              <Text style={styles.imageUploadText}>点击上传图片</Text>
              <Text style={styles.imageUploadSubText}>
                支持 JPG、PNG 格式，最大 5MB
              </Text>
            </TouchableOpacity>

            {/* 图片预览 */}
            {uploadedImages.length > 0 && (
              <View style={styles.imagePreviewGrid}>
                {uploadedImages.map(renderImagePreview)}
              </View>
            )}
          </View>

          {/* 提示信息 */}
          <View style={styles.tipSection}>
            <View style={styles.tipContent}>
              <FontAwesome6 name="circle-info" size={16} color="#6366f1" />
              <View style={styles.tipTextContainer}>
                <Text style={styles.tipTitle}>温馨提示</Text>
                <Text style={styles.tipDescription}>
                  记录情绪有助于更好地了解自己，坚持每天记录会有意外的收获哦！
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default MoodEntryScreen;

