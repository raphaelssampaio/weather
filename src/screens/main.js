import React from 'react'
import { View, Text, Image } from 'react-native'
import { layout } from '../styles'
import Card from '../components/Card'
import DeviceInfo from 'react-native-device-info'
import { temperature, sad } from '../assets'

export default class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      simulator: true,
    }
  }

  componentDidMount() {
    DeviceInfo.isEmulator().then((isEmulator) => {
      this.setState({ simulator: isEmulator })
    })
  }

  render() {
    const { simulator } = this.state
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
          {!simulator && <Card />}
          {simulator && (
            <View>
              <Text style={layout.welcome}>
                I told you, it doesn't work on Simulator
              </Text>
              <Text style={layout.welcome}>
                Read documentation for more details
              </Text>
              <Image source={sad} style={layout.image} resizeMode="contain" />
            </View>
          )}
        </View>
      </View>
    )
  }
}
