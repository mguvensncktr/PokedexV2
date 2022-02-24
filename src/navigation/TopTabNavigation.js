import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AboutScreen from '../screens/AboutScreen';
import BaseStatsScreen from "../screens/BaseStatsScreen";

import { COLORS, FONTS, SIZES } from "../constants";
import { Text, View } from "react-native";

const Tab = createMaterialTopTabNavigator();

const TopTabNavigation = () => {
    return (
        <Tab.Navigator
            initialRouteName="About"
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: COLORS.white,
                    marginTop: SIZES.radius + SIZES.padding2,
                    borderTopWith: 0
                },
                tabBarLabelStyle: {
                    fontSize: SIZES.font,
                    color: COLORS.black,
                    ...FONTS.body3,
                },
                tabBarIndicatorStyle: {
                    backgroundColor: '#748ab3',
                    height: 2,
                },
                tabBarActiveTintColor: COLORS.black,
                tabBarInactiveTintColor: '#bfbfbf',
            }}
            backBehavior="none"
        >
            <Tab.Screen name="About" component={AboutScreen}
                options={{
                    tabBarLabel: ({ color }) => (
                        <Text style={{
                            fontSize: SIZES.font,
                            color: color,
                            ...FONTS.body3,
                        }}>About</Text>
                    ),
                }}
            />
            <Tab.Screen name="Stats" component={BaseStatsScreen}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <Text style={{
                            fontSize: SIZES.font,
                            color: focused ? COLORS.black : '#bfbfbf',
                            ...FONTS.body3,
                        }}>Stats</Text>
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default TopTabNavigation;