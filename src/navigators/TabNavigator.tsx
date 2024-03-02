import {View, StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import TicketScreen from '../screens/TicketScreen';
import SearchScreen from '../screens/SearchScreen';
import UserAccountScreen from '../screens/UserAccountScreen';
import {COLORS, FONTSIZE, SPACING} from '../theme/theme';
import CustomIcons from '../components/CustomIcons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.Black,
          borderTopWidth: 0,
          height: SPACING.space_10 * 10,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused, size, color}) => (
            <View
              style={[
                styles.activeTabBackground,
                focused ? {backgroundColor: COLORS.Orange} : {},
              ]}>
              <CustomIcons
                name="video"
                color={COLORS.White}
                size={FONTSIZE.size_30}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused, size, color}) => (
            <View
              style={[
                styles.activeTabBackground,
                focused ? {backgroundColor: COLORS.Orange} : {},
              ]}>
              <CustomIcons
                name="search"
                color={COLORS.White}
                size={FONTSIZE.size_30}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Ticket"
        component={TicketScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused, size, color}) => (
            <View
              style={[
                styles.activeTabBackground,
                focused ? {backgroundColor: COLORS.Orange} : {},
              ]}>
              <CustomIcons
                name="ticket"
                color={COLORS.White}
                size={FONTSIZE.size_30}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={UserAccountScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused, size, color}) => (
            <View
              style={[
                styles.activeTabBackground,
                focused ? {backgroundColor: COLORS.Orange} : {},
              ]}>
              <CustomIcons
                name="user"
                color={COLORS.White}
                size={FONTSIZE.size_30}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  activeTabBackground: {
    backgroundColor: COLORS.Black,
    padding: SPACING.space_18,
    borderRadius: SPACING.space_18 * 10,
  },
});

export default TabNavigator;
