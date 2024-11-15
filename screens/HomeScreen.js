import React, { useState } from "react";
import { View, Text, Platform, Image, TextInput, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import * as Icon from "react-native-feather";
import TrendingMovies from "../components/trendingMovies";
import MovieList from "../components/movieList";
import { LinearGradient } from "expo-linear-gradient";

const logo = require('../assets/KinoApp-logo.png');
const signInButton = require('../assets/sign-in-icon 1.png');
const notificationButton = require('../assets/notification-icon 1.png');

export default function HomeScreen() {
    
    const [trending, setTrending] = useState ([1, 2, 3])
    const [upcoming, setUpcoming] = useState ([1, 2, 3])
    const [topRated, setTopRated] = useState ([1, 2, 3])
    
    return (
        
        <View style={styles.container}>
            <SafeAreaView style={styles.safeArea}>
                <StatusBar style="light" />
                {/* Implementing search bar and logo */}
                <View style={styles.header}>
                    <Image source={logo} style={styles.image} />
                    <View style={styles.searchContainer}>
                        <Icon.Search style={styles.icon} height={20} width={20} stroke={"gray"} />
                        <TextInput style={styles.input} placeholder="" />
                    </View>
                    <View style={styles.buttonsContainer}>
                        <Image source={notificationButton} style={styles.notificationButton} />
                        <Image source={signInButton} style={styles.signInButton} />
                    </View>
                </View>
            </SafeAreaView>
            <ScrollView showsHorizontalScrollIndicator = {false} contentContainerStyle = {{paddingBottom: 10}}>
                {/*Trending movies carousel */}
                <TrendingMovies data = {trending}></TrendingMovies>

                {/*Upcoming movies carousel */}
                <MovieList data = {upcoming}/>
                <LinearGradient colors={['#033363', '#090E10']} style = {styles.gradient}></LinearGradient>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
    },
    container: {
        flex: 1,
    },
    safeArea: {
        ...Platform.select({
            ios: {
                marginBottom: -2,
            },
            android: {
                marginBottom: -3,
            }
        })
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#0a2e3b",
        paddingHorizontal: 10,
        marginVertical:16,
    },
    image: {
        width: 80,
        height: 48,
        resizeMode: 'contain',
    },
    searchContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#d1d5db',
        paddingHorizontal: 10,
        paddingVertical: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
        marginHorizontal: 10,
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        color: '#000',
    },
    buttonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    signInButton: {
        width: 30,
        height: 30,
        marginLeft: 10,
    },
    notificationButton: {
        width: 30,
        height: 30,
    }
});