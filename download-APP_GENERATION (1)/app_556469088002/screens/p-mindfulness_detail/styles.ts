

import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  
  // 顶部导航栏
  headerGradient: {
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerButton: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
  
  // 滚动容器
  scrollContainer: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 100, // 为浮动播放器留出空间
  },
  
  // 内容卡片
  contentCard: {
    backgroundColor: '#ffffff',
    marginHorizontal: 24,
    marginTop: -16,
    marginBottom: 24,
    borderRadius: 16,
    overflow: 'hidden',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.06,
        shadowRadius: 8,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  
  // 主图
  contentImage: {
    width: '100%',
    height: 192,
  },
  
  // 内容信息
  contentInfo: {
    padding: 24,
  },
  contentTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 8,
  },
  metaInfo: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
    gap: 16,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  metaText: {
    fontSize: 14,
    color: '#64748b',
  },
  
  // 标签
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tagSecondary: {
    backgroundColor: 'rgba(139, 92, 246, 0.1)',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  tagSecondaryText: {
    fontSize: 12,
    color: '#8b5cf6',
  },
  tagTertiary: {
    backgroundColor: 'rgba(6, 182, 212, 0.1)',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  tagTertiaryText: {
    fontSize: 12,
    color: '#06b6d4',
  },
  tagSuccess: {
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  tagSuccessText: {
    fontSize: 12,
    color: '#10b981',
  },
  
  // 音频播放器
  audioPlayerGradient: {
    marginHorizontal: 24,
    marginBottom: 24,
    padding: 16,
    borderRadius: 12,
  },
  audioPlayerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  playButton: {
    width: 48,
    height: 48,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  audioProgressContainer: {
    flex: 1,
  },
  audioTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  audioTime: {
    color: '#ffffff',
    fontSize: 14,
  },
  progressBar: {
    height: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 2,
  },
  volumeButton: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  // 正文内容
  contentBody: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  bodyText: {
    fontSize: 16,
    color: '#1e293b',
    lineHeight: 24,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1e293b',
    marginTop: 24,
    marginBottom: 12,
  },
  
  // 好处列表
  benefitsList: {
    gap: 8,
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
  },
  benefitText: {
    flex: 1,
    fontSize: 16,
    color: '#1e293b',
    lineHeight: 24,
  },
  
  // 步骤容器
  stepsContainer: {
    gap: 16,
  },
  stepCard: {
    backgroundColor: '#f1f5f9',
    borderRadius: 12,
    padding: 16,
  },
  stepTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1e293b',
    marginBottom: 8,
  },
  stepText: {
    fontSize: 16,
    color: '#64748b',
    lineHeight: 24,
  },
  
  // 小贴士
  tipsContainer: {
    backgroundColor: 'rgba(245, 158, 11, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(245, 158, 11, 0.2)',
    borderRadius: 12,
    padding: 16,
    gap: 8,
  },
  tipItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
  },
  tipText: {
    flex: 1,
    fontSize: 16,
    color: '#1e293b',
    lineHeight: 24,
  },
  
  // 相关推荐
  relatedSection: {
    paddingHorizontal: 24,
  },
  relatedTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 16,
  },
  relatedList: {
    gap: 16,
  },
  relatedItem: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.06,
        shadowRadius: 8,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  relatedImage: {
    width: 56,
    height: 56,
    borderRadius: 8,
  },
  relatedInfo: {
    flex: 1,
  },
  relatedItemTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1e293b',
    marginBottom: 4,
  },
  relatedItemDescription: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 8,
  },
  relatedMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  relatedDurationTag: {
    backgroundColor: 'rgba(139, 92, 246, 0.1)',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
  },
  relatedDurationText: {
    fontSize: 12,
    color: '#8b5cf6',
  },
  relatedLevelText: {
    fontSize: 12,
    color: '#64748b',
  },
  
  // 浮动音频播放器
  floatingPlayerGradient: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    borderRadius: 12,
    padding: 16,
    ...Platform.select({
      ios: {
        shadowColor: '#8b5cf6',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 20,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  floatingPlayerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  floatingPlayButton: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  floatingProgressContainer: {
    flex: 1,
  },
  floatingTitle: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 4,
  },
  floatingProgressBar: {
    height: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 2,
    overflow: 'hidden',
  },
  floatingProgressFill: {
    height: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 2,
  },
  floatingCloseButton: {
    width: 32,
    height: 32,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;

