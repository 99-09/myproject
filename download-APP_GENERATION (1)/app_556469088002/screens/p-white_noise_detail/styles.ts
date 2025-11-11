

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
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
  },
  
  // 滚动视图
  scrollView: {
    flex: 1,
  },
  
  // 当前播放区域
  currentPlayingSection: {
    paddingHorizontal: 24,
    marginTop: -16,
    marginBottom: 24,
  },
  currentPlayingCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
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
  backgroundImageContainer: {
    width: 192,
    height: 192,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 16,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  currentNoiseName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 8,
    textAlign: 'center',
  },
  currentNoiseDescription: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 24,
    textAlign: 'center',
  },
  
  // 播放控制
  playbackControls: {
    width: '100%',
    alignItems: 'center',
  },
  playPauseButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 16,
  },
  playPauseGradient: {
    width: '100%',
    height: '100%',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  playIconOffset: {
    marginLeft: 4,
  },
  
  // 音量控制
  volumeControl: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    maxWidth: 300,
    marginBottom: 16,
  },
  volumeSlider: {
    flex: 1,
    height: 40,
    marginHorizontal: 12,
  },
  volumeSliderThumb: {
    backgroundColor: '#6366f1',
    width: 20,
    height: 20,
  },
  volumeValue: {
    fontSize: 14,
    color: '#64748b',
  },
  
  // 定时设置
  timerSection: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  timerCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
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
  sectionTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1e293b',
    marginBottom: 16,
  },
  timerOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  timerOption: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  timerOptionActive: {
    backgroundColor: '#6366f1',
    borderColor: '#6366f1',
  },
  timerOptionText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#64748b',
  },
  timerOptionTextActive: {
    color: '#ffffff',
  },
  timerDisplay: {
    marginTop: 16,
    alignItems: 'center',
  },
  timerDisplayText: {
    fontSize: 14,
    color: '#64748b',
  },
  timerRemaining: {
    fontWeight: '500',
    color: '#6366f1',
  },
  
  // 白噪音列表
  noiseListSection: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  noiseItem: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.03,
        shadowRadius: 4,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  noiseItemActive: {
    backgroundColor: '#6366f1',
    borderColor: '#6366f1',
  },
  noiseItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  noiseItemImage: {
    width: 48,
    height: 48,
    borderRadius: 8,
    marginRight: 12,
  },
  noiseItemInfo: {
    flex: 1,
  },
  noiseItemName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1e293b',
    marginBottom: 4,
  },
  noiseItemNameActive: {
    color: '#ffffff',
  },
  noiseItemDescription: {
    fontSize: 14,
    color: '#64748b',
  },
  noiseItemDescriptionActive: {
    color: 'rgba(255, 255, 255, 0.8)',
  },
});

