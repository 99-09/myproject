

import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  gradientBackground: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 48,
    paddingBottom: 24,
  },
  headerSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  appLogo: {
    width: 80,
    height: 80,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  appSlogan: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  formWrapper: {
    width: '100%',
    maxWidth: 320,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 16,
    padding: 24,
    ...Platform.select({
      ios: {
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.06,
        shadowRadius: 8,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  modeTabs: {
    flexDirection: 'row',
    backgroundColor: '#f1f5f9',
    borderRadius: 12,
    padding: 4,
    marginBottom: 24,
  },
  modeTab: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  modeTabActive: {
    backgroundColor: '#ffffff',
    ...Platform.select({
      ios: {
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  modeTabText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#64748b',
  },
  modeTabTextActive: {
    color: '#6366f1',
  },
  formContainer: {
    gap: 16,
  },
  inputGroup: {
    gap: 8,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1e293b',
  },
  textInput: {
    height: 48,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 12,
    fontSize: 16,
    color: '#1e293b',
    backgroundColor: '#ffffff',
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 12,
    backgroundColor: '#ffffff',
  },
  passwordInput: {
    flex: 1,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#1e293b',
  },
  passwordToggleButton: {
    paddingHorizontal: 12,
  },
  verificationCodeContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  verificationCodeInput: {
    flex: 1,
    height: 48,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 12,
    fontSize: 16,
    color: '#1e293b',
    backgroundColor: '#ffffff',
  },
  getCodeButton: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 100,
  },
  getCodeButtonDisabled: {
    opacity: 0.5,
  },
  getCodeButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1e293b',
  },
  getCodeButtonTextDisabled: {
    color: '#64748b',
  },
  forgotPasswordContainer: {
    alignItems: 'flex-end',
  },
  forgotPasswordText: {
    fontSize: 14,
    color: '#6366f1',
  },
  primaryButton: {
    borderRadius: 12,
    overflow: 'hidden',
    marginTop: 8,
  },
  primaryButtonGradient: {
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 48,
  },
  primaryButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
  },
  resetPasswordButtonContainer: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 8,
  },
  secondaryButton: {
    flex: 1,
    paddingVertical: 12,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 48,
  },
  secondaryButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e293b',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 24,
    gap: 16,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#e2e8f0',
  },
  dividerText: {
    fontSize: 14,
    color: '#64748b',
  },
  thirdPartyLogin: {
    alignItems: 'center',
    gap: 16,
  },
  thirdPartyLoginTitle: {
    fontSize: 14,
    color: '#64748b',
  },
  thirdPartyButtons: {
    flexDirection: 'row',
    gap: 16,
  },
  thirdPartyButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wechatButton: {
    backgroundColor: '#10b981',
  },
  qqButton: {
    backgroundColor: '#3b82f6',
  },
  appleButton: {
    backgroundColor: '#1f2937',
  },
  userAgreement: {
    alignItems: 'center',
    marginTop: 24,
  },
  userAgreementText: {
    fontSize: 12,
    color: '#64748b',
    textAlign: 'center',
    lineHeight: 18,
  },
  userAgreementLink: {
    color: '#6366f1',
  },
  toastContainer: {
    position: 'absolute',
    top: 80,
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 1000,
  },
  toast: {
    backgroundColor: '#1e293b',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 12,
    maxWidth: '80%',
  },
  toastText: {
    fontSize: 14,
    color: '#ffffff',
    textAlign: 'center',
  },
});

