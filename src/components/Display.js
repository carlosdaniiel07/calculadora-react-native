import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Style = StyleSheet.create({
    display: {
        flex: 1,
        padding: 12,
        backgroundColor: '#fff',
        justifyContent: "center"
    },
    displayText: {
        fontSize: 35
    }
})

export default class Display extends Component {
    render() {
        return (
            <View style={Style.display}>
                <Text style={Style.displayText} numberOfLines={1}>{this.props.displayText}</Text>
            </View>
        )
    }
}
