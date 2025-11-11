

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
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#ffffff',
  },
  settingsButton: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userProfileSection: {
    paddingHorizontal: 24,
    marginTop: -16,
    marginBottom: 24,
  },
  userProfileCard: {
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
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  userAvatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 3,
    borderColor: '#6366f1',
    marginRight: 16,
  },
  userDetails: {
    flex: 1,
  },
  userNickname: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 4,
  },
  userId: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 8,
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statItem: {
    alignItems: 'center',
    marginRight: 32,
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6366f1',
  },
  statLabel: {
    fontSize: 12,
    color: '#64748b',
    marginTop: 2,
  },
  userBioContainer: {
    backgroundColor: '#f1f5f9',
    borderRadius: 8,
    padding: 12,
  },
  userBio: {
    fontSize: 14,
    color: '#64748b',
    lineHeight: 20,
  },
  menuSection: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  menuGroup: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    marginBottom: 16,
    overflow: 'hidden',
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
  menuGroupHeader: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#f1f5f9',
  },
  menuGroupTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#64748b',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  menuIconContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  menuItemTitle: {
    fontSize: 16,
    color: '#1e293b',
    flex: 1,
  },
  menuItemRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuBadge: {
    fontSize: 14,
    color: '#64748b',
    marginRight: 8,
  },
});

