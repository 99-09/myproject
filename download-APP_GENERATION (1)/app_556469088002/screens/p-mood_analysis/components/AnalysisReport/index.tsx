

import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesome5, FontAwesome6 } from '@expo/vector-icons';
import styles from './styles';

type TimeRange = 'week' | 'month' | 'year';

interface AnalysisReportProps {
  timeRange: TimeRange;
}

const AnalysisReport: React.FC<AnalysisReportProps> = ({ timeRange }) => {
  const getAnalysisContent = () => {
    switch (timeRange) {
      case 'week':
        return {
          moodScore: 7.2,
          mainFinding: '本周你的情绪整体表现积极，平均情绪值为7.2分（满分10分）。周末情绪明显提升，说明休息时间对你的情绪调节有很好的帮助。',
          triggers: [
            { text: '完成工作任务 (+3次)', type: 'positive' },
            { text: '运动锻炼 (+2次)', type: 'positive' },
            { text: '工作压力 (+1次)', type: 'warning' },
          ],
        };
      case 'month':
        return {
          moodScore: 6.8,
          mainFinding: '本月你的情绪波动较大，平均情绪值为6.8分（满分10分）。工作压力是主要的负面因素，而运动和社交活动能有效提升你的情绪。',
          triggers: [
            { text: '完成工作任务 (+8次)', type: 'positive' },
            { text: '运动锻炼 (+5次)', type: 'positive' },
            { text: '工作压力 (+4次)', type: 'warning' },
            { text: '社交活动 (+3次)', type: 'positive' },
          ],
        };
      case 'year':
        return {
          moodScore: 7.0,
          mainFinding: '本年度你的情绪整体稳定，平均情绪值为7.0分（满分10分）。季节变化对你的情绪有一定影响，春季和秋季情绪普遍较高。',
          triggers: [
            { text: '完成工作任务 (+95次)', type: 'positive' },
            { text: '运动锻炼 (+60次)', type: 'positive' },
            { text: '工作压力 (+45次)', type: 'warning' },
            { text: '社交活动 (+35次)', type: 'positive' },
            { text: '季节变化 (+12次)', type: 'warning' },
          ],
        };
      default:
        return {
          moodScore: 7.2,
          mainFinding: '',
          triggers: [],
        };
    }
  };

  const analysisContent = getAnalysisContent();

  const getTriggerColor = (type: string) => {
    switch (type) {
      case 'positive':
        return '#10b981';
      case 'warning':
        return '#f59e0b';
      default:
        return '#64748b';
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>分析报告</Text>
        
        {/* 情绪特点 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>情绪特点</Text>
          <Text style={styles.sectionContent}>
            {analysisContent.mainFinding}
          </Text>
        </View>
        
        {/* 常见触发事件 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>常见触发事件</Text>
          <View style={styles.triggersContainer}>
            {analysisContent.triggers.map((trigger, index) => (
              <View key={index} style={styles.triggerItem}>
                <View 
                  style={[
                    styles.triggerDot, 
                    { backgroundColor: getTriggerColor(trigger.type) }
                  ]} 
                />
                <Text style={styles.triggerText}>{trigger.text}</Text>
              </View>
            ))}
          </View>
        </View>
        
        {/* 应对策略建议 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>建议策略</Text>
          <View style={styles.strategiesContainer}>
            <View style={styles.strategyCard}>
              <View style={styles.strategyHeader}>
                <FontAwesome5 name="check-circle" size={14} color="#10b981" />
                <Text style={styles.strategyTitle}>保持运动习惯</Text>
              </View>
              <Text style={styles.strategyDescription}>
                运动对你的情绪提升有显著效果，建议继续保持。
              </Text>
            </View>
            
            <View style={[styles.strategyCard, styles.strategyCardInfo]}>
              <View style={styles.strategyHeader}>
                <FontAwesome6 name="lightbulb" size={14} color="#3b82f6" />
                <Text style={[styles.strategyTitle, styles.strategyTitleInfo]}>尝试冥想放松</Text>
              </View>
              <Text style={styles.strategyDescription}>
                在工作日适当安排冥想时间，有助于缓解工作压力。
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AnalysisReport;

