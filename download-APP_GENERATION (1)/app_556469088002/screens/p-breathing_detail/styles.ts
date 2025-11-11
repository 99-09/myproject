

import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButton: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
  headerPlaceholder: {
    width: 40,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  infoCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
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
  exerciseInfo: {
    alignItems: 'center',
    marginBottom: 16,
  },
  exerciseImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 12,
  },
  exerciseTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 8,
    textAlign: 'center',
  },
  exerciseDescription: {
    fontSize: 14,
    color: '#64748b',
    textAlign: 'center',
    lineHeight: 20,
  },
  durationSection: {
    marginBottom: 16,
  },
  sectionLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1e293b',
    marginBottom: 8,
  },
  durationOptions: {
    flexDirection: 'row',
    gap: 12,
  },
  durationOption: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 12,
    alignItems: 'center',
  },
  durationOptionActive: {
    backgroundColor: '#06b6d4',
    borderColor: '#06b6d4',
    transform: [{ scale: 1.05 }],
  },
  durationOptionText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1e293b',
  },
  durationOptionTextActive: {
    color: '#ffffff',
  },
  musicToggle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  musicInfo: {
    flex: 1,
  },
  musicTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1e293b',
    marginBottom: 2,
  },
  musicDescription: {
    fontSize: 12,
    color: '#64748b',
  },
  toggleSwitch: {
    width: 50,
    height: 28,
    backgroundColor: '#e2e8f0',
    borderRadius: 14,
    justifyContent: 'center',
    paddingHorizontal: 2,
  },
  toggleSwitchActive: {
    backgroundColor: '#06b6d4',
  },
  toggleThumb: {
    width: 24,
    height: 24,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    alignSelf: 'flex-start',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  toggleThumbActive: {
    alignSelf: 'flex-end',
  },
  breathingCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
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
  breathingArea: {
    alignItems: 'center',
    marginBottom: 24,
  },
  breathingCircle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    ...Platform.select({
      ios: {
        shadowColor: '#06b6d4',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 16,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  breathingInstruction: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  breathingPhase: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#06b6d4',
    marginBottom: 8,
    textAlign: 'center',
  },
  breathingTimer: {
    fontSize: 14,
    color: '#64748b',
    textAlign: 'center',
  },
  controlButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
  },
  startPauseButton: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  startPauseGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 32,
    paddingVertical: 12,
    gap: 8,
  },
  startPauseText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
  },
  resetButton: {
    backgroundColor: '#e5e7eb',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resetButtonActive: {
    backgroundColor: '#d1d5db',
  },
  guideCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
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
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 16,
  },
  guideSteps: {
    gap: 16,
  },
  guideStep: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  stepNumber: {
    width: 32,
    height: 32,
    backgroundColor: 'rgba(6, 182, 212, 0.1)',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
  },
  stepNumberText: {
    color: '#06b6d4',
    fontSize: 14,
    fontWeight: 'bold',
  },
  stepContent: {
    flex: 1,
  },
  stepTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1e293b',
    marginBottom: 4,
  },
  stepDescription: {
    fontSize: 14,
    color: '#64748b',
    lineHeight: 20,
  },
  benefitsCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
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
  benefitsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  benefitItem: {
    flex: 1,
    minWidth: '45%',
    alignItems: 'center',
    padding: 12,
    backgroundColor: 'rgba(6, 182, 212, 0.05)',
    borderRadius: 12,
  },
  benefitText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1e293b',
    marginTop: 8,
    textAlign: 'center',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  modalContent: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    width: '100%',
    maxWidth: 320,
    alignItems: 'center',
  },
  modalIcon: {
    width: 64,
    height: 64,
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 8,
    textAlign: 'center',
  },
  modalDescription: {
    fontSize: 14,
    color: '#64748b',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 24,
  },
  modalButton: {
    width: '100%',
    borderRadius: 12,
    overflow: 'hidden',
  },
  modalButtonGradient: {
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
  },
});

