import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";



const SearchScreen = () => {
    const [term, setTerm] = useState(" ");
    const [searchApi, results, errorMessage] = useResults();

    const filterPrice = (price) => {
        return results.filter( result => {
            return result.price === price;
        });
    }

    return (
        <View style={{flex: 1}}>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
            <ResultsList results={filterPrice("$")} title="Cost Effective"/>
            <ResultsList results={filterPrice("$$")} title="Bit Pricier"/>
            <ResultsList results={filterPrice("$$$")} title="Big Spender"/>
            <ResultsList results={filterPrice("$$$$")} title="Super Expensive"/>
            </ScrollView>
        </View>
    );
};


const styles = StyleSheet.create({

});

export default SearchScreen;
