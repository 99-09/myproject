

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1e293b',
    marginBottom: 12,
  },
  tabsContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  tab: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabActive: {
    backgroundColor: '#6366f1',
  },
  tabInactive: {
    backgroundColor: '#f1f5f9',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '500',
  },
  tabTextActive: {
    color: '#ffffff',
  },
  tabTextInactive: {
    color: '#64748b',
  },
});

