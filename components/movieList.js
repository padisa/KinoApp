import { View, Text, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Dimensions } from "react-native"
import { StyleSheet, Image } from "react-native"
import { useNavigation } from '@react-navigation/native';

const posterPicture = require('../assets/Poster-1.png')
const {width, height} = Dimensions.get('window')

export default function MovieList({title, data}) {
    const navigation = useNavigation();
    const movieName = 'Random Name: Random Movie'
    return (
        <View style = {styles.container}>
            <View style= {styles.upcomingMoviesContainer}>
                <Text style = {styles.upcomingMoviesText}>
                    {title}
                </Text>
                <TouchableOpacity>
                    <Text style = {styles.text}>See all</Text>
                </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.contentContainer}>
            {
                data.map((item, index) => (
                    <TouchableWithoutFeedback key={index} onPress={() => navigation.navigate('Movie', item)}>
                        <View style={styles.movieContainer}>
                            <Image source={posterPicture} style={styles.poster} />
                            <Text style={styles.movieName}>{item.movieName}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                ))
            }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
        marginTop: 16,
    },
    upcomingMoviesContainer: {
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    upcomingMoviesText: {
        color: 'white',
        fontSize: 20,
    },
    text: {
        color: 'orange',
        fontSize: 16,
    }, 
    contentContainer: {
        paddingHorizontal: 15,
        paddingBottom: 20, 
    },
    movieContainer: {
        marginBottom: 20, 
        alignItems: 'flex-start', 
    },
    poster: {
        width: 150,
        height: 225, 
        borderRadius: 10, 
    },
    movieName: {
        marginTop: 10, 
        fontSize: 16,
        color: 'white', 
        textAlign: 'center', 
    },
})