import React from 'react'
import { StyleSheet, View, Text, SafeAreaView } from 'react-native'
import { useFont } from 'expo-font'

export default function Home() {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.textStyle}>Home Screen</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    },
    textStyle: {
        fontFamily: 'nunito-bold',
        fontSize: 18
    }
})