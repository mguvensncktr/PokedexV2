import { View, Text, TouchableOpacity, Image, Platform } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import TypeCard from '../components/TypeCard';
import TopTabNavigation from '../navigation/TopTabNavigation';

// constants
import { SIZES, COLORS, FONTS, icons } from '../constants'

const DetailScreen = ({ route }) => {

    const navigation = useNavigation();
    const { backgroundColor, pokemon } = route.params;

    function renderHeader() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: 45,
                    marginHorizontal: SIZES.padding2
                }}
            >
                <TouchableOpacity
                    style={{
                        width: 25,
                        height: 25,
                        borderRadius: 10,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    onPress={() => navigation.goBack()}
                >
                    <Image source={icons.back} style={{ width: 25, height: 25, tintColor: COLORS.white }} resizeMode="contain" />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        width: 25,
                        height: 25,
                        borderRadius: 10,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    onPress={() => console.log("Liked")}
                >
                    <Image source={icons.heart_icon} style={{ width: 25, height: 25, tintColor: COLORS.white }} resizeMode="contain" />
                </TouchableOpacity>
            </View>
        )
    }

    function renderPokemonDetailHeader() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginHorizontal: SIZES.padding2,
                    marginTop: SIZES.radius,
                    justifyContent: 'space-between'
                }}
            >
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ color: COLORS.white, ...FONTS.h1 }}>{pokemon?.name.charAt(0).toUpperCase() + pokemon?.name.slice(1)}</Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginTop: SIZES.base
                        }}
                    >
                        <TypeCard text={pokemon?.types[0].type.name} containerStyle={{ marginRight: 5 }} />
                        {
                            pokemon?.types[1] &&
                            <TypeCard text={pokemon?.types[1].type.name} containerStyle={{ marginRight: 5 }} />
                        }
                    </View>
                </View>
                <Text style={{ color: COLORS.white, ...FONTS.body2 }}>#{pokemon?.id.toString().padStart(3, '0')}</Text>
            </View>
        )
    }

    function renderPokemonImage() {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, zIndex: 999 }}>
                <Image source={{ uri: pokemon?.sprites.front_default }} style={{ width: '100%', height: 250 }} resizeMode="contain" />
            </View>
        )
    }

    function renderPokemonDetails() {
        return (
            <View style={{ flex: 1, backgroundColor: COLORS.white, marginTop: Platform.OS === 'ios' ? -55 : -130, borderTopLeftRadius: SIZES.radius, borderTopRightRadius: SIZES.radius }}>
                <TopTabNavigation pokemon={pokemon} />
            </View>
        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: backgroundColor }}>
            {renderHeader()}
            {renderPokemonDetailHeader()}
            {renderPokemonImage()}
            {renderPokemonDetails()}
        </View>
    )
}

export default DetailScreen