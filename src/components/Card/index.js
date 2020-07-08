import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { Text, Button } from 'react-native-elements'

import { colors } from '../../styles'
import { REFRESH } from '../../constants'

export default function Card({ city, data, picture }) {
  return (
    <View style={styles.shadow}>
      <View style={styles.container}>
        <Image source={picture} style={styles.image} resizeMode="cover" />
        <Text style={styles.titleStyle}>{city}</Text>
        <Text style={styles.titleStyle}>Temperatura: {data}</Text>
        <Text style={styles.titleStyle}>Clima: {data}</Text>

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
