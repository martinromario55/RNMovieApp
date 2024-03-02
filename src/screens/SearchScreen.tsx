import {Dimensions, FlatList, StatusBar, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {baseImagePath, searchMovies} from '../api/apicalls';
import {COLORS, SPACING} from '../theme/theme';
import InputHeader from '../components/InputHeader';
import SubMovieCard from '../components/SubMovieCard';

const {width, height} = Dimensions.get('screen');
const SearchScreen = ({navigation}: any) => {
  const [searchList, setSearchList] = useState([]);

  const searchMoviesFunction = async (name: string) => {
    try {
      let response = await fetch(searchMovies(name));
      let json = await response.json();
      setSearchList(json.results);
    } catch (error) {
      console.error('Something went wrong in searchMoviesFunction', error);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View>
        <FlatList
          data={searchList}
          keyExtractor={(item: any) => item.id}
          bounces={false}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <View style={styles.InputHeaderContainer}>
              <InputHeader searchFunction={searchMoviesFunction} />
            </View>
          }
          contentContainerStyle={styles.centerContainer}
          renderItem={({item, index}) => (
            <SubMovieCard
              shouldMaginatedAtEnd={false}
              shouldMaginatedAround={true}
              cardFunction={() => {
                navigation.push('MovieDetails', {movieid: item.id});
              }}
              cardWidth={width / 2 - SPACING.space_12 * 2}
              title={item.original_title}
              imagePath={baseImagePath('w342', item.poster_path)}
            />
          )}
        />
      </View>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    alignItems: 'center',
    backgroundColor: COLORS.Black,
  },
  InputHeaderContainer: {
    marginHorizontal: SPACING.space_36,
    marginVertical: SPACING.space_28,
  },
  centerContainer: {
    alignItems: 'center',
  },
});
