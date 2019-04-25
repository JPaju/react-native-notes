import React from 'react'
import { View, Button, TextInput, Alert } from 'react-native'
import { connect } from 'react-redux'
import { createNote } from '../noteReducer'
import { validateNote } from '../utils'

class NoteAddBar extends React.Component {
    state = { noteToAdd: '' }

    render = () => {
        const { styles } = this.props

        return (
            <View>
                <View style={styles.noteInputContainer}>
                    <TextInput
                        onChangeText={noteToAdd => this.setState({ noteToAdd })}
                        value={this.state.noteToAdd}
                        placeholder={'Add new note...'}
                        style={styles.noteInput}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        title={'Add Note'}
                        onPress={this.addNote}
                    />
                </View>
            </View>
        )
    }

    addNote = () => {
        const { noteToAdd } = this.state
        const { notes } = this.props
        let validatedNote

        try {
            validatedNote = validateNote(noteToAdd, notes)
        } catch (error) {
            return Alert.alert(
                'Adding new note failed',
                error.message || 'Reason unknown',
                [
                    {
                        text: 'Discard note',
                        onPress: () => this.setState({ noteToAdd: '' }),
                        style: 'cancel',
                    },
                    { text: 'Modify note' },
                ],
                { cancelable: false }
            )
        }
        this.props.createNote(validatedNote)
        this.setState({ noteToAdd: '' })
    }
}

const mapStateToProps = state => {
    return ({ notes: state.notes })
}

export default connect(
    mapStateToProps,
    { createNote }
)(NoteAddBar)