import React from 'react'
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation'

import NoteAddView from '../views/NoteAddView'
import NotesView from '../views/NotesView'
import AdminView from '../views/AdminView'


const NoteListStack = createStackNavigator({
    Notes: NotesView,
})

NoteListStack.navigationOptions = {
    tabBarLabel: 'Notes',
}

const NoteAddStack = createStackNavigator({
    AddNote: NoteAddView,
})

NoteAddStack.navigationOptions = {
    tabBarLabel: 'Add Note',
}

const AdminStack = createStackNavigator({
    Admin: AdminView,
})

AdminStack.navigationOptions = {
    tabBarLabel: 'Admin',
}

export default createAppContainer(createBottomTabNavigator(
    {
        NoteList: NoteListStack,
        NoteAdd: NoteAddStack,
        Admin: AdminStack,
    },
    {
        tabBarOptions: {
            showIcon: false,
            labelStyle: {
                fontSize: 20,
                color: 'red',
            },
            style: {
                alignItems: 'center',
            }
        }
    })
)