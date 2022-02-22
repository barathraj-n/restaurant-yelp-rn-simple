import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import ResultDetail from "./ResultDetail";

const ResultList = ({title, results}) => {

    const navigation = useNavigation();

    if (!results.length) {
        return null;
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor={result => result.id}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity onPress={() => navigation.navigate('Detail', {id: item.id})}>
                        <ResultDetail result={item}/>
                    </TouchableOpacity>
                )
            }}s
            />
        </View>
    );
}

const styles = StyleSheet.create({
    titleStyle: {
        marginLeft: 15,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    container: {
        marginBottom: 10,
    },
});

export default ResultList;