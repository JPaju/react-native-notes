import React from 'react'
import { Provider } from 'react-redux'
import store, { persistor } from './src/store'

import MainNavigator from './src/navigation/MainNavigator'
import { PersistGate } from 'redux-persist/lib/integration/react'

export default App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainNavigator />
      </PersistGate>
    </Provider>
  )
}
