import React from 'react'
import { View } from 'react-native'

const moveToBottom = (component) => {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'flex-end',
            marginBottom: 5
        }}>
            {component}
        </View>
    )
}

const validateNote = (noteContent, noteList, maxChars = 40) => {
    if (!(/[a-zA-Z]|\d/.test(noteContent.toString())))
        throw new Error('Note must contain at least one character')

    if (isDuplicateNote(noteContent, noteList))
        throw new Error('Duplicate notes not allowed!')

    if (noteContent.toString().length > maxChars)
        throw new Error(`Maximum of ${maxChars} characters is allowed!`)
}

const isDuplicateNote = (noteContent, noteList) => {
    return noteList
        .findIndex(note =>
            note.content.toLowerCase() === noteContent.toLowerCase()
        ) !== -1
}

export {
    moveToBottom,
    isDuplicateNote,
    validateNote
}