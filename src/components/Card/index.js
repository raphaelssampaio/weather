import React, { useState, useEffect } from 'react'
import { View, Image, ActivityIndicator } from 'react-native'
import { Text, Button } from 'react-native-elements'
import axios from 'axios'
import Geolocation from '@react-native-community/geolocation'
import { API_KEY } from 'react-native-dotenv'

import { colors, layout } from '../../styles'
import {
  REFRESH,
  CITY,
  TEMP,
  CELCIUS,
  WEATHER,
  CONDITIONS,
} from '../../constants'
import { getImage, getCelsius } from '../../functions'

export default function Card() {
  const [position, setPosition] = useState([])
  const [cityName, setCityName] = useState('')
  const [weatherData, setWeatherData] = useState([])
  const [weatherImage, setWeatherImage] = useState(null)
  const [loading, setLoading] = useState(true)

  function getPosition() {
    setLoading(true)
    Geolocation.getCurrentPosition(
      (position) => {
        const pos = position.coords
        setPosition(pos)
      },
      (error) => console.log('Error', JSON.stringify(error)),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    )
  }

  useEffect(() => {
    getPosition()
  }, [])

  useEffect(() => {
    const fetchCityName = async () => {
      const { latitude, longitude } = position
      if (latitude !== undefined) {
        const response = await axios.get(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`,
        )
        setCityName(response.data.city)
      }
    }
    fetchCityName()
  }, [position])

  useEffect(() => {
    const fetchWeatherData = async () => {
      const { latitude, longitude } = position
      if (latitude !== undefined) {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&
          exclude=hourly,daily&appid=${API_KEY}`,
        )

        setWeatherData({
          temperature: response.data.current.temp,
          main: response.data.current.weather[0].main,
          description: response.data.current.weather[0].description,
        })
      }
    }
    fetchWeatherData()
    setLoading(false)
  }, [position])

  useEffect(() => {
    setWeatherImage(getImage(weatherData))
  }, [weatherData])

  return (
    <View style={layout.shadow}>
      {loading && (
        <>
          <Text style={layout.text}>Loading ...</Text>
          <ActivityIndicator
            size="large"
            color={colors.mainBlue}
            style={layout.loading}
          />
        </>
      )}
      {!loading && (
        <View style={layout.container}>
          <>
            <Image
              source={weatherImage}
              style={layout.image}
              resizeMode="contain"
            />
            <Text style={layout.text}>
              {CITY}
              {cityName}
            </Text>
            <Text style={layout.text}>
              {TEMP}
              {getCelsius(weatherData.temperature)}
              {CELCIUS}
            </Text>
            <Text style={layout.text}>
              {WEATHER}
              {weatherData.main}
            </Text>
            <Text style={layout.text}>
              {CONDITIONS}
              {weatherData.description}
            </Text>
            <Button
              title={REFRESH}
              titleStyle={layout.buttonTitleStyle}
              buttonStyle={layout.buttonStyle}
              containerStyle={layout.buttonContainerStyle}
              onPress={() => getPosition()}
            />
          </>
        </View>
      )}
    </View>
  )
}
