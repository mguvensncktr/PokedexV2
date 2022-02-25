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
                    <Text style={{ color: COLORS.black, ...FONTS.body4, marginLeft: 50 }}>Pokemon</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: SIZES.base }}>
                    <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>Height:</Text>
                    <Text style={{ color: COLORS.black, ...FONTS.body4, marginLeft: 50 }}>{pokemon?.height / 10} m</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: SIZES.base }}>
                    <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>Weight:</Text>
                    <Text style={{ color: COLORS.black, ...FONTS.body4, marginLeft: 50 }}>{pokemon?.weight / 10} kg</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: SIZES.base }}>
                    <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>Abilities:</Text>
                    {
                        pokemon?.abilities.map((ability, idx) => {
                            return (
                                <Text key={idx} style={{ color: COLORS.black, ...FONTS.body4, marginLeft: idx === 0 ? 50 : 0 }}>{ability.ability.name.charAt(0).toUpperCase() + ability.ability.name.slice(1)}{idx === 0 ? ',' : null}</Text>
                            )
                        })
                    }
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