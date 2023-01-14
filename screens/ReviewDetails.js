import React from 'react'
import { StyleSheet, View, Text, SafeAreaView } from 'react-native'

export default function ReviewDetails() {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text>ReviewDetails Screen</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    }
})