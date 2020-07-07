import { Navigation } from 'react-native-navigation'
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'

import Main from '../screens/main'

import { MAIN } from './constants'

Navigation.registerComponent(MAIN, () => gestureHandlerRootHOC(Main))
