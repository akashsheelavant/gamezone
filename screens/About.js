import React from 'react'
import { StyleSheet, View, Text, SafeAreaView } from 'react-native'

export default function About() {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text>About Screen</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    }
})