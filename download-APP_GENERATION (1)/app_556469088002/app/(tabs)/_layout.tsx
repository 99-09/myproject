import React from "react";
import { StyleSheet, View, Dimensions, Platform } from 'react-native';
import { Tabs } from "expo-router";
import { FontAwesome5, FontAwesome6 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';


export default function Layout() {
  return (
    <Tabs 
      backBehavior="order"
      screenOptions={{ 
          tabBarActiveTintColor: "#6366f1",
          tabBarInactiveTintColor: "#64748b",
          tabBarStyle: {
            backgroundColor: "#ffffff"
          }
      }}>

        <Tabs.Screen
            name="index"
            options={{href: null}}
        />

        <Tabs.Screen name="p-home" options={{
            title: '首页', 
            headerShown: false,
            tabBarIcon: ({ color }) => (
                <FontAwesome6 name="house" size={20} color={color} />
            )
        }}/>

        <Tabs.Screen name="p-energy_feed" options={{
            title: '能量补给', 
            headerShown: false,
            tabBarIcon: ({ color }) => (
                <FontAwesome6 name="bolt" size={20} color={color} />
            )
        }}/>

        <Tabs.Screen name="p-mood_diary" options={{
            title: '情绪日记', 
            headerShown: false,
            tabBarIcon: ({ color }) => (
                <FontAwesome6 name="heart" size={20} color={color} />
            )
        }}/>

        <Tabs.Screen name="p-community" options={{
            title: '社区', 
            headerShown: false,
            tabBarIcon: ({ color }) => (
                <FontAwesome6 name="users" size={20} color={color} />
            )
        }}/>

        <Tabs.Screen name="p-profile" options={{
            title: '我的', 
            headerShown: false,
            tabBarIcon: ({ color }) => (
                <FontAwesome6 name="user" size={20} color={color} />
            )
        }}/>
    </Tabs>
  );
}