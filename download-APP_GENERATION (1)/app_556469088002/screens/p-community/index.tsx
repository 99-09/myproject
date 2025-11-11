

import React, { useState, useCallback } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, RefreshControl, Alert, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

interface PostData {
  id: string;
  username: string;
  avatar: string;
  time: string;
  content: string;
  tags: string[];
  image?: string;
  likeCount: number;
  commentCount: number;
  isLiked: boolean;
}

interface TopicData {
  id: string;
  name: string;
  isActive: boolean;
}

const CommunityScreen: React.FC = () => {
  const router = useRouter();
  
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  
  const [topicsData, setTopicsData] = useState<TopicData[]>([
    { id: 'all', name: '# 全部', isActive: true },
    { id: 'meditation', name: '# 冥想分享', isActive: false },
    { id: 'mood', name: '# 情绪管理', isActive: false },
    { id: 'stress', name: '# 压力缓解', isActive: false },
    { id: 'gratitude', name: '# 感恩日记', isActive: false },
  ]);

  const [postsData, setPostsData] = useState<PostData[]>([
    {
      id: 'post-1',
      username: '小雨',
      avatar: 'https://s.coze.cn/image/qkSy1063r4k/',
      time: '2小时前',
      content: '今天尝试了15分钟的深度放松冥想，感觉整个人都轻盈了许多。最近工作压力比较大，每天抽出一点时间给自己充电真的很重要。推荐给同样感到疲惫的朋友们 ✨',
      tags: ['# 冥想分享', '# 压力缓解'],
      image: 'https://s.coze.cn/image/em1jjklJCdM/',
      likeCount: 23,
      commentCount: 5,
      isLiked: false,
    },
    {
      id: 'post-2',
      username: '阳光',
      avatar: 'https://s.coze.cn/image/PbCWMg0-azU/',
      time: '4小时前',
      content: '练习4-7-8呼吸法一个星期了，睡眠质量真的有改善！以前总是辗转反侧，现在躺下10分钟左右就能入睡。分享给有失眠困扰的朋友们 💤',
      tags: ['# 呼吸练习', '# 睡眠改善'],
      likeCount: 45,
      commentCount: 12,
      isLiked: true,
    },
    {
      id: 'post-3',
      username: '静心',
      avatar: 'https://s.coze.cn/image/UUc5ZIKTIk8/',
      time: '6小时前',
      content: '今天的情绪日记记录：早晨感到有些焦虑，通过正念行走练习慢慢平静下来。学会观察自己的情绪变化，真的是成长的开始 🌱',
      tags: ['# 情绪管理', '# 正念行走'],
      image: 'https://s.coze.cn/image/WCkcEVYtMuQ/',
      likeCount: 18,
      commentCount: 8,
      isLiked: false,
    },
    {
      id: 'post-4',
      username: '星空',
      avatar: 'https://s.coze.cn/image/fh1XD31lIbU/',
      time: '1天前',
      content: '感恩日记第30天：感谢今天的阳光，感谢朋友的关心，感谢自己的坚持。生活中的小美好值得被记录和珍惜 🙏',
      tags: ['# 感恩日记', '# 每日感恩'],
      likeCount: 31,
      commentCount: 15,
      isLiked: false,
    },
  ]);

  const handleBackPress = useCallback(() => {
    if (router.canGoBack()) {
      router.back();
    }
  }, [router]);

  const handlePostPress = useCallback(() => {
    router.push('/p-post_create');
  }, [router]);

  const handleTopicPress = useCallback((topicId: string) => {
    setTopicsData(prevTopics =>
      prevTopics.map(topic => ({
        ...topic,
        isActive: topic.id === topicId,
      }))
    );
  }, []);

  const handleLikePress = useCallback((postId: string) => {
    setPostsData(prevPosts =>
      prevPosts.map(post => {
        if (post.id === postId) {
          return {
            ...post,
            isLiked: !post.isLiked,
            likeCount: post.isLiked ? post.likeCount - 1 : post.likeCount + 1,
          };
        }
        return post;
      })
    );
  }, []);

  const handleCommentPress = useCallback((postId: string) => {
    Alert.alert('评论功能', '评论功能开发中...');
  }, []);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    try {
      // 模拟刷新数据
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      console.error('刷新失败:', error);
    } finally {
      setIsRefreshing(false);
    }
  }, []);

  const handleLoadMore = useCallback(async () => {
    if (isLoadingMore) return;
    
    setIsLoadingMore(true);
    try {
      // 模拟加载更多数据
      await new Promise(resolve => setTimeout(resolve, 1500));
    } catch (error) {
      console.error('加载更多失败:', error);
    } finally {
      setIsLoadingMore(false);
    }
  }, [isLoadingMore]);

  const renderTopicButton = useCallback((topic: TopicData) => (
    <TouchableOpacity
      key={topic.id}
      style={[
        styles.topicButton,
        topic.isActive ? styles.topicButtonActive : styles.topicButtonInactive,
      ]}
      onPress={() => handleTopicPress(topic.id)}
      activeOpacity={0.8}
    >
      <Text
        style={[
          styles.topicButtonText,
          topic.isActive ? styles.topicButtonTextActive : styles.topicButtonTextInactive,
        ]}
      >
        {topic.name}
      </Text>
    </TouchableOpacity>
  ), [handleTopicPress]);

  const renderPost = useCallback((post: PostData) => (
    <View key={post.id} style={styles.postCard}>
      <View style={styles.postHeader}>
        <Image source={{ uri: post.avatar }} style={styles.postAvatar} />
        <View style={styles.postHeaderContent}>
          <View style={styles.postHeaderTop}>
            <Text style={styles.postUsername}>{post.username}</Text>
            <Text style={styles.postTime}>{post.time}</Text>
          </View>
          <Text style={styles.postContent}>{post.content}</Text>
          <View style={styles.postTags}>
            {post.tags.map((tag, index) => (
              <View key={index} style={styles.postTag}>
                <Text style={styles.postTagText}>{tag}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
      
      {post.image && (
        <Image source={{ uri: post.image }} style={styles.postImage} />
      )}
      
      <View style={styles.postActions}>
        <TouchableOpacity
          style={styles.postActionButton}
          onPress={() => handleLikePress(post.id)}
          activeOpacity={0.7}
        >
          <FontAwesome6
            name="heart"
            size={16}
            color={post.isLiked ? '#ef4444' : '#64748b'}
            solid={post.isLiked}
          />
          <Text style={styles.postActionText}>{post.likeCount}</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.postActionButton}
          onPress={() => handleCommentPress(post.id)}
          activeOpacity={0.7}
        >
          <FontAwesome6 name="comment" size={16} color="#64748b" />
          <Text style={styles.postActionText}>{post.commentCount}</Text>
        </TouchableOpacity>
      </View>
    </View>
  ), [handleLikePress, handleCommentPress]);

  return (
    <SafeAreaView style={styles.container}>
      {/* 顶部导航栏 */}
      <LinearGradient
        colors={['#6366f1', '#8b5cf6']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.header}
      >
        <View style={styles.headerContent}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={handleBackPress}
            activeOpacity={0.8}
          >
            <FontAwesome6 name="arrow-left" size={18} color="#ffffff" />
          </TouchableOpacity>
          
          <Text style={styles.headerTitle}>社区</Text>
          
          <TouchableOpacity
            style={styles.postButton}
            onPress={handlePostPress}
            activeOpacity={0.8}
          >
            <Text style={styles.postButtonText}>发布</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>

      {/* 主要内容区域 */}
      <ScrollView
        style={styles.mainContent}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={handleRefresh}
            colors={['#6366f1']}
            tintColor="#6366f1"
          />
        }
        onScrollEndDrag={(event) => {
          const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
          const paddingToBottom = 100;
          if (layoutMeasurement.height + contentOffset.y >= contentSize.height - paddingToBottom) {
            handleLoadMore();
          }
        }}
      >
        {/* 热门话题区 */}
        <View style={styles.hotTopicsSection}>
          <Text style={styles.sectionTitle}>热门话题</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.topicsScrollView}
            contentContainerStyle={styles.topicsContainer}
          >
            {topicsData.map(renderTopicButton)}
          </ScrollView>
        </View>

        {/* 动态列表 */}
        <View style={styles.postsSection}>
          {postsData.map(renderPost)}
          
          {/* 加载更多指示器 */}
          {isLoadingMore && (
            <View style={styles.loadMoreContainer}>
              <FontAwesome6 name="spinner" size={16} color="#64748b" />
              <Text style={styles.loadMoreText}>加载更多动态...</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CommunityScreen;

