import { View, Text, Image, TextInput, FlatList, RefreshControl, Keyboard } from 'react-native'
import React, { useState, useEffect } from 'react'
import PokeCardItem from '../components/PokeCardItem';
import axios from "axios";

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
                        <Image source={icons.search} style={{ width: 20, height: 20, tintColor: "#d9d9d9" }} />
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
                </View>
            </View>
        )
    }

    {
        search.length === 0 && Keyboard.dismiss()
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
                    />
                }
            />
        </View>
    )
}



export default HomeScreen