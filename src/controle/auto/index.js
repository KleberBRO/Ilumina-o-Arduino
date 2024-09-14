import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";

export default function Auto() {
    return (
        <View style={styles.containerStyle}>
            <Text style={styles.inputLabel}>Digite a Quantidade de Horas:</Text>

            <TextInput 
                style={styles.autoInput}
                placeholder="ex: 18"
                keyboardType="numeric"
            />

            <TouchableOpacity style={styles.buttons}>
                <Text style={styles.textButtom}>Salvar</Text>
            </TouchableOpacity>
        </View>

    );
}