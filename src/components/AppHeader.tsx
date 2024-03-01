import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import CustomIcons from './CustomIcons';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';

const AppHeader = ({name, header, action}: any) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconBackground} onPress={() => action()}>
        <CustomIcons name={name} style={styles.iconStyle} />
      </TouchableOpacity>
      <Text style={styles.headerText}>{header}</Text>
      <View style={styles.emptyConatainer} />
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconStyle: {
    fontSize: FONTSIZE.size_24,
    color: COLORS.White,
  },
  headerText: {
    flex: 1,
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_20,
    textAlign: 'center',
    color: COLORS.White,
  },
  emptyConatainer: {
    height: SPACING.space_20 * 2,
    width: SPACING.space_20 * 2,
  },
  iconBackground: {
    width: SPACING.space_20 * 2,
    height: SPACING.space_20 * 2,
    borderRadius: BORDERRADIUS.radius_20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.Orange,
  },
});
