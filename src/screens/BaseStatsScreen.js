import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { COLORS, FONTS, SIZES } from '../constants';

const BaseStatsScreen = ({ route }) => {

    const { pokemon } = route.params;

    const getStatNames = () => {
        let statNames = [];
        for (let i = 0; i < pokemon.stats.length; i++) {
            statNames.push(pokemon.stats[i].stat.name);
        }
        return statNames;
    }

    function renderStats() {
        return (
            <View
                style={{
                    margin: SIZES.padding2,
                }}
            >
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>Base Experience:</Text>
                    <Text style={{ color: COLORS.black, ...FONTS.body4, marginLeft: 50 }}>{pokemon?.base_experience}</Text>
                </View>
                {/* map through getStatNames and draw a stat graph */}
                <View style={{ flex: 1 }}>
                    {
                        getStatNames().map((stat, index) => {
                            return (
                                <View key={index} style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', paddingVertical: SIZES.base }}>
                                    <Text style={{ flex: 1, color: COLORS.gray, ...FONTS.body4 }}>{stat.charAt(0).toUpperCase() + stat.slice(1)}:</Text>
                                    <Text style={{ flex: 1, color: COLORS.black, ...FONTS.body4, marginLeft: 50 }}>{pokemon?.stats[index].base_stat}</Text>
                                    <View style={{ flex: 1, height: 5, backgroundColor: COLORS.black, borderRadius: 20 }}>
                                        <View
                                            style={{
                                                width: pokemon?.stats[index].base_stat,
                                                height: '100%',
                                                backgroundColor: pokemon?.stats[index].base_stat >= 80 ? COLORS.green : COLORS.red
                                            }}
                                        />
                                    </View>
                                </View>
                            )
                        }
                        )
                    }
                </View>
            </View>
        )
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, backgroundColor: COLORS.white }}>
            {renderStats()}
        </ScrollView>
    )
}

export default BaseStatsScreen