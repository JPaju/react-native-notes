import React from 'react'
import { StyleSheet, View } from 'react-native'

import NotesList from './components/NotesList'
import NoteAddBar from './components/NoteAddBar'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: noteList
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <NotesList styles={styles} notes={this.state.notes} />
        <NoteAddBar styles={styles} onSubmit={this.addNote} />
      </View>
    )
  }

  addNote = (text) => {
    const newNotes = this.state.notes.concat({
      id: this.state.notes.length + 1,
      content: text
    })
    this.setState({ notes: newNotes })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    marginTop: 25,
    backgroundColor: '#fff',
  },
  notesList: {
    margin: 5,
    alignItems: 'flex-start',
  },
  note: {
    fontSize: 20,
    color: '#008080',
    paddingVertical: 30
  },
  noteInputContainer: {
    padding: 5,
    borderColor: 'black',
    borderWidth: 2,
  },
  buttonContainer: {
    paddingVertical: 5
  },
  noteInput: {
    fontSize: 20,
  }
})

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
  }
]