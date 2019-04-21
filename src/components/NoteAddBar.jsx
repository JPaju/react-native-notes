import React from 'react'
import { View, Button, TextInput } from 'react-native'

export default class extends React.Component {
    state = { note: '' }

    render = () => {
        const { styles } = this.props

        return (
            <View>
                <View style={styles.noteInputContainer}>
                    <TextInput
                        onChangeText={note => this.setState({ note })}
                        value={this.state.note}
                        placeholder={'Add new note...'}
                        style={styles.noteInput}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        title={'Add Note'}
                        onPress={this._submitNewNote}
                    />
                </View>
            </View>
        )
    }

    _submitNewNote = () => {
        this.props.onSubmit(this.state.note)
        this.setState({ note: '' })
    }
}
