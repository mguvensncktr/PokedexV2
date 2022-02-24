import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { COLORS, SIZES, FONTS } from '../constants'

const AboutScreen = ({ route }) => {

    const { pokemon } = route.params;

    function renderInfo() {
        return (
            <View style={{ margin: SIZES.padding2 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: SIZES.base }}>
                    <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>Species:</Text>
                    <Text style={{ color: COLORS.black, ...FONTS.body4, marginLeft: 50 }}>{pokemon.about.species}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: SIZES.base }}>
                    <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>Height:</Text>
                    <Text style={{ color: COLORS.black, ...FONTS.body4, marginLeft: 50 }}>{pokemon.about.height}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: SIZES.base }}>
                    <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>Weight:</Text>
                    <Text style={{ color: COLORS.black, ...FONTS.body4, marginLeft: 50 }}>{pokemon.about.weight}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: SIZES.base }}>
                    <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>Abilities:</Text>
                    {
                        pokemon.about.abilities.map((item, idx) => {
                            return (
                                <Text key={idx} style={{ color: COLORS.black, ...FONTS.body4, marginLeft: idx === 0 ? 50 : 0 }}>{item}{idx === 0 ? ',' : null}</Text>
                            )
                        })
                    }
                </View>
                <Text style={{ color: COLORS.black, ...FONTS.h4, marginTop: SIZES.base }}>Breeding</Text>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingVertical: SIZES.base,
                    }}
                >
                    <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>Egg Groups:</Text>
                    <Text style={{ color: COLORS.black, ...FONTS.body4, marginLeft: 50 }}>{pokemon.about.breeding.egggroup}</Text>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingVertical: SIZES.base,
                    }}
                >
                    <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>Egg Cycle:</Text>
                    <Text style={{ color: COLORS.black, ...FONTS.body4, marginLeft: 50 }}>{pokemon.about.breeding.eggCycle}</Text>
                </View>
            </View>
        )
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, backgroundColor: COLORS.white }}>
            {renderInfo()}
        </ScrollView>
    )
}

export default AboutScreen