import { Navigation } from 'react-native-navigation'
import 'react-native-gesture-handler'

import './src/navigation/screens'
import { colors } from './src/styles'
import { MAIN } from './src/navigation/constants'

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions({
    topBar: {
      title: {
        fontSize: 16,
        color: colors.mainBlue,
        alignment: 'center',
      },
    },
  })

  Navigation.setRoot({
    root: {
      component: {
        name: MAIN,
      },
    },
  })
})
