import { View, Text, Image, TextInput, FlatList, RefreshControl, Keyboard, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import PokeCardItem from '../components/PokeCardItem';
import axios from "axios";
import { AntDesign } from '@expo/vector-icons';

// constants
import { COLORS, SIZES, FONTS, icons } from '../constants'

const HomeScreen = () => {

    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const [allPokemons, setAllPokemons] = useState([]);
    const [filteredPokemons, setFilteredPokemons] = useState([]);

    const getAllPokemons = async () => {
        if (loading) {
            return;
        }
        setLoading(true);
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=30');
        function pokemonObject(result) {
            result.map(async (pokemon) => {
                const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
                setAllPokemons((currentList) => [...currentList, res.data]);
                setFilteredPokemons((currentList) => [...currentList, res.data]);
            })
        }
        pokemonObject(res.data.results);
        setLoading(false);
    }

    useEffect(() => {
        getAllPokemons();
    }, [])

    const handleSearch = (text) => {
        setSearch(text);
        const newData = filteredPokemons.filter(item => {
            const itemData = `${item.name.toUpperCase()}`;
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });
        setAllPokemons(newData);
    }

    const handleRefresh = () => {
        setSearch('');
        setAllPokemons([]);
        setFilteredPokemons([]);
        getAllPokemons();
    }

    function renderHeaderAndSearchBar() {
        return (
            <View style={{ marginTop: 40, marginHorizontal: SIZES.padding2 }}>
                <Text style={{ color: COLORS.black, ...FONTS.h1 }}>Pokedex</Text>
                <View style={{ marginTop: SIZES.padding }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            borderRadius: SIZES.radius,
                            paddingHorizontal: SIZES.padding,
                            backgroundColor: '#fff',
                            shadowColor: '#000',
                            shadowOffset: { width: 2, height: 4 },
                            shadowRadius: 5,
                            shadowOpacity: 0.3,
                            elevation: 5,
                        }}>
                        <Image source={icons.pokeball} style={{ width: 25, height: 25, borderRadius: 20 }} />
                        <TextInput
                            style={{
                                borderRadius: 10,
                                paddingHorizontal: SIZES.padding,
                                paddingVertical: SIZES.base / 2,
                                color: COLORS.black,
                                flex: 1,
                                ...FONTS.body3,
                            }}
                            placeholder="Search pokemons"
                            placeholderTextColor="#d9d9d9"
                            value={search}
                            onChangeText={(text) => handleSearch(text)}
                        />
                    </View>
                    {
                        search.length > 0 &&
                        <View style={{ marginTop: SIZES.padding2 }}>
                            <Text style={{ color: COLORS.black, ...FONTS.h4 }}>
                                {allPokemons.length} results found for "{search}"
                            </Text>
                        </View>
                    }
                    {
                        search.length === 0 &&
                        <View style={{ marginTop: SIZES.padding2 }}>
                            <Text style={{ color: COLORS.black, ...FONTS.h4 }}>
                                {allPokemons.length} pokemons found
                            </Text>
                        </View>
                    }
                    {
                        search.length === 0 && Keyboard.dismiss()
                    }
                </View>
            </View>
        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.white }}>
            {renderHeaderAndSearchBar()}
            <FlatList
                style={{ margin: 5 }}
                data={allPokemons}
                keyExtractor={item => `Poke-${item.id}`}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <PokeCardItem pokemon={item} />}
                refreshControl={
                    <RefreshControl
                        refreshing={loading}
                        tintColor="#16c784"
                        onRefresh={handleRefresh}
                    />
                }
            />
        </View>
    )
}



export default HomeScreen