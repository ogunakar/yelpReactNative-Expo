import React, {useState, useEffect} from "react";
import { Text, StyleSheet, Image, FlatList} from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({navigation}) => {
    const id = navigation.getParam("id");
    const [result, setResult] = useState(null);

    const getResult = async id => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };
    useEffect(() => {
        getResult(id);
    }, []);

    if(!result){
        return null;
    }

return (
    <>
        <Text style={styles.resultText}>{result.name}</Text>
        <FlatList
            data={result.photos}
            keyExtractor={(photo) => photo }
            renderItem={({item}) => {
                return <Image style={styles.image} source={{uri: item}} />
            }}
        />
    </>
)
};

const styles = StyleSheet.create({
    image:{
        height: 250,
        width: "95%",
        borderRadius: 4,
        alignSelf: "center",
        marginVertical: 5,
    },
    resultText: {
        marginVertical: 10,
        fontWeight: "bold",
        fontSize: 18,
        alignSelf: "center",
    }
});

export default ResultsShowScreen;
