import React from 'react'
import { View, Button, TextInput } from 'react-native'

export default NoteAddBar = ({ styles, onSubmit, onChange, newNote }) => (
    <View>
        <View style={styles.noteInputContainer}>
            <TextInput
                onChangeText={onChange}
                value={newNote}
                placeholder={'Add new note...'}
                style={styles.noteInput}
            />
        </View>
        <View style={styles.buttonContainer}>
            <Button
                title={'Add Note'}
                onPress={onSubmit}
            />
        </View>
    </View>
)
