import React from 'react'
import { ScrollView, Text } from 'react-native'
import { connect } from 'react-redux'
import { initNotes } from '../noteReducer'

import Note from './Note'


class NotesList extends React.Component {

    render = () => {
        const { styles, notes } = this.props

        return (
            <ScrollView contentContainerStyle={styles.notesList}>
                {notes.length === 0 && <Text>No notes added!</Text>}
                {notes.map(note =>
                    <Note
                        styles={styles}
                        content={note.content}
                        key={note.id}
                    />
                )}
            </ScrollView>
        )
    }
}

const mapStateToProps = state => {
    return ({ notes: state.notes })
}

export default connect(
    mapStateToProps,
    { initNotes }
)(NotesList)
