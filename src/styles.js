import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
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
        color: 'black',
        borderWidth: 2,
        borderColor: '#f08080',
        backgroundColor: '#b0c4de',
        margin: 10,
        padding: 15
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
