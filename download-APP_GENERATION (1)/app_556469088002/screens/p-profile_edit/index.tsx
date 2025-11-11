

import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert, KeyboardAvoidingView, Platform, Image, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

interface ProfileData {
  nickname: string;
  gender: 'female' | 'male' | 'other';
  birthday: string;
  bio: string;
  avatar: string;
}

const ProfileEditScreen: React.FC = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  const userId = params.user_id as string || 'default_user';

  // 表单状态
  const [profileData, setProfileData] = useState<ProfileData>({
    nickname: '小雨',
    gender: 'female',
    birthday: '1998-06-15',
    bio: '热爱生活，享受每一个当下 ✨',
    avatar: 'https://s.coze.cn/image/tMMopIXnzks/',
  });

  // 原始数据（用于判断是否有修改）
  const originalData = useRef<ProfileData>({ ...profileData });

  // UI状态
  const [isLoading, setIsLoading] = useState(false);
  const [showNicknameError, setShowNicknameError] = useState(false);

  // 检查是否有未保存的修改
  const hasUnsavedChanges = (): boolean => {
    return JSON.stringify(profileData) !== JSON.stringify(originalData.current);
  };

  // 检查保存按钮是否应该启用
  const isSaveButtonEnabled = (): boolean => {
    return hasUnsavedChanges() && profileData.nickname.trim() !== '';
  };

  // 处理返回按钮
  const handleBackPress = () => {
    if (hasUnsavedChanges()) {
      Alert.alert(
        '提示',
        '您有未保存的修改，确定要离开吗？',
        [
          { text: '取消', style: 'cancel' },
          { text: '确定', onPress: () => router.back() },
        ]
      );
    } else {
      router.back();
    }
  };

  // 处理头像上传
  const handleAvatarUpload = async () => {
    try {
      // 请求相册权限
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('权限不足', '需要访问相册权限来更换头像');
        return;
      }

      // 打开图片选择器
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.8,
      });

      if (!result.canceled && result.assets[0]) {
        setProfileData(prev => ({
          ...prev,
          avatar: result.assets[0].uri,
        }));
      }
    } catch (error) {
      Alert.alert('错误', '头像上传失败，请重试');
    }
  };

  // 处理性别选择
  const handleGenderSelect = (gender: 'female' | 'male' | 'other') => {
    setProfileData(prev => ({ ...prev, gender }));
  };

  // 处理昵称输入
  const handleNicknameChange = (text: string) => {
    setProfileData(prev => ({ ...prev, nickname: text }));
    if (text.trim() === '') {
      setShowNicknameError(true);
    } else {
      setShowNicknameError(false);
    }
  };

  // 处理生日选择
  const handleBirthdayChange = (text: string) => {
    setProfileData(prev => ({ ...prev, birthday: text }));
  };

  // 处理个性签名输入
  const handleBioChange = (text: string) => {
    if (text.length <= 50) {
      setProfileData(prev => ({ ...prev, bio: text }));
    }
  };

  // 处理保存
  const handleSave = async () => {
    if (!isSaveButtonEnabled()) return;

    // 验证表单
    if (profileData.nickname.trim() === '') {
      setShowNicknameError(true);
      return;
    }

    setIsLoading(true);

    try {
      // 模拟保存过程
      await new Promise(resolve => setTimeout(resolve, 1500));

      console.log('保存用户资料:', {
        user_id: userId,
        ...profileData,
      });

      Alert.alert('成功', '保存成功！', [
        { text: '确定', onPress: () => router.back() },
      ]);
    } catch (error) {
      Alert.alert('错误', '保存失败，请重试');
    } finally {
      setIsLoading(false);
    }
  };

  // 渲染性别选择按钮
  const renderGenderButton = (
    gender: 'female' | 'male' | 'other',
    label: string,
    icon: string
  ) => {
    const isSelected = profileData.gender === gender;
    return (
      <TouchableOpacity
        key={gender}
        style={[styles.genderButton, isSelected && styles.genderButtonSelected]}
        onPress={() => handleGenderSelect(gender)}
        activeOpacity={0.7}
      >
        <FontAwesome6
          name={icon}
          style={[styles.genderIcon, isSelected && styles.genderIconSelected]}
        />
        <Text style={[styles.genderText, isSelected && styles.genderTextSelected]}>
          {label}
        </Text>
      </TouchableOpacity>
    );
  };

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
            
            <Text style={styles.headerTitle}>编辑资料</Text>
            
            <TouchableOpacity
              style={[
                styles.saveButton,
                !isSaveButtonEnabled() && styles.saveButtonDisabled,
              ]}
              onPress={handleSave}
              disabled={!isSaveButtonEnabled() || isLoading}
              activeOpacity={0.7}
            >
              <Text
                style={[
                  styles.saveButtonText,
                  !isSaveButtonEnabled() && styles.saveButtonTextDisabled,
                ]}
              >
                保存
              </Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>

        {/* 主要内容区域 */}
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* 头像上传区域 */}
          <View style={styles.avatarSection}>
            <TouchableOpacity
              style={styles.avatarUpload}
              onPress={handleAvatarUpload}
              activeOpacity={0.8}
            >
              <Image source={{ uri: profileData.avatar }} style={styles.avatar} />
              <View style={styles.avatarOverlay}>
                <FontAwesome6 name="camera" style={styles.cameraIcon} />
              </View>
            </TouchableOpacity>
            <Text style={styles.avatarHint}>点击头像更换照片</Text>
          </View>

          {/* 个人信息表单 */}
          <View style={styles.formContainer}>
            {/* 昵称 */}
            <View style={styles.formSection}>
              <Text style={styles.formLabel}>昵称</Text>
              <TextInput
                style={[
                  styles.textInput,
                  showNicknameError && styles.textInputError,
                ]}
                placeholder="请输入昵称"
                value={profileData.nickname}
                onChangeText={handleNicknameChange}
                placeholderTextColor="#94a3b8"
              />
              {showNicknameError && (
                <Text style={styles.errorText}>昵称不能为空</Text>
              )}
            </View>

            {/* 性别 */}
            <View style={styles.formSection}>
              <Text style={styles.formLabel}>性别</Text>
              <View style={styles.genderContainer}>
                {renderGenderButton('female', '女', 'venus')}
                {renderGenderButton('male', '男', 'mars')}
                {renderGenderButton('other', '其他', 'genderless')}
              </View>
            </View>

            {/* 生日 */}
            <View style={styles.formSection}>
              <Text style={styles.formLabel}>生日</Text>
              <TextInput
                style={styles.textInput}
                placeholder="YYYY-MM-DD"
                value={profileData.birthday}
                onChangeText={handleBirthdayChange}
                placeholderTextColor="#94a3b8"
              />
            </View>

            {/* 个性签名 */}
            <View style={styles.formSection}>
              <Text style={styles.formLabel}>个性签名</Text>
              <TextInput
                style={[styles.textInput, styles.bioInput]}
                placeholder="写点什么来介绍自己吧..."
                value={profileData.bio}
                onChangeText={handleBioChange}
                multiline
                numberOfLines={3}
                textAlignVertical="top"
                placeholderTextColor="#94a3b8"
              />
              <Text style={styles.bioCounter}>
                {profileData.bio.length}/50
              </Text>
            </View>
          </View>
        </ScrollView>

        {/* 加载提示 */}
        {isLoading && (
          <View style={styles.loadingOverlay}>
            <View style={styles.loadingContainer}>
              <View style={styles.loadingSpinner} />
              <Text style={styles.loadingText}>保存中...</Text>
            </View>
          </View>
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ProfileEditScreen;

