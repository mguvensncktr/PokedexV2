import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../constants';

const BaseStatsScreen = ({ route }) => {

    const { pokemon } = route.params;

    function renderStats() {
        return (
            <View
                style={{
                    margin: SIZES.padding2,
                }}
            >
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View>
                        {
                            pokemon.stats.map((item, index) => {
                                return (
                                    <View style={{ paddingVertical: SIZES.base }}>
                                        <Text style={{ color: COLORS.gray, ...FONTS.body4 }} key={index}>{item[0]}</Text>
                                    </View>
                                )
                            })
                        }
                    </View>
                    <View>
                        {
                            pokemon.stats.map((item, index) => {
                                return (
                                    <View style={{ paddingVertical: SIZES.base }}>
                                        <Text style={{ color: COLORS.black, ...FONTS.body4 }} key={index}>{item[1]}</Text>
                                    </View>
                                )
                            })
                        }
                    </View>
                </View>
            </View>
        )
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, backgroundColor: COLORS.white }}>
            {/* {renderStats()} */}
        </ScrollView>
    )
}

export default BaseStatsScreen