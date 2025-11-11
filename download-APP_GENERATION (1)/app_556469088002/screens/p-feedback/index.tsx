

import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert, KeyboardAvoidingView, Platform, Modal, ActivityIndicator, Image, FlatList, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import * as ImagePicker from 'expo-image-picker';
import styles from './styles';

interface UploadedImage {
  uri: string;
  fileName?: string;
}

type FeedbackType = 'bug' | 'suggestion' | 'other' | '';

const FeedbackScreen = () => {
  const router = useRouter();
  const [selectedFeedbackType, setSelectedFeedbackType] = useState<FeedbackType>('');
  const [feedbackContent, setFeedbackContent] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [uploadedImages, setUploadedImages] = useState<UploadedImage[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showLoadingModal, setShowLoadingModal] = useState(false);

  const maxImages = 3;
  const maxContentLength = 500;

  const handleBackPress = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };

  const handleFeedbackTypeSelect = (type: FeedbackType) => {
    setSelectedFeedbackType(type);
  };

  const handleContentChange = (text: string) => {
    if (text.length <= maxContentLength) {
      setFeedbackContent(text);
    }
  };

  const handleImageUpload = async () => {
    if (uploadedImages.length >= maxImages) {
      Alert.alert('提示', `最多只能上传${maxImages}张图片`);
      return;
    }

    try {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      
      if (status !== 'granted') {
        Alert.alert('权限不足', '需要访问相册权限才能上传图片');
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsMultipleSelection: true,
        quality: 0.8,
        selectionLimit: maxImages - uploadedImages.length,
      });

      if (!result.canceled && result.assets) {
        const newImages: UploadedImage[] = result.assets.map(asset => ({
          uri: asset.uri,
          fileName: asset.fileName,
        }));
        
        setUploadedImages(prev => [...prev, ...newImages]);
      }
    } catch (error) {
      Alert.alert('错误', '上传图片失败，请重试');
    }
  };

  const handleRemoveImage = (index: number) => {
    setUploadedImages(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    const content = feedbackContent.trim();
    
    if (!content) {
      Alert.alert('提示', '请填写反馈内容');
      return;
    }
    
    if (content.length < 10) {
      Alert.alert('提示', '反馈内容至少需要10个字符');
      return;
    }

    setIsSubmitting(true);
    setShowLoadingModal(true);

    try {
      // 模拟提交过程
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('提交反馈数据:', {
        type: selectedFeedbackType,
        content: content,
        contactInfo: contactInfo.trim(),
        images: uploadedImages.length
      });

      Alert.alert(
        '提交成功',
        '反馈已提交，感谢您的支持！我们会尽快处理您的反馈。',
        [
          {
            text: '确定',
            onPress: () => {
              if (router.canGoBack()) {
                router.back();
              }
            }
          }
        ]
      );
    } catch (error) {
      Alert.alert('提交失败', '网络错误，请稍后重试');
    } finally {
      setIsSubmitting(false);
      setShowLoadingModal(false);
    }
  };

  const renderFeedbackTypeButton = (
    type: FeedbackType,
    icon: string,
    label: string
  ) => {
    const isSelected = selectedFeedbackType === type;
    
    return (
      <TouchableOpacity
        key={type}
        style={[
          styles.feedbackTypeButton,
          isSelected && styles.feedbackTypeButtonSelected
        ]}
        onPress={() => handleFeedbackTypeSelect(type)}
        activeOpacity={0.7}
      >
        <FontAwesome6
          name={icon}
          style={[
            styles.feedbackTypeIcon,
            isSelected && styles.feedbackTypeIconSelected
          ]}
        />
        <Text
          style={[
            styles.feedbackTypeText,
            isSelected && styles.feedbackTypeTextSelected
          ]}
        >
          {label}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderImagePreview = ({ item, index }: { item: UploadedImage; index: number }) => (
    <View style={styles.imagePreviewContainer}>
      <Image source={{ uri: item.uri }} style={styles.imagePreview} />
      <TouchableOpacity
        style={styles.removeImageButton}
        onPress={() => handleRemoveImage(index)}
        activeOpacity={0.7}
      >
        <FontAwesome6 name="xmark" style={styles.removeImageIcon} />
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
              activeOpacity={0.7}
            >
              <FontAwesome6 name="arrow-left" style={styles.backIcon} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>意见反馈</Text>
            <View style={styles.headerPlaceholder} />
          </View>
        </LinearGradient>

        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* 反馈类型选择 */}
          <View style={styles.section}>
            <Text style={styles.sectionLabel}>反馈类型</Text>
            <View style={styles.feedbackTypeContainer}>
              {renderFeedbackTypeButton('bug', 'bug', '问题反馈')}
              {renderFeedbackTypeButton('suggestion', 'lightbulb', '功能建议')}
              {renderFeedbackTypeButton('other', 'comment', '其他')}
            </View>
          </View>

          {/* 反馈内容 */}
          <View style={styles.section}>
            <Text style={styles.sectionLabel}>
              反馈内容 <Text style={styles.required}>*</Text>
            </Text>
            <TextInput
              style={styles.textArea}
              value={feedbackContent}
              onChangeText={handleContentChange}
              placeholder="请详细描述您遇到的问题或建议，我们会认真对待每一份反馈..."
              placeholderTextColor="#94a3b8"
              multiline
              numberOfLines={6}
              textAlignVertical="top"
              maxLength={maxContentLength}
            />
            <View style={styles.textAreaFooter}>
              <Text style={styles.textAreaHint}>
                请提供详细信息以便我们更好地帮助您
              </Text>
              <Text style={styles.characterCounter}>
                {feedbackContent.length}/{maxContentLength}
              </Text>
            </View>
          </View>

          {/* 联系方式 */}
          <View style={styles.section}>
            <Text style={styles.sectionLabel}>
              联系方式 <Text style={styles.optional}>(可选)</Text>
            </Text>
            <TextInput
              style={styles.textInput}
              value={contactInfo}
              onChangeText={setContactInfo}
              placeholder="请留下您的邮箱或手机号，方便我们回复您"
              placeholderTextColor="#94a3b8"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <Text style={styles.inputHint}>我们会严格保护您的隐私信息</Text>
          </View>

          {/* 图片上传 */}
          <View style={styles.section}>
            <Text style={styles.sectionLabel}>
              上传截图 <Text style={styles.optional}>(可选)</Text>
            </Text>
            <TouchableOpacity
              style={styles.uploadArea}
              onPress={handleImageUpload}
              activeOpacity={0.7}
            >
              <FontAwesome6 name="cloud-arrow-up" style={styles.uploadIcon} />
              <Text style={styles.uploadText}>点击上传图片</Text>
              <Text style={styles.uploadHint}>
                支持 JPG、PNG 格式，最多{maxImages}张
              </Text>
            </TouchableOpacity>

            {/* 图片预览 */}
            {uploadedImages.length > 0 && (
              <FlatList
                data={uploadedImages}
                renderItem={renderImagePreview}
                keyExtractor={(item, index) => `image-${index}`}
                numColumns={3}
                scrollEnabled={false}
                contentContainerStyle={styles.imagePreviewList}
                columnWrapperStyle={styles.imagePreviewRow}
              />
            )}
          </View>

          {/* 提交按钮 */}
          <View style={styles.submitSection}>
            <TouchableOpacity
              style={[styles.submitButton, isSubmitting && styles.submitButtonDisabled]}
              onPress={handleSubmit}
              disabled={isSubmitting}
              activeOpacity={0.8}
            >
              <FontAwesome6
                name={isSubmitting ? 'spinner' : 'paper-plane'}
                style={[styles.submitIcon, isSubmitting && styles.spinningIcon]}
              />
              <Text style={styles.submitText}>
                {isSubmitting ? '提交中...' : '提交反馈'}
              </Text>
            </TouchableOpacity>
          </View>

          {/* 温馨提示 */}
          <View style={styles.tipsSection}>
            <View style={styles.tipsContent}>
              <FontAwesome6 name="circle-info" style={styles.tipsIcon} />
              <View style={styles.tipsTextContainer}>
                <Text style={styles.tipsTitle}>温馨提示</Text>
                <View style={styles.tipsList}>
                  <Text style={styles.tipsItem}>• 我们会在1-3个工作日内处理您的反馈</Text>
                  <Text style={styles.tipsItem}>• 如提供联系方式，我们会主动回复处理结果</Text>
                  <Text style={styles.tipsItem}>• 您的反馈对我们改进产品非常重要</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      {/* 加载模态框 */}
      <Modal
        visible={showLoadingModal}
        transparent
        animationType="fade"
      >
        <View style={styles.loadingOverlay}>
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#6366f1" />
            <Text style={styles.loadingText}>正在提交反馈...</Text>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default FeedbackScreen;

