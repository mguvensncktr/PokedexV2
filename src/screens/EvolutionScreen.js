import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { COLORS, FONTS, SIZES } from '../constants';
import { AntDesign } from '@expo/vector-icons';

const EvolutionScreen = ({ route }) => {

    const { evolveChain } = route.params;
    const [evo1, setEvo1] = useState(evolveChain.species.name);
    const [evo2, setEvo2] = useState(evolveChain.evolves_to[0].species.name);
    const [evo3, setEvo3] = useState(evolveChain.evolves_to[0].evolves_to[0].species.name);

    function renderEvolutionChain() {
        return (
            <View
                style={{
                    margin: SIZES.padding2,
                    alignItems: 'center'
                }}
            >
                <Text style={{ color: COLORS.black, ...FONTS.h3 }}>Evolution Chain</Text>
                <View style={{ marginTop: SIZES.base, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View>
                        <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>First Form</Text>
                        <Text style={{ color: COLORS.black, ...FONTS.body3 }}>{evo1.charAt(0).toUpperCase() + evo1.slice(1)}</Text>
                    </View>
                    <AntDesign name="arrowright" size={35} color={COLORS.black} />
                    <View>
                        <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>2nd Form</Text>
                        <Text style={{ color: COLORS.black, ...FONTS.body3 }}>{evo2.charAt(0).toUpperCase() + evo2.slice(1)}</Text>
                        <View style={{ marginTop: SIZES.padding2 }}>
                            <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>Trigger</Text>
                            <Text style={{ color: COLORS.black, ...FONTS.body3 }}>{evolveChain.evolves_to[0].evolution_details[0].trigger.name}</Text>
                        </View>
                        <View style={{ marginTop: SIZES.padding2 }}>
                            <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>Min. Level</Text>
                            <Text style={{ color: COLORS.black, ...FONTS.body3 }}>{evolveChain.evolves_to[0].evolution_details[0].min_level}</Text>
                        </View>
                    </View>
                    <AntDesign name="arrowright" size={35} color={COLORS.black} />
                    <View>
                        <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>3rd Form</Text>
                        <Text style={{ color: COLORS.black, ...FONTS.body3 }}>{evo3.charAt(0).toUpperCase() + evo3.slice(1)}</Text>
                        <View style={{ marginTop: SIZES.padding2 }}>
                            <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>Trigger</Text>
                            <Text style={{ color: COLORS.black, ...FONTS.body3 }}>{evolveChain.evolves_to[0].evolves_to[0].evolution_details[0].trigger.name}</Text>
                        </View>
                        <View style={{ marginTop: SIZES.padding2 }}>
                            {
                                evolveChain.evolves_to[0].evolves_to[0].evolution_details[0].item ?
                                    <View>
                                        <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>Item</Text>
                                        <Text style={{ color: COLORS.black, ...FONTS.body3 }}>{evolveChain.evolves_to[0].evolves_to[0].evolution_details[0].item.name}</Text>
                                    </View>
                                    :
                                    <View>
                                        <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>Min. Level</Text>
                                        <Text style={{ color: COLORS.black, ...FONTS.body3 }}>{evolveChain.evolves_to[0].evolves_to[0].evolution_details[0].min_level}</Text>
                                    </View>
                            }
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, backgroundColor: COLORS.white }}>
            {renderEvolutionChain()}
        </ScrollView>
    )
}

export default EvolutionScreen