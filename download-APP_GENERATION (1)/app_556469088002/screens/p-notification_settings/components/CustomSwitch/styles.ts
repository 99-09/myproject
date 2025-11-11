

import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    width: 48,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#e2e8f0',
    justifyContent: 'center',
    paddingHorizontal: 4,
  },
  containerActive: {
    backgroundColor: '#6366f1',
  },
  thumb: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
});

