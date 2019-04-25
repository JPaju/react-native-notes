import React from 'react'
import { View } from 'react-native'
import styles from '../styles'

import ClearNotesButton from '../components/ClearNotesButton'
import InitNotesButton from '../components/InitNotesButton'

export default NoteAddView = () => (
    <View style={styles.container}>
        <ClearNotesButton />
        <InitNotesButton />
    </View >
)