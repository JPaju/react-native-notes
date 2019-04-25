import { createStore, combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';

import noteReducer from './noteReducer'

// Regular redux-store configs
const rootReducer = combineReducers({
    notes: noteReducer
})

// Redux-persist configs
const persistConfig = {
    key: 'root-storage',
    storage,
    stateReconciler: autoMergeLevel2
}

const persReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persReducer)
const persistor = persistStore(store)

export default store
export {
    persistor
}