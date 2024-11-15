import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { Image } from 'react-native'; 
import { useNavigation } from '@react-navigation/native';

const image = require('../assets/Iron-Man.png')
const {width, height} = Dimensions.get('window')

export default function TrendingMovies({ data }) {
    const navigation = useNavigation();
    const handleClick = () => {
        navigation.navigate('Movie', item);
    }
    return (
        <View style={styles.container}>
            <Carousel
                data={data}
                renderItem={({ item }) => <MovieCard item={item} handleClick={handleClick} />}
                sliderWidth={width}
                itemWidth={width*0.62}
                inactiveSlideOpacity={0.60}
                slideStyle={{ display: 'flex', alignItems: 'center' }} 
            />
        </View>
    );
}

const MovieCard = ({ item , handleClick}) => {
    return (
        <TouchableWithoutFeedback>
            <Image source={image} style = {styles.imagePoster}></Image>
        </TouchableWithoutFeedback>
    );
};



const styles = StyleSheet.create({
    container: {
        marginVertical: 24,
    },
    text: {
        color: 'white',
        marginHorizontal: 16,
        marginBottom: 20,
        fontSize: 20,
    },
    movieCard: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#333',
        padding: 10,
        borderRadius: 8,
    },
    movieText: {
        color: 'white',
        fontSize: 18,
    },
    imagePoster: {
        width: width*0.6,
        height: height*0.4,
        borderRadius: 24,
    }
});