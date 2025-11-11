import React, { useEffect } from "react";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Stack, usePathname, useGlobalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  "TurboModuleRegistry.getEnforcing(...): 'RNMapsAirModule' could not be found",
  // 添加其它想暂时忽略的错误或警告信息
]);

export default function RootLayout() {
  const pathname = usePathname();
  const searchParams = useGlobalSearchParams();

  useEffect(() => {
    if (!pathname) {
      return;
    }
    let searchString = '';
    if (Object.keys(searchParams).length > 0) {
      const queryString = Object.keys(searchParams)
        .map(key => {
          const value = searchParams[key];
          if (typeof value === 'string') {
            return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
          }
          return '';
        }).filter(Boolean).join('&');

      searchString = '?' + queryString;
    }

    const pageId = pathname.replace('/', '').toUpperCase();
    console.log('当前pageId:', pageId, ', pathname:', pathname, ', search:', searchString);
    if (typeof window === 'object' && window.parent && window.parent.postMessage) {
      window.parent.postMessage({
        type: 'chux-path-change',
        pageId: pageId,
        pathname: pathname,
        search: searchString,
      }, '*');
    }
  }, [pathname, searchParams])

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar style="light"></StatusBar>
      <Stack screenOptions={{
        // 设置所有页面的切换动画为从右侧滑入，适用于iOS 和 Android
        animation: 'slide_from_right',
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        // 隐藏自带的头部
        headerShown: false 
      }}>
        <Stack.Screen name="(tabs)" options={{ title: "底部导航栏" }} />
        <Stack.Screen name="p-login" options={{ title: "注册/登录页" }} />
        <Stack.Screen name="p-meditation_detail" options={{ title: "冥想练习页" }} />
        <Stack.Screen name="p-breathing_detail" options={{ title: "呼吸练习页" }} />
        <Stack.Screen name="p-mindfulness_detail" options={{ title: "正念指导页" }} />
        <Stack.Screen name="p-white_noise_detail" options={{ title: "白噪音播放页" }} />
        <Stack.Screen name="p-mood_entry" options={{ title: "情绪记录页" }} />
        <Stack.Screen name="p-mood_analysis" options={{ title: "情绪分析页" }} />
        <Stack.Screen name="p-post_create" options={{ title: "发布动态页" }} />
        <Stack.Screen name="p-profile_edit" options={{ title: "个人资料编辑页" }} />
        <Stack.Screen name="p-settings" options={{ title: "设置页" }} />
        <Stack.Screen name="p-privacy_settings" options={{ title: "隐私设置页" }} />
        <Stack.Screen name="p-notification_settings" options={{ title: "通知设置页" }} />
        <Stack.Screen name="p-about_us" options={{ title: "关于我们页" }} />
        <Stack.Screen name="p-feedback" options={{ title: "意见反馈页" }} />
      </Stack>
    </GestureHandlerRootView>
  );
}
