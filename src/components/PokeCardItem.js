import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import TypeCard from './TypeCard'
import { SIZES, COLORS, FONTS } from '../constants'

const backgroundColor = {
    'grass': '#7CB342',
    'poison': '#9C27B0',
    'fire': '#F44336',
    'flying': '#1976D2',
    'water': '#2196F3',
    'bug': '#4CAF50',
    'normal': '#9E9E9E',
    'electric': '#FFEB3B',
    'ground': '#FBC02D',
    'fairy': '#FFCDD2',
    'fighting': '#D50000',
    'psychic': '#E91E63',
    'rock': '#795548',
    'steel': '#BDBDBD',
    'ghost': '#607D8B',
    'ice': '#00BCD4',
    'dragon': '#3F51B5',
}

const PokeCardItem = ({ item }) => {

    const navigation = useNavigation()

    return (
        <TouchableOpacity
            style={{
                backgroundColor: backgroundColor[item.type],
                margin: SIZES.padding,
                borderRadius: SIZES.radius / 2,
                flexDirection: 'row',
                flex: 1,
                maxWidth: SIZES.width / 2,
            }}
            onPress={() => navigation.navigate('Detail', { pokemon: item, backgroundColor: backgroundColor[item.type] })}
        >
            <View style={{ padding: SIZES.padding }}>
                <Text style={{ color: COLORS.white, ...FONTS.body4 }}>{item.name}</Text>
                <TypeCard text={item.type} containerStyle={{ marginTop: 10 }} />
                <TypeCard text="Poison" containerStyle={{ marginTop: 5 }} />
            </View>
            <Image
                source={{ uri: item.image }}
                resizeMode="contain"
                style={{ width: 100, height: 100, marginLeft: -15 }}
            />
        </TouchableOpacity>
    )
}

export default PokeCardItem