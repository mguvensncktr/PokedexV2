import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { COLORS, SIZES, FONTS } from '../constants';

const MovesScreen = ({ route }) => {

    const { pokemon } = route.params;

    // create a list of moves and the learning method with learned at level
    const moves = pokemon.moves.map(move => {
        return {
            name: move.move.name,
            level: move.version_group_details[0].level_learned_at,
            method: move.version_group_details[0].move_learn_method.name
        }
    })

    // sort the moves by level
    const sortedMoves = moves.sort((a, b) => {
        return a.level - b.level
    })

    function renderMoves() {
        return (
            <View style={{ margin: SIZES.padding2 }}>
                <Text style={{ color: COLORS.black, ...FONTS.h4, textAlign: 'center' }}>{moves.length} total moves</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: SIZES.padding }}>
                    <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>Moves</Text>
                    <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>Lv. Learned at</Text>
                    <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>Learn Method</Text>
                </View>
                {
                    sortedMoves.map((move, idx) => {
                        return (
                            <View key={idx} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: SIZES.base }}>
                                <Text style={{ flex: 1, color: COLORS.gray, ...FONTS.body4 }}>{move.name.charAt(0).toUpperCase() + move.name.slice(1)}:</Text>
                                <Text style={{ flex: 1, color: COLORS.black, ...FONTS.body4, marginLeft: 50 }}>{move.level}</Text>
                                <Text style={{ flex: 1, color: COLORS.black, ...FONTS.body4, marginLeft: 50 }}>{move.method.charAt(0).toUpperCase() + move.method.slice(1)}</Text>
                            </View>
                        )
                    })
                }
            </View>
        )
    }


    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, backgroundColor: COLORS.white }}>
            {renderMoves()}
        </ScrollView>
    )
}

export default MovesScreen