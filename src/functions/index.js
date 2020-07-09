import {
  sun,
  cloud,
  rain,
  storm,
  sunRain,
  wind,
  sunCloud,
  snow,
} from '../assets'

export function getImage({ description }) {
  const image = {
    'clear sky': sun,
    'few clouds': sunCloud,
    'scattered clouds': cloud,
    'broken clouds': cloud,
    'shower rain': rain,
    rain: sunRain,
    thunderstorm: storm,
    snow: snow,
  }
  return image[description] || wind
}

export function getCelsius(temp) {
  const celcius = temp - 273.15

  return celcius.toPrecision(4)
}
