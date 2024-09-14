import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./styles";
import Auto from "./auto";
import Manual from "./manual";

export default function Controle() {
    const[modo, setModo] = useState('auto');

    return (
        <View style={styles.viewStyle}>
            <View style={styles.containerStyle}>
                <TouchableOpacity style={styles.buttons} 
                onPress={() => setModo('auto')}>
                    <Text style={[styles.textButtom, modo === 'auto' && styles.activeButton]}>Automático</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttons} onPress={() => setModo('manual')}>
                    <Text style={[styles.textButtom, modo === 'manual' && styles.activeButton]}>Manual</Text>
                </TouchableOpacity>
            </View>
            {modo === 'auto' ? <Auto/> : <Manual/>}
        </View>
    );
}