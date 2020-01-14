import React, { Component } from 'react'
import { Text, View, TouchableHighlight, StyleSheet, Dimensions } from 'react-native'

const Style = StyleSheet.create({
    button: {
        fontSize: 30,
        height: Dimensions.get('window').height / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#454545',
        textAlign: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: '#454545',
        color: '#fff'
    }
})

export default (props) => {
    return (
        <TouchableHighlight onPress={props.onPress}>
            <Text style={Style.button}>{props.label}</Text>
        </TouchableHighlight>
    )
}
