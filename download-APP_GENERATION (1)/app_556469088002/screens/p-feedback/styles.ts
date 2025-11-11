

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
  headerPlaceholder: {
    width: 40,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  section: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.06,
        shadowRadius: 8,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  sectionLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1e293b',
    marginBottom: 12,
  },
  required: {
    color: '#ef4444',
  },
  optional: {
    color: '#64748b',
  },
  feedbackTypeContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  feedbackTypeButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 12,
    backgroundColor: '#ffffff',
  },
  feedbackTypeButtonSelected: {
    borderColor: '#6366f1',
    backgroundColor: 'rgba(99, 102, 241, 0.1)',
  },
  feedbackTypeIcon: {
    color: '#64748b',
    fontSize: 12,
    marginRight: 4,
  },
  feedbackTypeIconSelected: {
    color: '#6366f1',
  },
  feedbackTypeText: {
    fontSize: 12,
    color: '#64748b',
  },
  feedbackTypeTextSelected: {
    color: '#6366f1',
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 12,
    padding: 16,
    fontSize: 14,
    color: '#1e293b',
    minHeight: 120,
    maxHeight: 200,
    backgroundColor: '#ffffff',
  },
  textAreaFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  textAreaHint: {
    fontSize: 12,
    color: '#64748b',
    flex: 1,
  },
  characterCounter: {
    fontSize: 12,
    color: '#64748b',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 12,
    padding: 16,
    fontSize: 14,
    color: '#1e293b',
    backgroundColor: '#ffffff',
    height: 48,
  },
  inputHint: {
    fontSize: 12,
    color: '#64748b',
    marginTop: 8,
  },
  uploadArea: {
    borderWidth: 2,
    borderColor: '#e2e8f0',
    borderStyle: 'dashed',
    borderRadius: 12,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  uploadIcon: {
    color: '#64748b',
    fontSize: 32,
    marginBottom: 8,
  },
  uploadText: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 4,
  },
  uploadHint: {
    fontSize: 12,
    color: '#64748b',
  },
  imagePreviewList: {
    marginTop: 16,
  },
  imagePreviewRow: {
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  imagePreviewContainer: {
    position: 'relative',
    width: '30%',
    aspectRatio: 1,
  },
  imagePreview: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  removeImageButton: {
    position: 'absolute',
    top: -8,
    right: -8,
    width: 20,
    height: 20,
    backgroundColor: '#ef4444',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  removeImageIcon: {
    color: '#ffffff',
    fontSize: 10,
  },
  submitSection: {
    paddingTop: 16,
    marginBottom: 24,
  },
  submitButton: {
    backgroundColor: '#6366f1',
    borderRadius: 12,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#6366f1',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  submitButtonDisabled: {
    backgroundColor: '#d1d5db',
  },
  submitIcon: {
    color: '#ffffff',
    fontSize: 16,
    marginRight: 8,
  },
  spinningIcon: {
    // 旋转动画可以通过 react-native-reanimated 实现
  },
  submitText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
  },
  tipsSection: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.06,
        shadowRadius: 8,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  tipsContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  tipsIcon: {
    color: '#3b82f6',
    fontSize: 18,
    marginTop: 2,
    marginRight: 12,
  },
  tipsTextContainer: {
    flex: 1,
  },
  tipsTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1e293b',
    marginBottom: 8,
  },
  tipsList: {
    gap: 4,
  },
  tipsItem: {
    fontSize: 12,
    color: '#64748b',
    lineHeight: 16,
  },
  loadingOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    minWidth: 160,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 12,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  loadingText: {
    color: '#1e293b',
    fontSize: 14,
    marginTop: 12,
    textAlign: 'center',
  },
});

