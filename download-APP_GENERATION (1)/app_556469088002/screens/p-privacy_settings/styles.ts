

import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
    paddingHorizontal: 24,
    paddingVertical: 16,
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
  headerPlaceholder: {
    width: 40,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  privacyIntroCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
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
  privacyIntroContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  privacyIntroIcon: {
    width: 32,
    height: 32,
    backgroundColor: 'rgba(99, 102, 241, 0.1)',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    marginTop: 4,
  },
  privacyIntroTextContainer: {
    flex: 1,
  },
  privacyIntroTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1e293b',
    marginBottom: 4,
  },
  privacyIntroDescription: {
    fontSize: 14,
    color: '#64748b',
    lineHeight: 20,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 12,
    paddingHorizontal: 4,
  },
  settingsCard: {
    backgroundColor: '#ffffff',
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
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  settingItemNoBorder: {
    borderBottomWidth: 0,
  },
  settingItemContent: {
    flex: 1,
    marginRight: 16,
  },
  settingItemTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1e293b',
    marginBottom: 4,
  },
  settingItemDescription: {
    fontSize: 14,
    color: '#64748b',
    lineHeight: 20,
  },
  navigationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  navigationItemNoBorder: {
    borderBottomWidth: 0,
  },
  navigationItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  navigationItemIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  navigationItemTextContainer: {
    flex: 1,
  },
  navigationItemTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1e293b',
    marginBottom: 2,
  },
  navigationItemDescription: {
    fontSize: 14,
    color: '#64748b',
  },
  privacyPolicyCard: {
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
        elevation: 2,
      },
    }),
  },
  privacyPolicyContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  privacyPolicyIcon: {
    width: 32,
    height: 32,
    backgroundColor: 'rgba(59, 130, 246, 0.1)',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    marginTop: 4,
  },
  privacyPolicyTextContainer: {
    flex: 1,
  },
  privacyPolicyTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1e293b',
    marginBottom: 4,
  },
  privacyPolicyDescription: {
    fontSize: 14,
    color: '#64748b',
    lineHeight: 20,
    marginBottom: 12,
  },
  privacyPolicyLink: {
    fontSize: 14,
    color: '#6366f1',
    fontWeight: '500',
  },
});

