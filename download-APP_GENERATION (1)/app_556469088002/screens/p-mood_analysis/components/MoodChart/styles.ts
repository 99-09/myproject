

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
  chartWrapper: {
    marginBottom: 16,
  },
  chartContainer: {
    position: 'relative',
    height: 192,
    backgroundColor: '#f1f5f9',
    borderRadius: 8,
    padding: 16,
  },
  loadingContainer: {
    height: 192,
    backgroundColor: '#f1f5f9',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  loadingText: {
    fontSize: 14,
    color: '#64748b',
  },
  yAxisLabels: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 32,
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
  yAxisLabel: {
    fontSize: 12,
    color: '#64748b',
  },
  barsContainer: {
    marginLeft: 32,
    height: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    gap: 8,
  },
  barWrapper: {
    flex: 1,
    alignItems: 'center',
    gap: 4,
  },
  bar: {
    width: 24,
    backgroundColor: '#6366f1',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    minHeight: 8,
  },
  barLabel: {
    fontSize: 12,
    color: '#64748b',
    textAlign: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#10b981',
    marginBottom: 4,
  },
  statValueWarning: {
    color: '#f59e0b',
  },
  statValueDanger: {
    color: '#ef4444',
  },
  statLabel: {
    fontSize: 12,
    color: '#64748b',
  },
});

