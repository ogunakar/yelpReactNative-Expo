import React from "react";
import {View, StyleSheet, Text, Image} from "react-native";

const ResultsDetail = ({result}) =>  {
    return (
        <View>
            <Image style={styles.image} source={{uri: result.image_url}} />
            <Text style={styles.name}>{result.name}</Text>
            <Text style={styles.rating}>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginLeft: 15,
        marginBottom: 5,
    },
    name: {
        fontWeight: "bold",
        marginLeft: 15,
    },
    rating:{
        marginLeft: 15,
        marginBottom: 10,
    }
});

export default ResultsDetail;
