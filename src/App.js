import React from 'react'
import { View, Alert } from 'react-native'
import styles from './styles'
import { validateNote } from './utils'

import NotesList from './components/NotesList'
import NoteAddBar from './components/NoteAddBar'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: noteList,
      noteToAdd: ''
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <NotesList styles={styles} notes={this.state.notes} />
        <NoteAddBar
          styles={styles}
          onSubmit={this.onNewNoteSubmit}
          onChange={this.onNewNoteChangeText}
          newNote={this.state.noteToAdd}
        />
      </View>
    )
  }

  addNote = (text) => {
    try {
      validateNote(text, this.state.notes)
    } catch (error) {
      Alert.alert(
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
      return
    }

    const newNotes = this.state.notes.concat({
      id: this.state.notes.length + 1,
      content: text
    })

    this.setState({
      notes: newNotes,
      noteToAdd: ''
    })
  }

  onNewNoteChangeText = changedNote => this.setState({ noteToAdd: changedNote })

  onNewNoteSubmit = () => this.addNote(this.state.noteToAdd)
}

const noteList = [
  {
    id: 0,
    content: 'HTML on helppoa'
  },
  {
    id: 1,
    content: 'Selain pystyy suorittamaan vain javascriptiä'
  },
  {
    id: 3,
    content: 'HTTP-protokollan tärkeimmät metodit ovat GET ja POST'
  },
  {
    id: 4,
    content: 'Expo CLI + WSL = nightmare'
  },
  {
    id: 5,
    content: 'React Nativen listat on kummallisia'
  },
  {
    id: 6,
    content: 'Scrollaaminen on myös outoa'
  },
  {
    id: 7,
    content: 'Tämä on turha muistiinpano'
  },
  {
    id: 8,
    content: 'Turhan muistiinpanon jälkeinen muistiinpano, joka varmistaa, että kaikki muistiinpanot eivät mahdu samalle ruudulle.'
  }
]