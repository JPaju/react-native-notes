import React from 'react'
import { View } from 'react-native'
import styles from './styles'

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