

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
  
  // 滚动视图
  scrollView: {
    flex: 1,
  },
  
  // 视频播放器区域
  videoSection: {
    paddingHorizontal: 24,
    marginTop: -16,
    marginBottom: 24,
  },
  videoContainer: {
    height: 256,
    borderRadius: 16,
    overflow: 'hidden',
    position: 'relative',
  },
  videoBackground: {
    width: '100%',
    height: '100%',
  },
  playButtonContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  playButtonLarge: {
    width: 80,
    height: 80,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  playIconLarge: {
    marginLeft: 4,
  },
  
  // 进度条
  progressContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
  },
  progressBar: {
    width: '100%',
  },
  progressTrack: {
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
  timeDisplay: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  timeText: {
    color: '#ffffff',
    fontSize: 14,
  },
  
  // 内容卡片通用样式
  contentCard: {
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
  
  // 课程信息区
  courseInfoSection: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  courseTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 8,
  },
  courseDescription: {
    fontSize: 16,
    color: '#64748b',
    lineHeight: 24,
    marginBottom: 16,
  },
  courseMeta: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 16,
  },
  metaTag: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: 'rgba(99, 102, 241, 0.1)',
    borderRadius: 16,
    gap: 4,
  },
  metaTagSecondary: {
    backgroundColor: 'rgba(139, 92, 246, 0.1)',
  },
  metaTagTertiary: {
    backgroundColor: 'rgba(6, 182, 212, 0.1)',
  },
  metaTagText: {
    fontSize: 14,
    color: '#6366f1',
  },
  metaTagTextSecondary: {
    color: '#8b5cf6',
  },
  metaTagTextTertiary: {
    color: '#06b6d4',
  },
  instructorInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#e2e8f0',
    gap: 12,
  },
  instructorAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  instructorDetails: {
    flex: 1,
  },
  instructorName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1e293b',
    marginBottom: 2,
  },
  instructorTitle: {
    fontSize: 14,
    color: '#64748b',
  },
  
  // 播放控制区
  controlsSection: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 16,
  },
  mainControls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 32,
    marginBottom: 24,
  },
  controlButton: {
    width: 48,
    height: 48,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  playPauseButton: {
    width: 64,
    height: 64,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  playIconSmall: {
    marginLeft: 4,
  },
  secondaryControls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  volumeControl: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  volumeButton: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  volumeSlider: {
    width: 96,
    height: 4,
    backgroundColor: '#d1d5db',
    borderRadius: 2,
    overflow: 'hidden',
  },
  volumeSliderFill: {
    width: '80%',
    height: '100%',
    backgroundColor: '#6366f1',
  },
  
  // 倍速控制
  speedControl: {
    position: 'relative',
  },
  speedButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 8,
  },
  speedText: {
    color: '#ffffff',
    fontSize: 14,
  },
  speedMenu: {
    position: 'absolute',
    bottom: 48,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderRadius: 8,
    overflow: 'hidden',
    zIndex: 10,
    minWidth: 80,
  },
  speedOption: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: 'center',
  },
  speedOptionActive: {
    backgroundColor: 'rgba(99, 102, 241, 0.8)',
  },
  speedOptionText: {
    color: '#ffffff',
    fontSize: 14,
  },
  
  // 相关推荐区
  recommendationsSection: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  recommendationCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
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
  recommendationImage: {
    width: 56,
    height: 56,
    borderRadius: 8,
  },
  recommendationContent: {
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
    marginBottom: 4,
  },
  recommendationMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  recommendationDurationTag: {
    backgroundColor: 'rgba(99, 102, 241, 0.1)',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
  },
  recommendationDurationText: {
    fontSize: 12,
    color: '#6366f1',
  },
  recommendationLevel: {
    fontSize: 12,
    color: '#64748b',
  },
});

