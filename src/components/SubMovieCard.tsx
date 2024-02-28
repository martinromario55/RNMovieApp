import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';

const SubMovieCard = (props: any) => {
  const {
    title,
    imagePath,
    cardWidth,
    shouldMaginatedAtEnd,
    isFirst,
    isLast,
    shouldMaginatedAround,
    cardFunction,
  } = props;
  return (
    <TouchableOpacity onPress={() => cardFunction()}>
      <View
        style={[
          styles.container,
          shouldMaginatedAtEnd
            ? isFirst
              ? {marginLeft: SPACING.space_36}
              : isLast
              ? {marginRight: SPACING.space_36}
              : {}
            : {},
          shouldMaginatedAround ? {margin: SPACING.space_12} : {},
          {maxWidth: cardWidth},
        ]}>
        <Image
          style={[styles.cardImage, {width: cardWidth}]}
          source={{uri: imagePath}}
        />
        <Text numberOfLines={1} style={styles.textTitle}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default SubMovieCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.Black,
  },
  cardImage: {
    aspectRatio: 2 / 3,
    borderRadius: BORDERRADIUS.radius_20,
  },
  textTitle: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
    color: COLORS.White,
    textAlign: 'center',
    padding: SPACING.space_10,
  },
});
