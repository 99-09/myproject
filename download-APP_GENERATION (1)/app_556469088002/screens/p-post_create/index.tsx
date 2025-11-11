

import React, { useState, useCallback } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert, Modal, FlatList, Image, Platform, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import styles from './styles';

interface SelectedImage {
  uri: string;
  alt: string;
}

interface TopicItem {
  name: string;
  discussionCount: string;
}

const PostCreateScreen = () => {
  const router = useRouter();
  
  // 状态管理
  const [contentText, setContentText] = useState('');
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [selectedImages, setSelectedImages] = useState<SelectedImage[]>([]);
  const [isTopicModalVisible, setIsTopicModalVisible] = useState(false);
  const [topicSearchText, setTopicSearchText] = useState('');
  const [isPublishing, setIsPublishing] = useState(false);

  // 推荐话题数据
  const recommendedTopics = [
    { name: '能量管理', discussionCount: '1.2k' },
    { name: '冥想练习', discussionCount: '856' },
    { name: '情绪日记', discussionCount: '723' },
    { name: '正念生活', discussionCount: '543' },
    { name: '压力缓解', discussionCount: '432' },
    { name: '呼吸练习', discussionCount: '321' },
  ];

  // 检查是否可以发布
  const canPublish = contentText.trim().length > 0 || selectedTopics.length > 0 || selectedImages.length > 0;

  // 返回按钮处理
  const handleBackPress = useCallback(() => {
    if (router.canGoBack()) {
      router.back();
    }
  }, [router]);

  // 文本输入处理
  const handleContentChange = useCallback((text: string) => {
    if (text.length <= 500) {
      setContentText(text);
    }
  }, []);

  // 发布处理
  const handlePublish = useCallback(async () => {
    if (!canPublish || isPublishing) {
      return;
    }

    if (!contentText.trim() && selectedTopics.length === 0 && selectedImages.length === 0) {
      Alert.alert('提示', '请至少填写一项内容');
      return;
    }

    setIsPublishing(true);
    
    try {
      // 模拟发布过程
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      Alert.alert('成功', '发布成功！', [
        {
          text: '确定',
          onPress: () => {
            if (router.canGoBack()) {
              router.back();
            }
          }
        }
      ]);
    } catch (error) {
      Alert.alert('错误', '发布失败，请重试');
    } finally {
      setIsPublishing(false);
    }
  }, [canPublish, isPublishing, contentText, selectedTopics, selectedImages, router]);

  // 相机拍照
  const handleCameraPress = useCallback(async () => {
    try {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('权限不足', '需要相机权限才能拍照');
        return;
      }

      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled && result.assets[0]) {
        addImageToPreview(result.assets[0].uri, '拍照图片');
      }
    } catch (error) {
      Alert.alert('错误', '拍照失败，请重试');
    }
  }, []);

  // 相册选择
  const handleGalleryPress = useCallback(async () => {
    try {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('权限不足', '需要相册权限才能选择图片');
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        allowsMultipleSelection: true,
        selectionLimit: 9 - selectedImages.length,
      });

      if (!result.canceled) {
        result.assets.forEach((asset, index) => {
          addImageToPreview(asset.uri, `选择图片 ${index + 1}`);
        });
      }
    } catch (error) {
      Alert.alert('错误', '选择图片失败，请重试');
    }
  }, [selectedImages.length]);

  // 视频录制
  const handleVideoPress = useCallback(() => {
    Alert.alert('提示', '视频功能开发中...');
  }, []);

  // 添加图片预览
  const addImageToPreview = useCallback((uri: string, alt: string) => {
    if (selectedImages.length >= 9) {
      Alert.alert('提示', '最多只能添加9张图片');
      return;
    }
    
    setSelectedImages(prev => [...prev, { uri, alt }]);
  }, [selectedImages.length]);

  // 删除图片
  const removeImage = useCallback((index: number) => {
    setSelectedImages(prev => prev.filter((_, i) => i !== index));
  }, []);

  // 切换话题选择
  const toggleTopic = useCallback((topic: string) => {
    setSelectedTopics(prev => {
      const index = prev.indexOf(topic);
      if (index > -1) {
        return prev.filter(t => t !== topic);
      } else {
        if (prev.length >= 5) {
          Alert.alert('提示', '最多只能添加5个话题');
          return prev;
        }
        return [...prev, topic];
      }
    });
  }, []);

  // 话题搜索处理
  const handleTopicSearch = useCallback(() => {
    const topic = topicSearchText.trim();
    if (topic) {
      toggleTopic(topic);
      setTopicSearchText('');
      setIsTopicModalVisible(false);
    }
  }, [topicSearchText, toggleTopic]);

  // 表情按钮
  const handleEmojiPress = useCallback(() => {
    Alert.alert('提示', '表情功能开发中...');
  }, []);

  // @按钮
  const handleMentionPress = useCallback(() => {
    Alert.alert('提示', '@功能开发中...');
  }, []);

  // 位置按钮
  const handleLocationPress = useCallback(() => {
    Alert.alert('提示', '位置功能开发中...');
  }, []);

  // 可见范围设置
  const handleVisibilityPress = useCallback(() => {
    Alert.alert('提示', '可见范围设置功能开发中...');
  }, []);

  // 渲染图片预览项
  const renderImagePreview = useCallback(({ item, index }: { item: SelectedImage; index: number }) => (
    <View style={styles.imagePreviewContainer}>
      <Image source={{ uri: item.uri }} style={styles.imagePreview} />
      <TouchableOpacity
        style={styles.imageRemoveButton}
        onPress={() => removeImage(index)}
        activeOpacity={0.7}
      >
        <FontAwesome6 name="xmark" size={10} color="#fff" />
      </TouchableOpacity>
    </View>
  ), [removeImage]);

  // 渲染已选择的话题
  const renderSelectedTopic = useCallback(({ item, index }: { item: string; index: number }) => (
    <View style={styles.selectedTopicTag}>
      <Text style={styles.selectedTopicText}>#{item}</Text>
      <TouchableOpacity
        onPress={() => toggleTopic(item)}
        style={styles.removeTopicButton}
        activeOpacity={0.7}
      >
        <FontAwesome6 name="xmark" size={10} color="#6366f1" />
      </TouchableOpacity>
    </View>
  ), [toggleTopic]);

  // 渲染话题项
  const renderTopicItem = useCallback(({ item }: { item: TopicItem }) => (
    <TouchableOpacity
      style={styles.topicItem}
      onPress={() => {
        toggleTopic(item.name);
        setIsTopicModalVisible(false);
      }}
      activeOpacity={0.7}
    >
      <View style={styles.topicItemLeft}>
        <FontAwesome6 name="hashtag" size={16} color="#6366f1" />
        <Text style={styles.topicItemText}>{item.name}</Text>
      </View>
      <Text style={styles.topicItemCount}>{item.discussionCount} 讨论</Text>
    </TouchableOpacity>
  ), [toggleTopic]);

  return (
    <SafeAreaView style={styles.container}>
      {/* 顶部导航栏 */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={handleBackPress}
          activeOpacity={0.7}
        >
          <FontAwesome6 name="arrow-left" size={18} color="#64748b" />
        </TouchableOpacity>
        
        <Text style={styles.headerTitle}>发布动态</Text>
        
        <TouchableOpacity
          style={[
            styles.publishButton,
            canPublish ? styles.publishButtonEnabled : styles.publishButtonDisabled
          ]}
          onPress={handlePublish}
          disabled={!canPublish || isPublishing}
          activeOpacity={0.7}
        >
          <Text style={[
            styles.publishButtonText,
            canPublish ? styles.publishButtonTextEnabled : styles.publishButtonTextDisabled
          ]}>
            {isPublishing ? '发布中...' : '发布'}
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* 用户信息 */}
        <View style={styles.userInfoSection}>
          <Image
            source={{ uri: 'https://s.coze.cn/image/5Zs9lHcuHJA/' }}
            style={styles.userAvatar}
          />
          <View style={styles.userInfoContent}>
            <Text style={styles.userNickname}>小雨</Text>
            <Text style={styles.publishTip}>分享你的能量管理心得...</Text>
          </View>
        </View>

        {/* 文本输入框 */}
        <View style={styles.textInputSection}>
          <TextInput
            style={styles.contentInput}
            placeholder="今天的能量状态如何？分享你的冥想体验、情绪感悟或者生活中的美好时刻..."
            placeholderTextColor="#64748b"
            multiline
            value={contentText}
            onChangeText={handleContentChange}
            maxLength={500}
            textAlignVertical="top"
          />
          <View style={styles.textInputFooter}>
            <Text style={styles.charCount}>{contentText.length}/500</Text>
            <View style={styles.textInputActions}>
              <TouchableOpacity
                style={styles.textInputActionButton}
                onPress={handleEmojiPress}
                activeOpacity={0.7}
              >
                <FontAwesome6 name="face-smile" size={18} color="#64748b" />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.textInputActionButton}
                onPress={handleMentionPress}
                activeOpacity={0.7}
              >
                <FontAwesome6 name="at" size={18} color="#64748b" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* 图片/视频选择器 */}
        <View style={styles.mediaSection}>
          <View style={styles.mediaButtons}>
            <TouchableOpacity
              style={styles.mediaButton}
              onPress={handleCameraPress}
              activeOpacity={0.7}
            >
              <View style={styles.mediaButtonIcon}>
                <FontAwesome6 name="camera" size={20} color="#64748b" />
              </View>
              <Text style={styles.mediaButtonText}>拍照</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={styles.mediaButton}
              onPress={handleGalleryPress}
              activeOpacity={0.7}
            >
              <View style={styles.mediaButtonIcon}>
                <FontAwesome6 name="images" size={20} color="#64748b" />
              </View>
              <Text style={styles.mediaButtonText}>相册</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={styles.mediaButton}
              onPress={handleVideoPress}
              activeOpacity={0.7}
            >
              <View style={styles.mediaButtonIcon}>
                <FontAwesome6 name="video" size={20} color="#64748b" />
              </View>
              <Text style={styles.mediaButtonText}>视频</Text>
            </TouchableOpacity>
          </View>
          
          {/* 图片预览 */}
          {selectedImages.length > 0 && (
            <FlatList
              data={selectedImages}
              renderItem={renderImagePreview}
              keyExtractor={(item, index) => `image-${index}`}
              numColumns={3}
              scrollEnabled={false}
              columnWrapperStyle={styles.imagePreviewRow}
              style={styles.imagePreviewList}
            />
          )}
        </View>

        {/* 话题标签选择器 */}
        <View style={styles.topicSection}>
          <View style={styles.topicSectionHeader}>
            <Text style={styles.topicSectionTitle}>添加话题</Text>
            <TouchableOpacity
              onPress={() => setIsTopicModalVisible(true)}
              activeOpacity={0.7}
            >
              <Text style={styles.addTopicButton}>
                <FontAwesome6 name="plus" size={12} color="#6366f1" /> 添加
              </Text>
            </TouchableOpacity>
          </View>
          
          {/* 已添加的话题 */}
          {selectedTopics.length > 0 && (
            <FlatList
              data={selectedTopics}
              renderItem={renderSelectedTopic}
              keyExtractor={(item, index) => `selected-topic-${index}`}
              numColumns={3}
              scrollEnabled={false}
              columnWrapperStyle={styles.selectedTopicsRow}
              style={styles.selectedTopicsList}
            />
          )}
          
          {/* 推荐话题 */}
          <View style={styles.recommendedTopics}>
            <Text style={styles.recommendedTopicsTitle}>推荐话题</Text>
            <View style={styles.recommendedTopicsContainer}>
              {recommendedTopics.map((topic, index) => (
                <TouchableOpacity
                  key={`recommended-${index}`}
                  style={[
                    styles.recommendedTopicTag,
                    selectedTopics.includes(topic.name) && styles.recommendedTopicTagSelected
                  ]}
                  onPress={() => toggleTopic(topic.name)}
                  activeOpacity={0.7}
                >
                  <Text style={[
                    styles.recommendedTopicText,
                    selectedTopics.includes(topic.name) && styles.recommendedTopicTextSelected
                  ]}>
                    #{topic.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>

        {/* 位置和可见性设置 */}
        <View style={styles.settingsSection}>
          <TouchableOpacity
            style={styles.settingsItem}
            onPress={handleLocationPress}
            activeOpacity={0.7}
          >
            <View style={styles.settingsItemLeft}>
              <FontAwesome6 name="location-dot" size={16} color="#64748b" />
              <Text style={styles.settingsItemText}>添加位置</Text>
            </View>
            <FontAwesome6 name="chevron-right" size={14} color="#6366f1" />
          </TouchableOpacity>
          
          <TouchableOpacity
            style={styles.settingsItem}
            onPress={handleVisibilityPress}
            activeOpacity={0.7}
          >
            <View style={styles.settingsItemLeft}>
              <FontAwesome6 name="eye" size={16} color="#64748b" />
              <Text style={styles.settingsItemText}>可见范围</Text>
            </View>
            <View style={styles.settingsItemRight}>
              <Text style={styles.settingsItemValue}>所有人</Text>
              <FontAwesome6 name="chevron-right" size={12} color="#64748b" />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* 话题选择弹窗 */}
      <Modal
        visible={isTopicModalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setIsTopicModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <TouchableOpacity
            style={styles.modalBackground}
            onPress={() => setIsTopicModalVisible(false)}
            activeOpacity={1}
          />
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>选择话题</Text>
              <TouchableOpacity
                onPress={() => setIsTopicModalVisible(false)}
                activeOpacity={0.7}
              >
                <FontAwesome6 name="xmark" size={18} color="#64748b" />
              </TouchableOpacity>
            </View>
            
            <View style={styles.topicSearchContainer}>
              <TextInput
                style={styles.topicSearchInput}
                placeholder="搜索或创建话题..."
                placeholderTextColor="#64748b"
                value={topicSearchText}
                onChangeText={setTopicSearchText}
                onSubmitEditing={handleTopicSearch}
                returnKeyType="search"
              />
            </View>
            
            <FlatList
              data={recommendedTopics}
              renderItem={renderTopicItem}
              keyExtractor={(item, index) => `modal-topic-${index}`}
              style={styles.topicList}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default PostCreateScreen;

