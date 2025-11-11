

import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  
  // 顶部导航栏
  header: {
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  
  backButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1e293b',
  },
  
  publishButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 12,
  },
  
  publishButtonEnabled: {
    backgroundColor: '#6366f1',
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
  
  publishButtonDisabled: {
    backgroundColor: '#e2e8f0',
  },
  
  publishButtonText: {
    fontSize: 14,
    fontWeight: '500',
  },
  
  publishButtonTextEnabled: {
    color: '#ffffff',
  },
  
  publishButtonTextDisabled: {
    color: '#94a3b8',
  },
  
  // 滚动视图
  scrollView: {
    flex: 1,
  },
  
  // 用户信息
  userInfoSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    gap: 12,
  },
  
  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  
  userInfoContent: {
    flex: 1,
  },
  
  userNickname: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1e293b',
    marginBottom: 2,
  },
  
  publishTip: {
    fontSize: 14,
    color: '#64748b',
  },
  
  // 文本输入框
  textInputSection: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 16,
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
  
  contentInput: {
    fontSize: 16,
    color: '#1e293b',
    minHeight: 120,
    textAlignVertical: 'top',
  },
  
  textInputFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  
  charCount: {
    fontSize: 14,
    color: '#64748b',
  },
  
  textInputActions: {
    flexDirection: 'row',
    gap: 16,
  },
  
  textInputActionButton: {
    padding: 4,
  },
  
  // 媒体选择
  mediaSection: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 16,
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
  
  mediaButtons: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 12,
  },
  
  mediaButton: {
    alignItems: 'center',
    gap: 4,
  },
  
  mediaButtonIcon: {
    width: 48,
    height: 48,
    backgroundColor: '#f1f5f9',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  mediaButtonText: {
    fontSize: 12,
    color: '#64748b',
  },
  
  // 图片预览
  imagePreviewList: {
    marginTop: 12,
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
  
  imageRemoveButton: {
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
  
  // 话题选择
  topicSection: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 16,
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
  
  topicSectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  
  topicSectionTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1e293b',
  },
  
  addTopicButton: {
    fontSize: 14,
    color: '#6366f1',
  },
  
  // 已选择的话题
  selectedTopicsList: {
    marginBottom: 12,
  },
  
  selectedTopicsRow: {
    justifyContent: 'flex-start',
    gap: 8,
    marginBottom: 8,
  },
  
  selectedTopicTag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(99, 102, 241, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(99, 102, 241, 0.2)',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    gap: 8,
  },
  
  selectedTopicText: {
    fontSize: 14,
    color: '#6366f1',
  },
  
  removeTopicButton: {
    padding: 2,
  },
  
  // 推荐话题
  recommendedTopics: {
    marginTop: 12,
  },
  
  recommendedTopicsTitle: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 8,
  },
  
  recommendedTopicsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  
  recommendedTopicTag: {
    backgroundColor: 'rgba(99, 102, 241, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(99, 102, 241, 0.2)',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  
  recommendedTopicTagSelected: {
    backgroundColor: '#6366f1',
    borderColor: '#6366f1',
  },
  
  recommendedTopicText: {
    fontSize: 14,
    color: '#6366f1',
  },
  
  recommendedTopicTextSelected: {
    color: '#ffffff',
  },
  
  // 设置部分
  settingsSection: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    gap: 12,
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
  
  settingsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
  
  settingsItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  
  settingsItemText: {
    fontSize: 16,
    color: '#1e293b',
  },
  
  settingsItemRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  
  settingsItemValue: {
    fontSize: 14,
    color: '#64748b',
  },
  
  // 弹窗样式
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  
  modalBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  
  modalContent: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 16,
    maxHeight: '80%',
  },
  
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1e293b',
  },
  
  topicSearchContainer: {
    marginBottom: 16,
  },
  
  topicSearchInput: {
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: '#1e293b',
  },
  
  topicList: {
    maxHeight: 240,
  },
  
  topicItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f1f5f9',
    borderRadius: 12,
    padding: 12,
    marginBottom: 8,
  },
  
  topicItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  
  topicItemText: {
    fontSize: 16,
    color: '#1e293b',
    flex: 1,
  },
  
  topicItemCount: {
    fontSize: 14,
    color: '#64748b',
  },
});

