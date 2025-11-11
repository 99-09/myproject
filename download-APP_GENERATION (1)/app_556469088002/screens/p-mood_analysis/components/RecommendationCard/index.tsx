

import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import styles from './styles';

interface Recommendation {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  imageUrl: string;
  category: string;
  targetPage: string;
  iconColor: string;
}

interface RecommendationCardProps {
  recommendation: Recommendation;
  onPress: () => void;
}

const RecommendationCard: React.FC<RecommendationCardProps> = ({
  recommendation,
  onPress,
}) => {
  const getDurationColor = (duration: string) => {
    if (duration.includes('5分钟')) return '#06b6d4';
    if (duration.includes('12分钟')) return '#6366f1';
    if (duration.includes('15分钟')) return '#8b5cf6';
    return '#6366f1';
  };

  const getIconName = (title: string) => {
    if (title.includes('冥想')) return 'play-circle';
    if (title.includes('呼吸')) return 'play-circle';
    if (title.includes('正念')) return 'book-open';
    return 'play-circle';
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.card}>
        <View style={styles.content}>
          <Image 
            source={{ uri: recommendation.imageUrl }}
            style={styles.image}
            resizeMode="cover"
          />
          
          <View style={styles.textContent}>
            <Text style={styles.title}>{recommendation.title}</Text>
            <Text style={styles.description}>{recommendation.description}</Text>
            
            <View style={styles.metaContainer}>
              <View 
                style={[
                  styles.durationTag,
                  { backgroundColor: `${getDurationColor(recommendation.duration)}1A` }
                ]}
              >
                <Text 
                  style={[
                    styles.durationText,
                    { color: getDurationColor(recommendation.duration) }
                  ]}
                >
                  {recommendation.duration}
                </Text>
              </View>
              <Text style={styles.levelText}>• {recommendation.level}</Text>
            </View>
          </View>
          
          <FontAwesome6 
            name={getIconName(recommendation.title)} 
            size={20} 
            color={recommendation.iconColor} 
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RecommendationCard;

