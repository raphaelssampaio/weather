import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { Text, Button } from 'react-native-elements'

import { colors } from '../../styles'
import { REFRESH } from '../../constants'
import Geolocation from '@react-native-community/geolocation'

export default function Card({ city, data, picture }) {
  const [position, setPosition] = useState([])

  useEffect(() => {
    Geolocation.getCurrentPosition(
      (position) => {
        const pos = JSON.stringify(position.coords)
        setPosition(pos)
      },
      (error) => console.log('Error', JSON.stringify(error)),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    )
  }, [])

  return (
    <View style={styles.shadow}>
      <View style={styles.container}>
        <Image source={picture} style={styles.image} resizeMode="cover" />
        <Text style={styles.titleStyle}>{city}</Text>
        <Text style={styles.titleStyle}>Temperatura: {data}</Text>
        <Text style={styles.titleStyle}>Clima: {position}</Text>

        <Button
          title={REFRESH}
          titleStyle={styles.buttonTitleStyle}
          buttonStyle={styles.buttonStyle}
          containerStyle={styles.buttonContainerStyle}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  shadow: {
    shadowOffset: { width: 1, height: 1 },
    shadowColor: colors.mainBlue,
    shadowOpacity: 1,
    elevation: 1,
    backgroundColor: colors.transparent,
    marginHorizontal: 5,
  },
  container: {
    alignItems: 'center',
    borderRadius: 20,
    minWidth: 300,
    minHeight: 500,
    backgroundColor: colors.cardBackground,
  },
  titleStyle: {
    fontWeight: 'bold',
    color: colors.white,
    padding: 15,
    fontSize: 20,
    alignSelf: 'flex-start',
  },
  buttonTitleStyle: {
    fontWeight: 'bold',
    color: colors.white,
  },
  buttonStyle: {
    backgroundColor: colors.mainBlue,
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 5,
  },
  buttonContainerStyle: {
    width: '90%',
  },
  image: {
    height: 180,
    width: 180,
  },
})
