const noteReducer = (state = [], action) => {
    switch (action.type) {
        case 'NEW_NOTE': {
            return [...state, action.data]
        }
        case 'INIT_NOTES': {
            return initialNotes
        }
        case 'CLEAR_NOTES': {
            return []
        }
        default:
            return state
    }
}

const initNotes = () => ({
    type: 'INIT_NOTES'
})

const createNote = (newNote) => ({
    type: 'NEW_NOTE',
    data: newNote,
})

const clearNotes = () => ({
    type: 'CLEAR_NOTES'
})

const initialNotes = [
    {
        id: 0,
        content: 'Redux on helppoa'
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

export default noteReducer
export {
    initNotes,
    createNote,
    clearNotes
}