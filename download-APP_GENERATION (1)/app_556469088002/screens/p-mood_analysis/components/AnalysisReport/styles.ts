

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
    marginBottom: 16,
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1e293b',
    marginBottom: 8,
  },
  sectionContent: {
    fontSize: 14,
    color: '#64748b',
    lineHeight: 20,
  },
  triggersContainer: {
    gap: 8,
  },
  triggerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  triggerDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  triggerText: {
    fontSize: 14,
    color: '#64748b',
  },
  strategiesContainer: {
    gap: 8,
  },
  strategyCard: {
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(16, 185, 129, 0.2)',
    borderRadius: 8,
    padding: 12,
  },
  strategyCardInfo: {
    backgroundColor: 'rgba(59, 130, 246, 0.1)',
    borderColor: 'rgba(59, 130, 246, 0.2)',
  },
  strategyHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 4,
  },
  strategyTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#10b981',
  },
  strategyTitleInfo: {
    color: '#3b82f6',
  },
  strategyDescription: {
    fontSize: 12,
    color: '#64748b',
    lineHeight: 16,
  },
});

