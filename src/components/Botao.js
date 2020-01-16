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
    },
    operationButton: {
        backgroundColor: '#6c6b6b',
        borderColor: '#6c6b6b'
    },
    aquaButton: {
        backgroundColor: '#2eeabb',
        borderColor: '#2eeabb'
    }
})

export default (props) => {
    let buttonStyles = []

    buttonStyles.push(Style.button)

    if (props.operationButton) {
        buttonStyles.push(Style.operationButton)
    }

    if (props.aquaButton) {
        buttonStyles.push(Style.aquaButton)
    }

    return (
        <TouchableHighlight onPress={() => props.onPress(props.label)}>
            <Text style={buttonStyles}>{props.label}</Text>
        </TouchableHighlight>
    )
}
