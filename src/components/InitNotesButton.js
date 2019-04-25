import React from 'react'
import { View, Button } from 'react-native'
import { connect } from 'react-redux'
import { initNotes } from '../noteReducer'
import styles from '../styles'

const ClearNotesButton = (props) => (
    <View style={styles.buttonContainer}>
        <Button
            title={'Create initial notes'}
            color='green'
            onPress={props.initNotes}
        />
    </View>
)


export default connect(
    null,
    { initNotes }
)(ClearNotesButton)