

import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  scrollView: {
    flex: 1,
  },
  headerGradient: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 32,
  },
  userInfoSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#ffffff',
    marginRight: 12,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  userTextInfo: {
    flex: 1,
  },
  userGreeting: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 2,
  },
  userStatus: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  notificationButton: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  energyStatusCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 16,
    padding: 16,
  },
  energyStatusContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  energyLabel: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: 4,
  },
  energyValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  energyDots: {
    flexDirection: 'row',
    gap: 8,
  },
  energyDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  energyDotActive: {
    backgroundColor: '#10b981',
  },
  energyDotInactive: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
  coreFunctionsSection: {
    paddingHorizontal: 24,
    marginTop: -16,
    marginBottom: 24,
  },
  coreFunctionsGrid: {
    flexDirection: 'row',
    gap: 16,
  },
  coreFunctionCard: {
    flex: 1,
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
        elevation: 2,
      },
    }),
  },
  coreFunctionGradient: {
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 80,
  },
  coreFunctionText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#ffffff',
    marginTop: 8,
    textAlign: 'center',
  },
  recommendedSection: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 16,
  },
  recommendedList: {
    gap: 16,
  },
  recommendedItem: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
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
  recommendedImage: {
    width: 56,
    height: 56,
    borderRadius: 8,
    marginRight: 12,
  },
  recommendedContent: {
    flex: 1,
  },
  recommendedTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1e293b',
    marginBottom: 4,
  },
  recommendedDescription: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 8,
  },
  recommendedTags: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  durationTag: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  durationText: {
    fontSize: 12,
    fontWeight: '500',
  },
  levelText: {
    fontSize: 12,
    color: '#64748b',
  },
  dailyStatsSection: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  dailyStatsCard: {
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
  dailyStatsTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1e293b',
    marginBottom: 12,
  },
  dailyStatsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  dailyStatItem: {
    alignItems: 'center',
  },
  dailyStatValue: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  dailyStatLabel: {
    fontSize: 12,
    color: '#64748b',
  },
  bottomSafeArea: {
    height: 80,
  },
});

