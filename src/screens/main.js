import React from 'react'
import { View, Text, Image } from 'react-native'
import { layout } from '../styles'
import Card from '../components/Card'
import DeviceInfo from 'react-native-device-info'
import { temperature, sad } from '../assets'
import {
  APP_NAME,
  RAPHAEL,
  PLATFORM_BUILDERS,
  SIMULATOR,
  DOCUMENTATION,
} from '../constants'

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
          <Text style={layout.welcome}>{PLATFORM_BUILDERS}</Text>
          <Text style={layout.welcome}>{APP_NAME}</Text>
          <Text style={layout.raphael}>{RAPHAEL}</Text>
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
              <Text style={layout.welcome}>{SIMULATOR}</Text>
              <Text style={layout.welcome}>{DOCUMENTATION}</Text>
              <Image
                source={sad}
                style={layout.imageSad}
                resizeMode="contain"
              />
            </View>
          )}
        </View>
      </View>
    )
  }
}
