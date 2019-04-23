import React from 'react';
import { ScrollView } from 'react-native';

import Note from './Note'


export default NotesList = ({ styles, notes }) => {
    return (
        <ScrollView contentContainerStyle={styles.notesList}>
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
