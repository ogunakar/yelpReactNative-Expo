import React from "react";
import { View, TextInput, StyleSheet, } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {


    return (
        <View style={styles.background}>
            <MaterialIcons name="search" style={styles.iconStyle} color="black" />
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.inputStyle}
                placeholder="Search"
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    background:{
        marginTop: 10,
        backgroundColor: "rgba(231,224,224,0.65)",
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: "row",
        marginBottom: 10,
    },
    inputStyle: {
        fontSize: 18,
        flex: 1,
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: "center",
        marginHorizontal: 10,
    }
});

export default SearchBar;
