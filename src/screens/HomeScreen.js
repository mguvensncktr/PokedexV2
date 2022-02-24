import { View, Text, Image, TextInput, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import PokeCardItem from '../components/PokeCardItem';

// constants
import { COLORS, SIZES, FONTS, icons, pokemons } from '../constants'

const HomeScreen = () => {

    const [search, setSearch] = useState('');
    const [pokemonsList, setPokemonsList] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setPokemonsList(pokemons);
        setLoading(false);
    }, [])

    const handleSearch = (text) => {
        setSearch(text);
        const newData = pokemons.filter(item => {
            const itemData = `${item.name.toUpperCase()}`;
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });
        setPokemonsList(newData);
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

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.white }}>
            {renderHeaderAndSearchBar()}
            <FlatList
                style={{ margin: 5 }}
                data={pokemonsList}
                keyExtractor={item => `${item.id}`}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <PokeCardItem item={item} />}
            />
        </View>
    )
}


export default HomeScreen