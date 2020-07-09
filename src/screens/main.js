import React from 'react'
import { View, Text, Image } from 'react-native'
import { layout } from '../styles'
import Card from '../components/Card'
import { temperature } from '../assets'

export default class Main extends React.Component {
  render() {
    return (
      <View style={layout.default}>
        <View style={layout.defaultMargin}>
          <Text style={layout.welcome}>
            React Native Test Platform Builders
          </Text>
          <Text style={layout.welcome}>App Weather</Text>
          <Text style={layout.raphael}>by Raphael Sampaio</Text>
          <Image
            source={temperature}
            style={layout.mainImage}
            resizeMode="contain"
          />
        </View>
        <View style={layout.containerMain}>
          <Card />
        </View>
      </View>
    )
  }
}
