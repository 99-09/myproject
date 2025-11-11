

import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButton: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    color: '#ffffff',
    fontSize: 18,
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
  saveButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#ffffff',
    borderRadius: 12,
  },
  saveButtonDisabled: {
    backgroundColor: '#e2e8f0',
  },
  saveButtonText: {
    color: '#6366f1',
    fontSize: 14,
    fontWeight: '500',
  },
  saveButtonTextDisabled: {
    color: '#94a3b8',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  avatarSection: {
    alignItems: 'center',
    marginBottom: 32,
  },
  avatarUpload: {
    position: 'relative',
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    borderWidth: 4,
    borderColor: '#ffffff',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  avatarOverlay: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 32,
    height: 32,
    backgroundColor: '#6366f1',
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cameraIcon: {
    color: '#ffffff',
    fontSize: 14,
  },
  avatarHint: {
    color: '#64748b',
    fontSize: 14,
    marginTop: 8,
  },
  formContainer: {
    gap: 24,
  },
  formSection: {
    gap: 8,
  },
  formLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1e293b',
  },
  textInput: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: '#1e293b',
  },
  textInputError: {
    borderColor: '#ef4444',
  },
  bioInput: {
    height: 80,
    paddingTop: 12,
  },
  errorText: {
    color: '#ef4444',
    fontSize: 12,
  },
  genderContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  genderButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 16,
    backgroundColor: '#ffffff',
    gap: 8,
  },
  genderButtonSelected: {
    backgroundColor: '#6366f1',
    borderColor: '#6366f1',
  },
  genderIcon: {
    color: '#64748b',
    fontSize: 16,
  },
  genderIconSelected: {
    color: '#ffffff',
  },
  genderText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1e293b',
  },
  genderTextSelected: {
    color: '#ffffff',
  },
  bioCounter: {
    textAlign: 'right',
    fontSize: 12,
    color: '#64748b',
  },
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
  loadingContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    gap: 12,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  loadingSpinner: {
    width: 32,
    height: 32,
    borderWidth: 3,
    borderColor: '#e2e8f0',
    borderTopColor: '#6366f1',
    borderRadius: 16,
  },
  loadingText: {
    fontSize: 16,
    color: '#1e293b',
  },
});

