import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { colors } from '../styles'
import Card from '../components/Card'
import { sun } from '../assets'

export default class Main extends React.Component {
  render() {
    const data = 'quente pra caramba'
    const city = 'Fortaleza'

    return (
      <View style={styles.default}>
        <View style={{ marginTop: 20 }}>
          <Text style={styles.welcome}>
            React Native Test Platform Builders
          </Text>
          <Text style={styles.welcome}>App Weather</Text>
          <Text style={styles.raphael}>by Raphael Sampaio</Text>
        </View>
        <View style={styles.container}>
          <Card city={city} data={data} picture={sun} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  default: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 64,
    paddingHorizontal: 16,
  },
  welcome: {
    fontSize: 20,
    color: colors.white,
    textAlign: 'center',
  },
  raphael: {
    fontSize: 20,
    color: colors.white,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  container: {
    marginTop: 20,
    flexDirection: 'row',
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
