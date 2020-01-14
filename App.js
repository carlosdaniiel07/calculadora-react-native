import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Botao from './src/components/Botao'

const Style = StyleSheet.create({
  container: {
    flex: 1
  },
  display: {
    flex: 1,
    backgroundColor: '#fff'
  },
  buttons: {
    flex: 1,
    flexDirection: "row"
  }
})

export default class App extends Component {
  onClick(label) {
    console.log('Label => ' + label);
  }

  render() {
    return (
      <View style={Style.container}>
        <View style={Style.display}>

        </View>

        <View style={Style.buttons}>
          <Botao label='7' onPress={this.onClick} />
          <Botao label='8' onPress={this.onClick} />
          <Botao label='9' onPress={this.onClick} />
          <Botao label='AC' onPress={this.onClick} />
        </View>

        <View style={Style.buttons}>
          <Botao label='4' onPress={this.onClick} />
          <Botao label='5' onPress={this.onClick} />
          <Botao label='6' onPress={this.onClick} />
          <Botao label='x' onPress={this.onClick} />
        </View>

        <View style={Style.buttons}>
          <Botao label='1' onPress={this.onClick} />
          <Botao label='2' onPress={this.onClick} />
          <Botao label='3' onPress={this.onClick} />
          <Botao label='-' onPress={this.onClick} />
        </View>

        <View style={Style.buttons}>
          <Botao label='.' onPress={this.onClick} />
          <Botao label='0' onPress={this.onClick} />
          <Botao label='=' onPress={this.onClick} />
          <Botao label='+' onPress={this.onClick} />
        </View>
      </View>
    )
  }
}
