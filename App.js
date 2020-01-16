import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Botao from './src/components/Botao'
import Display from './src/components/Display';

const Style = StyleSheet.create({
  container: {
    flex: 1
  },
  display: {
    flex: 1
  },
  buttons: {
    flex: 1,
    flexDirection: "row"
  }
})

export default class App extends Component {
  
  state = {
    displayText: 0,
    operation: null
  }

  addValue = (value) => {
    this.setState({
      displayText: this.state.displayText == 0 ? value.toString() : this.state.displayText + value.toString(),
      operation: this.state.operation
    })
  }

  addDecimal = () => {
    
  }

  clearDisplay = () => {
    this.setState({
      displayText: 0,
      operation: this.state.operation
    })
  }

  setOperation = (operation) => {
    this.setState({
      displayText: this.state.displayText,
      operation: operation
    })
  }
  
  render() {
    return (
      <View style={Style.container}>
        <View style={Style.display}>
          <Display displayText={this.state.displayText}/>
        </View>

        <View style={Style.buttons}>
          <Botao label='7' onPress={this.addValue} />
          <Botao label='8' onPress={this.addValue} />
          <Botao label='9' onPress={this.addValue} />
          <Botao label='AC' onPress={this.clearDisplay} operationButton={true} aquaButton={true} />
        </View>
        <View style={Style.buttons}>
          <Botao label='4' onPress={this.addValue} />
          <Botao label='5' onPress={this.addValue} />
          <Botao label='6' onPress={this.addValue} />
          <Botao label='x' onPress={() => this.setOperation('x')} operationButton={true} />
        </View>
        <View style={Style.buttons}>
          <Botao label='1' onPress={this.addValue} />
          <Botao label='2' onPress={this.addValue} />
          <Botao label='3' onPress={this.addValue} />
          <Botao label='-' onPress={() => this.setOperation('-')} operationButton={true} />
        </View>
        <View style={Style.buttons}>
          <Botao label='.' onPress={this.addDecimal} />
          <Botao label='0' onPress={this.addValue} />
          <Botao label='=' onPress={() => this.setOperation('=')} />
          <Botao label='+' onPress={() => this.setOperation('+')} operationButton={true} />
        </View>
      </View>
    )
  }
}
