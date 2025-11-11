

import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  
  // 顶部导航栏
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
  postButton: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 12,
  },
  postButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6366f1',
  },
  
  // 主要内容区域
  mainContent: {
    flex: 1,
    paddingBottom: 80,
  },
  
  // 热门话题区
  hotTopicsSection: {
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 12,
  },
  topicsScrollView: {
    paddingBottom: 8,
  },
  topicsContainer: {
    gap: 12,
  },
  topicButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  topicButtonActive: {
    backgroundColor: '#6366f1',
  },
  topicButtonInactive: {
    backgroundColor: '#e2e8f0',
  },
  topicButtonText: {
    fontSize: 14,
    fontWeight: '500',
  },
  topicButtonTextActive: {
    color: '#ffffff',
  },
  topicButtonTextInactive: {
    color: '#64748b',
  },
  
  // 动态列表
  postsSection: {
    paddingHorizontal: 24,
  },
  postCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
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
  postHeader: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  postAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  postHeaderContent: {
    flex: 1,
  },
  postHeaderTop: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  postUsername: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1e293b',
    marginRight: 8,
  },
  postTime: {
    fontSize: 12,
    color: '#64748b',
  },
  postContent: {
    fontSize: 14,
    lineHeight: 20,
    color: '#1e293b',
    marginBottom: 12,
  },
  postTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  postTag: {
    backgroundColor: '#6366f1',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  postTagText: {
    fontSize: 12,
    color: '#ffffff',
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 12,
  },
  postActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#e2e8f0',
  },
  postActionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  postActionText: {
    fontSize: 14,
    color: '#64748b',
  },
  
  // 加载更多
  loadMoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    gap: 8,
  },
  loadMoreText: {
    fontSize: 14,
    color: '#64748b',
  },
});

