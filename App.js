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
    displayText: '',
    operation: null,
    values: []
  }

  /**
   * Adiciona um valor no display da calculadora
   */
  addValue = (value) => {
    let newDisplayText = this.state.displayText === '' ? value : this.state.displayText + value

    this.buildState(newDisplayText, this.state.operation, this.state.values)
  }

  addDecimal = () => {
    if (!this.state.displayText.includes(',') && this.state.displayText !== '') {
      this.addValue(',')
    }
  }

  /**
   * Limpa display da calculadora
   */
  clearDisplay = () => {
    this.buildState('', null, [])
  }

  /**
   * Seta a operação a ser realizada
   */
  setOperation = (operation) => {
    let newValues = this.state.values

    newValues.push(parseFloat(this.state.displayText.replace(',', '.')))

    this.buildState('', operation, newValues)
  }

  /**
   * Executa o cálculo
   */
  execCalc = () => {
    let values = this.state.values
    let newDisplayText = ''

    values.push(parseFloat(this.state.displayText.replace(',', '.')))

    switch(this.state.operation) {
      case '+':
        newDisplayText = values.reduce((a, b) => a + b).toFixed(2).toString()
        break
      case '-':
        newDisplayText = values.reduce((a, b) => a - b).toFixed(2).toString()
        break
      case 'x':
        newDisplayText = values.reduce((a, b) => a * b).toFixed(2).toString()
        break
      default:
        // ...
    }

    newDisplayText = newDisplayText.replace('.', ',')

    this.buildState(newDisplayText, null, [])
  }

  /**
   * Função customizada p/ atualizar estado do componente
   */
  buildState = (displayText, operation, values) => {
    this.setState({
      displayText,
      operation,
      values
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
          <Botao label='=' onPress={() => this.execCalc()} />
          <Botao label='+' onPress={() => this.setOperation('+')} operationButton={true} />
        </View>
      </View>
    )
  }
}
