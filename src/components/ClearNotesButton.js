import React from 'react'
import { View, Button, Alert } from 'react-native'
import { connect } from 'react-redux'
import { clearNotes } from '../noteReducer'
import styles from '../styles'

const ClearNotesButton = (props) => (
    <View style={styles.buttonContainer}>
        <Button
            title={'Erase all notes'}
            color='red'
            onPress={() => {
                Alert.alert(
                    'Warning',
                    'Do you really want to erase all notes?',
                    [
                        {
                            text: 'Erase notes',
                            onPress: props.clearNotes,
                        },
                        {
                            text: 'Cancel',
                            style: 'cancel',
                        }
                    ],
                )
            }}
        />
    </View>
)

export default connect(
    null,
    { clearNotes }
)(ClearNotesButton)