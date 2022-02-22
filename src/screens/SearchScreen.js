import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
// import yelp from '../api/yelp';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultList';

const SearchScreen = () => {

    const [term, setTerm] = useState('');
    const [searchApi, errorMessage, results] = useResults();

    console.log(results)

    const filterResultByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        });
    }

    return(
        <>
            <SearchBar 
            term={term} 
            onTermChange={setTerm} 
            onTermSubmit={() => searchApi(term)}></SearchBar>
            {errorMessage ? <Text>{errorMessage}</Text> : null }
            <ScrollView>
            <ResultList title='Budget' results={filterResultByPrice('$')}/>
            <ResultList title='Economy' results={filterResultByPrice('$$')}/>
            <ResultList title='Premium' results={filterResultByPrice('$$$')}/>
            <ResultList title='Elite' results={filterResultByPrice('$$$$')}/>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;