

import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import styles from './styles';

type TimeRange = 'week' | 'month' | 'year';

interface MoodData {
  positive: number;
  neutral: number;
  negative: number;
}

interface MoodChartProps {
  timeRange: TimeRange;
  moodData: MoodData;
  isLoading: boolean;
}

interface ChartData {
  labels: string[];
  heights: number[];
}

const MoodChart: React.FC<MoodChartProps> = ({
  timeRange,
  moodData,
  isLoading,
}) => {
  const getChartData = (): ChartData => {
    switch (timeRange) {
      case 'week':
        return {
          labels: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
          heights: [0.6, 0.45, 0.75, 0.5, 0.8, 0.9, 0.7],
        };
      case 'month':
        return {
          labels: ['第1周', '第2周', '第3周', '第4周'],
          heights: [0.65, 0.7, 0.55, 0.75],
        };
      case 'year':
        return {
          labels: ['1月', '2月', '3月', '4月', '5月', '6月'],
          heights: [0.6, 0.65, 0.7, 0.68, 0.72, 0.75],
        };
      default:
        return { labels: [], heights: [] };
    }
  };

  const chartData = getChartData();

  const renderChartBars = () => {
    if (isLoading) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="small" color="#6366f1" />
          <Text style={styles.loadingText}>正在加载数据...</Text>
        </View>
      );
    }

    return (
      <View style={styles.chartContainer}>
        {/* Y轴标签 */}
        <View style={styles.yAxisLabels}>
          <Text style={styles.yAxisLabel}>积极</Text>
          <Text style={styles.yAxisLabel}>一般</Text>
          <Text style={styles.yAxisLabel}>消极</Text>
        </View>
        
        {/* 图表柱状图 */}
        <View style={styles.barsContainer}>
          {chartData.labels.map((label, index) => (
            <View key={index} style={styles.barWrapper}>
              <View 
                style={[
                  styles.bar, 
                  { height: `${chartData.heights[index] * 100}%` }
                ]} 
              />
              <Text style={styles.barLabel}>{label}</Text>
            </View>
          ))}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>情绪趋势</Text>
        
        {/* 图表区域 */}
        <View style={styles.chartWrapper}>
          {renderChartBars()}
        </View>
        
        {/* 情绪统计 */}
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{moodData.positive}</Text>
            <Text style={styles.statLabel}>积极天数</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={[styles.statValue, styles.statValueWarning]}>{moodData.neutral}</Text>
            <Text style={styles.statLabel}>一般天数</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={[styles.statValue, styles.statValueDanger]}>{moodData.negative}</Text>
            <Text style={styles.statLabel}>消极天数</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MoodChart;

