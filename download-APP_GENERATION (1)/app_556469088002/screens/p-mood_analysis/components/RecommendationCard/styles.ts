

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  image: {
    width: 56,
    height: 56,
    borderRadius: 8,
  },
  textContent: {
    flex: 1,
    gap: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1e293b',
  },
  description: {
    fontSize: 14,
    color: '#64748b',
    lineHeight: 18,
  },
  metaContainer: {
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
});

