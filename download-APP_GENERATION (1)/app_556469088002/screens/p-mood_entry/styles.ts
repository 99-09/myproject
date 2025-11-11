

import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  keyboardAvoidingView: {
    flex: 1,
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
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
  },
  saveButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#ffffff',
    borderRadius: 12,
  },
  saveButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6366f1',
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    paddingHorizontal: 24,
    paddingVertical: 24,
    paddingBottom: 40,
  },
  section: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
    ...Platform.select({
      ios: {
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.06,
        shadowRadius: 8,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  sectionLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1e293b',
    marginBottom: 12,
  },
  dateInput: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 12,
    backgroundColor: '#ffffff',
    fontSize: 16,
    color: '#1e293b',
  },
  moodTagsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  moodTag: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    width: '47%',
    justifyContent: 'center',
  },
  moodTagSelected: {
    backgroundColor: '#6366f1',
    transform: [{ scale: 1.02 }],
  },
  moodTagUnselected: {
    backgroundColor: '#f1f5f9',
  },
  moodTagIcon: {
    marginRight: 8,
  },
  moodTagText: {
    fontSize: 14,
    fontWeight: '500',
  },
  moodTagTextSelected: {
    color: '#ffffff',
  },
  moodTagTextUnselected: {
    color: '#64748b',
  },
  textArea: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 12,
    backgroundColor: '#ffffff',
    fontSize: 16,
    color: '#1e293b',
    minHeight: 80,
    maxHeight: 120,
  },
  textAreaLarge: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 12,
    backgroundColor: '#ffffff',
    fontSize: 16,
    color: '#1e293b',
    minHeight: 100,
    maxHeight: 160,
  },
  imageUploadArea: {
    borderWidth: 2,
    borderColor: '#e2e8f0',
    borderStyle: 'dashed',
    borderRadius: 12,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageUploadText: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 8,
  },
  imageUploadSubText: {
    fontSize: 12,
    color: '#64748b',
    marginTop: 4,
  },
  imagePreviewGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginTop: 16,
  },
  imagePreviewContainer: {
    position: 'relative',
    width: '30%',
  },
  imagePreview: {
    width: '100%',
    height: 80,
    borderRadius: 8,
  },
  imageRemoveButton: {
    position: 'absolute',
    top: -8,
    right: -8,
    width: 20,
    height: 20,
    backgroundColor: '#ef4444',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tipSection: {
    backgroundColor: 'rgba(99, 102, 241, 0.05)',
    borderWidth: 1,
    borderColor: 'rgba(99, 102, 241, 0.2)',
    borderRadius: 16,
    padding: 16,
  },
  tipContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  tipTextContainer: {
    flex: 1,
    marginLeft: 12,
  },
  tipTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1e293b',
    marginBottom: 4,
  },
  tipDescription: {
    fontSize: 14,
    color: '#64748b',
    lineHeight: 20,
  },
});

