import React from 'react';
import { View, StyleSheet, TextInput} from 'react-native';
import { Feather } from '@expo/vector-icons'

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return(
        <View style={styles.searchBarStyle}>
            <Feather name='search' style={styles.iconStyle}/>
            <TextInput
            style={styles.textInputStyle} 
            autoCapitalize='none'
            autoCorrect={false}
            placeholder='Search'
            value={term}
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}/>
        </View>
    );
};

const styles = StyleSheet.create({
    searchBarStyle: {
        marginVertical: 10,
        backgroundColor: 'lightgray',
        flexDirection: 'row',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
    },
    textInputStyle:{
        fontSize: 18,
        flex: 1,
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15,
    }
});

export default SearchBar;