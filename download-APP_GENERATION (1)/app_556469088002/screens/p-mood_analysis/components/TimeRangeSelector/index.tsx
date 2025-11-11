

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

type TimeRange = 'week' | 'month' | 'year';

interface TimeRangeSelectorProps {
  selectedRange: TimeRange;
  onRangeChange: (range: TimeRange) => void;
}

const TimeRangeSelector: React.FC<TimeRangeSelectorProps> = ({
  selectedRange,
  onRangeChange,
}) => {
  const ranges = [
    { key: 'week' as TimeRange, label: '最近7天' },
    { key: 'month' as TimeRange, label: '最近30天' },
    { key: 'year' as TimeRange, label: '最近一年' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>查看范围</Text>
        <View style={styles.tabsContainer}>
          {ranges.map((range) => (
            <TouchableOpacity
              key={range.key}
              style={[
                styles.tab,
                selectedRange === range.key ? styles.tabActive : styles.tabInactive,
              ]}
              onPress={() => onRangeChange(range.key)}
              activeOpacity={0.7}
            >
              <Text
                style={[
                  styles.tabText,
                  selectedRange === range.key ? styles.tabTextActive : styles.tabTextInactive,
                ]}
              >
                {range.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

export default TimeRangeSelector;

