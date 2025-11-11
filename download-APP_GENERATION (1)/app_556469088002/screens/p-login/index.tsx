

import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert, KeyboardAvoidingView, Platform, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome6 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import styles from './styles';

type FormMode = 'login' | 'register' | 'reset';

interface FormData {
  loginPhone: string;
  loginPassword: string;
  registerPhone: string;
  registerCode: string;
  registerPassword: string;
  resetPhone: string;
  resetCode: string;
  resetPassword: string;
}

const LoginScreen: React.FC = () => {
  const router = useRouter();
  
  // 表单模式状态
  const [currentFormMode, setCurrentFormMode] = useState<FormMode>('login');
  
  // 密码显示状态
  const [isLoginPasswordVisible, setIsLoginPasswordVisible] = useState(false);
  const [isRegisterPasswordVisible, setIsRegisterPasswordVisible] = useState(false);
  const [isResetPasswordVisible, setIsResetPasswordVisible] = useState(false);
  
  // 验证码倒计时状态
  const [registerCodeCountdown, setRegisterCodeCountdown] = useState(0);
  const [resetCodeCountdown, setResetCodeCountdown] = useState(0);
  
  // 表单数据状态
  const [formData, setFormData] = useState<FormData>({
    loginPhone: '',
    loginPassword: '',
    registerPhone: '',
    registerCode: '',
    registerPassword: '',
    resetPhone: '',
    resetCode: '',
    resetPassword: '',
  });
  
  // Toast状态
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  
  // 倒计时定时器引用
  const registerTimerRef = useRef<number | null>(null);
  const resetTimerRef = useRef<number | null>(null);

  // 显示Toast消息
  const showToast = (message: string) => {
    setToastMessage(message);
    setIsToastVisible(true);
    setTimeout(() => {
      setIsToastVisible(false);
    }, 3000);
  };

  // 验证手机号格式
  const validatePhoneNumber = (phone: string): boolean => {
    const phoneRegex = /^1[3-9]\d{9}$/;
    return phoneRegex.test(phone);
  };

  // 开始验证码倒计时
  const startCodeCountdown = (type: 'register' | 'reset') => {
    const countdownState = type === 'register' ? setRegisterCodeCountdown : setResetCodeCountdown;
    const timerRef = type === 'register' ? registerTimerRef : resetTimerRef;
    
    countdownState(60);
    timerRef.current = setInterval(() => {
      countdownState((prev) => {
        if (prev <= 1) {
          if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  // 获取验证码
  const handleGetVerificationCode = (type: 'register' | 'reset') => {
    const phone = type === 'register' ? formData.registerPhone : formData.resetPhone;
    
    if (!phone) {
      showToast('请先输入手机号');
      return;
    }
    
    if (!validatePhoneNumber(phone)) {
      showToast('请输入正确的手机号');
      return;
    }
    
    showToast('验证码已发送');
    startCodeCountdown(type);
  };

  // 切换表单模式
  const switchToLoginMode = () => {
    setCurrentFormMode('login');
  };

  const switchToRegisterMode = () => {
    setCurrentFormMode('register');
  };

  const switchToResetPasswordMode = () => {
    setCurrentFormMode('reset');
  };

  // 处理登录表单提交
  const handleLoginSubmit = () => {
    const { loginPhone, loginPassword } = formData;
    
    if (!loginPhone || !loginPassword) {
      showToast('请填写完整信息');
      return;
    }
    
    if (!validatePhoneNumber(loginPhone)) {
      showToast('请输入正确的手机号');
      return;
    }
    
    showToast('登录成功');
    setTimeout(() => {
      router.replace('/p-home');
    }, 1000);
  };

  // 处理注册表单提交
  const handleRegisterSubmit = () => {
    const { registerPhone, registerCode, registerPassword } = formData;
    
    if (!registerPhone || !registerCode || !registerPassword) {
      showToast('请填写完整信息');
      return;
    }
    
    if (!validatePhoneNumber(registerPhone)) {
      showToast('请输入正确的手机号');
      return;
    }
    
    if (!/^\d{6}$/.test(registerCode)) {
      showToast('请输入6位验证码');
      return;
    }
    
    if (registerPassword.length < 6 || registerPassword.length > 20) {
      showToast('密码长度应为6-20位');
      return;
    }
    
    showToast('注册成功');
    setTimeout(() => {
      router.replace('/p-profile_edit');
    }, 1000);
  };

  // 处理重置密码表单提交
  const handleResetPasswordSubmit = () => {
    const { resetPhone, resetCode, resetPassword } = formData;
    
    if (!resetPhone || !resetCode || !resetPassword) {
      showToast('请填写完整信息');
      return;
    }
    
    if (!validatePhoneNumber(resetPhone)) {
      showToast('请输入正确的手机号');
      return;
    }
    
    if (!/^\d{6}$/.test(resetCode)) {
      showToast('请输入6位验证码');
      return;
    }
    
    if (resetPassword.length < 6 || resetPassword.length > 20) {
      showToast('新密码长度应为6-20位');
      return;
    }
    
    showToast('密码重置成功');
    setTimeout(() => {
      switchToLoginMode();
    }, 1000);
  };

  // 处理第三方登录
  const handleThirdPartyLogin = (platform: string) => {
    showToast(`${platform}登录功能开发中`);
    setTimeout(() => {
      router.replace('/p-profile_edit');
    }, 1000);
  };

  // 处理用户协议点击
  const handleUserAgreementPress = () => {
    showToast('用户协议页面开发中');
  };

  // 处理隐私政策点击
  const handlePrivacyPolicyPress = () => {
    showToast('隐私政策页面开发中');
  };

  // 更新表单数据
  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  // 渲染密码输入框
  const renderPasswordInput = (
    value: string,
    onChangeText: (text: string) => void,
    placeholder: string,
    isVisible: boolean,
    onToggleVisibility: () => void
  ) => (
    <View style={styles.passwordInputContainer}>
      <TextInput
        style={styles.passwordInput}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={!isVisible}
        placeholderTextColor="#64748b"
      />
      <TouchableOpacity
        style={styles.passwordToggleButton}
        onPress={onToggleVisibility}
        activeOpacity={0.7}
      >
        <FontAwesome6
          name={isVisible ? 'eye-slash' : 'eye'}
          size={16}
          color="#64748b"
        />
      </TouchableOpacity>
    </View>
  );

  // 渲染验证码输入框
  const renderVerificationCodeInput = (
    value: string,
    onChangeText: (text: string) => void,
    countdown: number,
    onGetCode: () => void
  ) => (
    <View style={styles.verificationCodeContainer}>
      <TextInput
        style={styles.verificationCodeInput}
        value={value}
        onChangeText={onChangeText}
        placeholder="请输入验证码"
        placeholderTextColor="#64748b"
        keyboardType="numeric"
        maxLength={6}
      />
      <TouchableOpacity
        style={[
          styles.getCodeButton,
          countdown > 0 && styles.getCodeButtonDisabled
        ]}
        onPress={onGetCode}
        disabled={countdown > 0}
        activeOpacity={0.7}
      >
        <Text style={[
          styles.getCodeButtonText,
          countdown > 0 && styles.getCodeButtonTextDisabled
        ]}>
          {countdown > 0 ? `${countdown}秒后重试` : '获取验证码'}
        </Text>
      </TouchableOpacity>
    </View>
  );

  // 渲染登录表单
  const renderLoginForm = () => (
    <View style={styles.formContainer}>
      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>手机号</Text>
        <TextInput
          style={styles.textInput}
          value={formData.loginPhone}
          onChangeText={(text) => updateFormData('loginPhone', text)}
          placeholder="请输入手机号"
          placeholderTextColor="#64748b"
          keyboardType="phone-pad"
          maxLength={11}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>密码</Text>
        {renderPasswordInput(
          formData.loginPassword,
          (text) => updateFormData('loginPassword', text),
          '请输入密码',
          isLoginPasswordVisible,
          () => setIsLoginPasswordVisible(!isLoginPasswordVisible)
        )}
      </View>

      <View style={styles.forgotPasswordContainer}>
        <TouchableOpacity
          onPress={switchToResetPasswordMode}
          activeOpacity={0.7}
        >
          <Text style={styles.forgotPasswordText}>忘记密码？</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.primaryButton}
        onPress={handleLoginSubmit}
        activeOpacity={0.8}
      >
        <LinearGradient
          colors={['#6366f1', '#8b5cf6']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.primaryButtonGradient}
        >
          <Text style={styles.primaryButtonText}>登录</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );

  // 渲染注册表单
  const renderRegisterForm = () => (
    <View style={styles.formContainer}>
      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>手机号</Text>
        <TextInput
          style={styles.textInput}
          value={formData.registerPhone}
          onChangeText={(text) => updateFormData('registerPhone', text)}
          placeholder="请输入手机号"
          placeholderTextColor="#64748b"
          keyboardType="phone-pad"
          maxLength={11}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>验证码</Text>
        {renderVerificationCodeInput(
          formData.registerCode,
          (text) => updateFormData('registerCode', text),
          registerCodeCountdown,
          () => handleGetVerificationCode('register')
        )}
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>设置密码</Text>
        {renderPasswordInput(
          formData.registerPassword,
          (text) => updateFormData('registerPassword', text),
          '请设置6-20位密码',
          isRegisterPasswordVisible,
          () => setIsRegisterPasswordVisible(!isRegisterPasswordVisible)
        )}
      </View>

      <TouchableOpacity
        style={styles.primaryButton}
        onPress={handleRegisterSubmit}
        activeOpacity={0.8}
      >
        <LinearGradient
          colors={['#6366f1', '#8b5cf6']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.primaryButtonGradient}
        >
          <Text style={styles.primaryButtonText}>注册</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );

  // 渲染重置密码表单
  const renderResetPasswordForm = () => (
    <View style={styles.formContainer}>
      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>手机号</Text>
        <TextInput
          style={styles.textInput}
          value={formData.resetPhone}
          onChangeText={(text) => updateFormData('resetPhone', text)}
          placeholder="请输入手机号"
          placeholderTextColor="#64748b"
          keyboardType="phone-pad"
          maxLength={11}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>验证码</Text>
        {renderVerificationCodeInput(
          formData.resetCode,
          (text) => updateFormData('resetCode', text),
          resetCodeCountdown,
          () => handleGetVerificationCode('reset')
        )}
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>新密码</Text>
        {renderPasswordInput(
          formData.resetPassword,
          (text) => updateFormData('resetPassword', text),
          '请设置6-20位新密码',
          isResetPasswordVisible,
          () => setIsResetPasswordVisible(!isResetPasswordVisible)
        )}
      </View>

      <View style={styles.resetPasswordButtonContainer}>
        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={switchToLoginMode}
          activeOpacity={0.8}
        >
          <Text style={styles.secondaryButtonText}>返回登录</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={handleResetPasswordSubmit}
          activeOpacity={0.8}
        >
          <LinearGradient
            colors={['#6366f1', '#8b5cf6']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.primaryButtonGradient}
          >
            <Text style={styles.primaryButtonText}>重置密码</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <LinearGradient
          colors={['#6366f1', '#8b5cf6']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradientBackground}
        >
          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.scrollViewContent}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
          >
            {/* 顶部Logo和产品名称 */}
            <View style={styles.headerSection}>
              <View style={styles.logoContainer}>
                <View style={styles.appLogo}>
                  <FontAwesome6 name="seedling" size={32} color="#ffffff" />
                </View>
                <Text style={styles.appName}>鼠鼠能量补给站</Text>
                <Text style={styles.appSlogan}>让每一天都充满能量 ✨</Text>
              </View>

              {/* 表单容器 */}
              <View style={styles.formWrapper}>
                {/* 模式切换标签 */}
                {currentFormMode !== 'reset' && (
                  <View style={styles.modeTabs}>
                    <TouchableOpacity
                      style={[
                        styles.modeTab,
                        currentFormMode === 'login' && styles.modeTabActive
                      ]}
                      onPress={switchToLoginMode}
                      activeOpacity={0.8}
                    >
                      <Text style={[
                        styles.modeTabText,
                        currentFormMode === 'login' && styles.modeTabTextActive
                      ]}>
                        登录
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[
                        styles.modeTab,
                        currentFormMode === 'register' && styles.modeTabActive
                      ]}
                      onPress={switchToRegisterMode}
                      activeOpacity={0.8}
                    >
                      <Text style={[
                        styles.modeTabText,
                        currentFormMode === 'register' && styles.modeTabTextActive
                      ]}>
                        注册
                      </Text>
                    </TouchableOpacity>
                  </View>
                )}

                {/* 表单内容 */}
                {currentFormMode === 'login' && renderLoginForm()}
                {currentFormMode === 'register' && renderRegisterForm()}
                {currentFormMode === 'reset' && renderResetPasswordForm()}

                {/* 分割线 */}
                {currentFormMode !== 'reset' && (
                  <View style={styles.divider}>
                    <View style={styles.dividerLine} />
                    <Text style={styles.dividerText}>或</Text>
                    <View style={styles.dividerLine} />
                  </View>
                )}

                {/* 第三方登录 */}
                {currentFormMode !== 'reset' && (
                  <View style={styles.thirdPartyLogin}>
                    <Text style={styles.thirdPartyLoginTitle}>使用第三方账号登录</Text>
                    <View style={styles.thirdPartyButtons}>
                      <TouchableOpacity
                        style={[styles.thirdPartyButton, styles.wechatButton]}
                        onPress={() => handleThirdPartyLogin('微信')}
                        activeOpacity={0.8}
                      >
                        <FontAwesome6 name="weixin" size={20} color="#ffffff" />
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[styles.thirdPartyButton, styles.qqButton]}
                        onPress={() => handleThirdPartyLogin('QQ')}
                        activeOpacity={0.8}
                      >
                        <FontAwesome6 name="qq" size={20} color="#ffffff" />
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[styles.thirdPartyButton, styles.appleButton]}
                        onPress={() => handleThirdPartyLogin('Apple ID')}
                        activeOpacity={0.8}
                      >
                        <FontAwesome6 name="apple" size={20} color="#ffffff" />
                      </TouchableOpacity>
                    </View>
                  </View>
                )}

                {/* 用户协议 */}
                {currentFormMode !== 'reset' && (
                  <View style={styles.userAgreement}>
                    <Text style={styles.userAgreementText}>
                      登录即表示同意
                      <Text style={styles.userAgreementLink} onPress={handleUserAgreementPress}>
                        《用户协议》
                      </Text>
                      和
                      <Text style={styles.userAgreementLink} onPress={handlePrivacyPolicyPress}>
                        《隐私政策》
                      </Text>
                    </Text>
                  </View>
                )}
              </View>
            </View>
          </ScrollView>
        </LinearGradient>
      </KeyboardAvoidingView>

      {/* Toast消息 */}
      {isToastVisible && (
        <View style={styles.toastContainer}>
          <View style={styles.toast}>
            <Text style={styles.toastText}>{toastMessage}</Text>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default LoginScreen;

