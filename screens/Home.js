import React from 'react'
import { StyleSheet, View, Text, SafeAreaView } from 'react-native'
import { useFont } from 'expo-font'
import { globalStyles } from '../styles/global'

export default function Home() {
    return (
        <SafeAreaView>
            <View style={globalStyles.container}>
                <Text style={globalStyles.titleText}>Home Screen</Text>
            </View>
        </SafeAreaView>
    )
}