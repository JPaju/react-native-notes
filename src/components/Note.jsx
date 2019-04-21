import React from 'react'
import { Text } from 'react-native'

export default Note = ({ content, styles }) => (
    <Text style={styles.note}>
        {`\u2022 ${content}`}
    </Text>
)