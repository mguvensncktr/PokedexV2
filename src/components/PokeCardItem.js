import { View, Text, Image, TouchableOpacity, LogBox } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import TypeCard from './TypeCard'
import { SIZES, COLORS, FONTS } from '../constants'
import axios from 'axios'

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

const PokeCardItem = (props) => {

    // disable all logbox warnings
    LogBox.ignoreLogs([
        'Can\'t perform a React state update on an unmounted component',
    ])

    const navigation = useNavigation();
    const { pokemon } = props;
    const [loading, setLoading] = useState(false);
    const type = pokemon?.types[0].type.name;

    const getChainURL = async () => {
        setLoading(true);
        const url = `https://pokeapi.co/api/v2/pokemon-species/${pokemon.name}`;
        const response = await axios.get(url);
        setLoading(false);
        return response.data.evolution_chain.url;
    }

    const getChain = async () => {
        if (loading) {
            return
        };
        const url = await getChainURL();
        const response = await axios.get(url);
        return response.data.chain;
    }

    const [chain, setChain] = useState(null);

    useEffect(() => {
        getChain().then(res => {
            setChain(res);
        })
    }, [])


    return (
        <TouchableOpacity
            style={{
                backgroundColor: backgroundColor[type],
                margin: SIZES.padding,
                borderRadius: SIZES.radius / 2,
                flexDirection: 'row',
                flex: 1,
                maxWidth: SIZES.width / 2,
            }}
            onPress={() => navigation.navigate('Detail', { backgroundColor: backgroundColor[type], pokemon: pokemon, evolveChain: chain })}
        >
            <View style={{ padding: SIZES.padding }}>
                <Text style={{ color: COLORS.white, ...FONTS.body4 }}>{pokemon?.name.charAt(0).toUpperCase() + pokemon?.name.slice(1)}</Text>
                {
                    pokemon?.types.map((type, index) =>
                    (
                        <TypeCard key={index} text={type.type.name} containerStyle={{ marginTop: SIZES.base / 2 }} />
                    )
                    )
                }
            </View>
            <Image
                source={{ uri: pokemon?.sprites.front_default }}
                resizeMode="contain"
                style={{ width: 100, height: 100, marginLeft: -15 }}
            />
        </TouchableOpacity>
    )
}

export default PokeCardItem