import React from 'react';
import { View, FlatList } from 'react-native';

import Note from './Note'


export default class NotesList extends React.Component {
    render = () => {
        const { styles, notes } = this.props
        return (
            <View style={styles.notesList}>
                <FlatList
                    data={notes}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item: note }) =>
                        <Note
                            styles={styles}
                            content={note.content}
                        />
                    }
                />
            </View>
        )
    }
}
