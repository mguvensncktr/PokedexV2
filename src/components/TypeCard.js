import { View, Text } from 'react-native'
import React from 'react'

const TypeCard = ({ text, containerStyle }) => {
    return (
        <View
            style={{
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: 2,
                maxWidth: 70,
                paddingHorizontal: 10,
                ...containerStyle
            }}>
            <Text style={{ color: '#fff', fontSize: 14 }}>{text.charAt(0).toUpperCase() + text.slice(1)}</Text>
        </View>
    )
}

export default TypeCard