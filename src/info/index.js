import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import styles from "./styles";

export default function Info() {
    const [historicData, setHistoricData] = useState([]);
    const [lastNonNullField1, setLastNonNullField1] = useState(null);

    useEffect(() => {
        fetch("https://api.thingspeak.com/channels/2438226/fields/1.json?api_key=YPUNJTTM6YZDL146&results=30")
        .then(response => response.json())
        .then(data => {
            // Filtrar os feeds para remover os que têm valor nulo no field1
            const nonNullField1Feeds = data.feeds.filter(feed => feed.field1 !== null);

            // Ordenar os feeds pelo campo created_at do mais recente ao mais antigo
            nonNullField1Feeds.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

            setHistoricData(nonNullField1Feeds);
        })
        .catch(error => {
            console.error("Erro ao buscar dados da API do field1:", error);
        });

        fetch("https://api.thingspeak.com/channels/2436997/fields/1.json?api_key=D2CPATAEDM937H6Z&results=1")
            .then(response => response.json())
            .then(data => {
                console.log("Dados recebidos da API do field1:", data);
                // Encontrar o último elemento não nulo do field1
                const lastNonNullField1Feed = data.feeds.length > 0 ? data.feeds[0] : null;
                if (lastNonNullField1Feed && lastNonNullField1Feed.field1 !== null) {
                    setLastNonNullField1(lastNonNullField1Feed);
                }
            })
            .catch(error => {
                console.error("Erro ao buscar último elemento não nulo do field1:", error);
            });
    }, []);


    const renderItem = ({ item }) => {
        // Converter a string de data para um objeto Date
        const date = new Date(item.created_at);
    
        // Extrair o dia, mês e ano
        const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
        const month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1; // Os meses começam do zero, então adicionamos 1
        const year = date.getFullYear();
    
        // Formatar a data no formato desejado: 'DD/MM/YYYY'
        const formattedDate = `${day}/${month}/${year}`;
    
        return (
            <View style={styles.listItem}>
                <Text style={styles.datas}>{formattedDate}</Text>
                <Text style={styles.datas}>
                    {item.field1 !== undefined && item.field1 !== null ? item.field1 + '%' : 'N/A'}
                </Text>
            </View>
        );
    };

    return (
        <View style={styles.viewTotal}>
            <View style={styles.container}>
                <Text style={styles.title}>Porcentagem atual:</Text>
                <View style={styles.atual}>
                <Text style={styles.texto}>
                    {lastNonNullField1 && lastNonNullField1.field1 !== null 
                    ? lastNonNullField1.field1 + '%' : 'N/A'}
                </Text>

                </View>
            </View>

            <View style={styles.dataContainer}>
                <Text style={styles.title}>Histórico:</Text>
                <FlatList
                    style={styles.listContainer}
                    data={historicData}
                    renderItem={renderItem}
                    keyExtractor={item => item.entry_id.toString()}
                />
            </View>
        </View>
    );
}
