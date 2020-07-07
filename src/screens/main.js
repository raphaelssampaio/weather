// Initializing.js
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { colors } from '../styles'

export default class Main extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Movies</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 28,
    color: colors.white,
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
