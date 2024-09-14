import React, {useState} from 'react';
import { View, Text, Switch } from "react-native";
import styles from "./styles";

export default function Instrucoes() {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    
    return(
        <View style={styles.viewTotal}>
            <View style={styles.container}>
                <Switch style={styles.switch}
                    trackColor={{false: '#fff', true: "#50FF96"}}
                    thumbColor={"#d1d1d1"}
                    onValueChange={toggleSwitch}
                    value={isEnabled} 
                />
                
                <Text style={styles.texto}>Marque para receber uma notificação
                    a cada 7 dias para girar a planta.
                </Text>
            </View>
        </View>
    );
}