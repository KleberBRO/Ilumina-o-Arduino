import React, { useState } from "react";
import { View, Text, Switch} from "react-native";
import styles from "./styles";

export default function Manual() {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View style={styles.containerStyle}>
            <Switch style={styles.switch}
                trackColor={{false: '#fff', true: "#50FF96"}}
                thumbColor={"#d1d1d1"}
                onValueChange={toggleSwitch}
                value={isEnabled}
                
            />
            <Text style={styles.inputLabel}>
                {isEnabled ? "Ativo" : "Desativado"}
            </Text>
        </View>

    );
}