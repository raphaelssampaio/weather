import { Navigation } from 'react-native-navigation'
import 'react-native-gesture-handler'

import './src/navigation/screens'
import { MAIN } from './src/navigation/constants'

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: MAIN,
      },
    },
  })
})
