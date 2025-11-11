

import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 32,
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  backButton: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButtonIcon: {
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
    height: 40,
  },
  moodStatsCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 16,
    padding: 16,
  },
  moodStatsContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  moodStatsLeft: {
    flex: 1,
  },
  moodStatsLabel: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 14,
    marginBottom: 4,
  },
  moodStatsRatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  moodStatsRating: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 8,
  },
  starsContainer: {
    flexDirection: 'row',
    gap: 2,
  },
  starFilled: {
    color: '#fbbf24',
    fontSize: 14,
  },
  starEmpty: {
    color: 'rgba(255, 255, 255, 0.4)',
    fontSize: 14,
  },
  moodStatsRight: {
    alignItems: 'flex-end',
  },
  moodStatsStreak: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  trendSection: {
    paddingHorizontal: 24,
    marginTop: -16,
    marginBottom: 24,
  },
  trendCard: {
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
  trendHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  trendTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1e293b',
  },
  viewAnalysisButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewAnalysisText: {
    color: '#6366f1',
    fontSize: 14,
    fontWeight: '500',
    marginRight: 4,
  },
  viewAnalysisIcon: {
    color: '#6366f1',
    fontSize: 12,
  },
  trendChartContainer: {
    height: 128,
    backgroundColor: '#f1f5f9',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  trendBarWrapper: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 2,
  },
  trendBar: {
    width: 24,
    backgroundColor: '#6366f1',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    marginBottom: 4,
  },
  trendDayLabel: {
    fontSize: 12,
    color: '#64748b',
    textAlign: 'center',
  },
  entriesSection: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 16,
  },
  moodEntryCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
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
  moodEntryHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  moodEntryDateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  moodEntryDate: {
    color: '#1e293b',
    fontSize: 16,
    fontWeight: '500',
  },
  moodEntryTime: {
    color: '#64748b',
    fontSize: 14,
  },
  moodTag: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  moodTagHappy: {
    backgroundColor: '#fbbf24',
  },
  moodTagCalm: {
    backgroundColor: '#3b82f6',
  },
  moodTagAnxious: {
    backgroundColor: '#ef4444',
  },
  moodTagSad: {
    backgroundColor: '#6b7280',
  },
  moodTagExcited: {
    backgroundColor: '#10b981',
  },
  moodTagIcon: {
    marginRight: 4,
    fontSize: 12,
  },
  moodTagText: {
    fontSize: 12,
    fontWeight: '500',
  },
  moodEntryContent: {
    color: '#64748b',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 8,
  },
  moodEntryFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  moodEntryMeta: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  moodEntryMetaIcon: {
    color: '#64748b',
    fontSize: 12,
    marginRight: 4,
  },
  moodEntryMetaText: {
    color: '#64748b',
    fontSize: 12,
  },
  quickStatsSection: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  quickStatsCard: {
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
  quickStatsTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1e293b',
    marginBottom: 12,
  },
  quickStatsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  quickStatsItem: {
    flex: 1,
    alignItems: 'center',
  },
  quickStatsValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6366f1',
    marginBottom: 4,
  },
  quickStatsLabel: {
    fontSize: 12,
    color: '#64748b',
    textAlign: 'center',
  },
  bottomSpacing: {
    height: 100,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 96,
    right: 24,
    width: 56,
    height: 56,
    borderRadius: 28,
    ...Platform.select({
      ios: {
        shadowColor: '#6366f1',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 12,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  floatingButtonGradient: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  floatingButtonIcon: {
    color: '#ffffff',
    fontSize: 20,
  },
});

