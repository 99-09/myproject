

import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  
  // 顶部导航栏
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
    fontSize: 20,
    fontWeight: '600',
  },
  headerPlaceholder: {
    width: 40,
  },

  // 滚动视图
  scrollView: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 24,
    paddingVertical: 24,
    paddingBottom: 80,
  },

  // 评估区域
  assessmentSection: {
    marginBottom: 32,
  },
  assessmentCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
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
  assessmentTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  assessmentTitleIcon: {
    color: '#6366f1',
    fontSize: 16,
    marginRight: 8,
  },
  assessmentTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1e293b',
  },

  // 评估组
  assessmentGroup: {
    marginBottom: 24,
  },
  assessmentGroupTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1e293b',
    marginBottom: 12,
  },
  assessmentOptions: {
    flexDirection: 'row',
    gap: 8,
  },

  // 评估选项
  assessmentOption: {
    flex: 1,
    backgroundColor: '#f1f5f9',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 60,
  },
  assessmentOptionSelected: {
    backgroundColor: '#6366f1',
    transform: [{ scale: 1.02 }],
  },
  assessmentOptionIcon: {
    color: '#64748b',
    fontSize: 14,
    marginBottom: 4,
  },
  assessmentOptionIconSelected: {
    color: '#ffffff',
  },
  assessmentOptionText: {
    color: '#64748b',
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
  },
  assessmentOptionTextSelected: {
    color: '#ffffff',
  },

  // 完成评估按钮
  completeAssessmentButton: {
    backgroundColor: '#6366f1',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 48,
  },
  completeAssessmentButtonDisabled: {
    backgroundColor: '#d1d5db',
  },
  completeAssessmentButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
  },
  loadingSpinner: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    borderTopColor: '#ffffff',
    borderRadius: 10,
  },

  // 区域标题
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 16,
  },

  // 推荐内容区
  recommendedSection: {
    marginBottom: 32,
  },
  recommendationsContainer: {
    gap: 16,
  },
  recommendationCard: {
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
  recommendationContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  recommendationImage: {
    width: 56,
    height: 56,
    borderRadius: 8,
    marginRight: 12,
  },
  recommendationInfo: {
    flex: 1,
  },
  recommendationTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1e293b',
    marginBottom: 4,
  },
  recommendationDescription: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 8,
  },
  recommendationMeta: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  recommendationDuration: {
    backgroundColor: 'rgba(99, 102, 241, 0.1)',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
    marginRight: 8,
  },
  recommendationDurationText: {
    color: '#6366f1',
    fontSize: 12,
    fontWeight: '500',
  },
  recommendationDifficulty: {
    color: '#64748b',
    fontSize: 12,
  },
  recommendationPlayIcon: {
    color: '#6366f1',
    fontSize: 20,
  },

  // 历史记录区
  historySection: {
    marginBottom: 32,
  },
  historyContainer: {
    gap: 12,
  },
  historyItem: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  historyContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  historyImage: {
    width: 48,
    height: 48,
    borderRadius: 8,
    marginRight: 12,
  },
  historyInfo: {
    flex: 1,
  },
  historyTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1e293b',
    marginBottom: 4,
  },
  historyTime: {
    fontSize: 14,
    color: '#64748b',
  },
  historyRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  historyStatus: {
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
  },
  historyStatusText: {
    color: '#10b981',
    fontSize: 12,
    fontWeight: '500',
  },
  historyChevron: {
    color: '#64748b',
    fontSize: 14,
  },
});

