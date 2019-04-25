import React from 'react'
import { View } from 'react-native'
import styles from '../styles'

import NoteAddBar from '../components/NoteAddBar'

export default NoteAddView = () => (
    <View style={styles.container}>
        <NoteAddBar styles={styles} />
    </View >
)