import React from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import store, { persistor } from './src/store'
import styles from './src/styles'

import AppNavigator from './src/navigation/AppNavigator'
import { PersistGate } from 'redux-persist/lib/integration/react'


export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <AppNavigator />
          </PersistGate>
        </Provider>
      </View>
    )
  }
}
