import React from 'react';
import { View } from 'react-native'
import styles from '../styles'
import NotesList from '../components/NotesList'

export default NotesView = () => (
    <View style={styles.container}>
        <NotesList styles={styles} />
    </View>
)