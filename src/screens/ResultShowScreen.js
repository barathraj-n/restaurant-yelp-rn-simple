import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from "../api/yelp";

const ResultShowScreen = ({route}) => {
    const [result, setResult] = useState(null);
    const { id } = route.params;

    console.log(result);

    const getResult = async(id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data)
    };

    useEffect(() => {
        getResult(id)
    }, []);

    if (!result){
        return null;
    }

    return(
        <View>
        <Text>{result.name}</Text>
        <FlatList
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({ item }) => {
            return(
                <Image style={styles.imageStyle} source={{ uri: item}}/>
            );
        }}
        />
        </View>
    );
}

const styles = StyleSheet.create({
    imageStyle:{
        width: 300,
        height: 200,
    }
});

export default ResultShowScreen;