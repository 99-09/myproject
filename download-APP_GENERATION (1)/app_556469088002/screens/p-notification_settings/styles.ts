

import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 16,
    color: '#64748b',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1e293b',
  },
  headerPlaceholder: {
    width: 40,
  },
  scrollView: {
    flex: 1,
  },
  notificationDescription: {
    marginHorizontal: 24,
    marginTop: 24,
    marginBottom: 24,
    backgroundColor: 'rgba(99, 102, 241, 0.05)',
    borderRadius: 16,
    padding: 16,
  },
  descriptionContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  descriptionIcon: {
    marginTop: 2,
  },
  descriptionTextContainer: {
    flex: 1,
    marginLeft: 12,
  },
  descriptionTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1e293b',
    marginBottom: 4,
  },
  descriptionText: {
    fontSize: 14,
    color: '#64748b',
    lineHeight: 20,
  },
  notificationSettingsList: {
    marginHorizontal: 24,
    gap: 4,
  },
  bottomNotice: {
    marginHorizontal: 24,
    marginTop: 32,
    marginBottom: 24,
    backgroundColor: '#f1f5f9',
    borderRadius: 16,
    padding: 16,
  },
  bottomNoticeContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  bottomNoticeIcon: {
    marginTop: 2,
  },
  bottomNoticeTextContainer: {
    flex: 1,
    marginLeft: 12,
  },
  bottomNoticeTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1e293b',
    marginBottom: 4,
  },
  bottomNoticeText: {
    fontSize: 14,
    color: '#64748b',
    lineHeight: 20,
  },
});

