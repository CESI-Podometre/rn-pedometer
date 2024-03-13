import {ImageBackground, StyleSheet, Text} from "react-native";
import {useEffect, useState} from "react";

export default function Pool() {

    const [pool, setPool] = useState(0);

    // const poolBackground = {uri: 'https://t3.ftcdn.net/jpg/04/84/21/36/360_F_484213675_pCsyhX0ZqQ6jpG1NnkggHe6WiTxen8kk.jpg'};
    let poolBackground = require('../assets/Backgrounds/pool-background.png');

    const getPool = async () => {
        const pool = 200;
        setPool(pool);
    }

    useEffect(() => {
        getPool();
    }, []);

    return (
        <ImageBackground source={poolBackground} style={styles.container}>
            <Text style={styles.text}>CAGNOTTE</Text>
            <Text style={styles.text}>{pool}€</Text>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        borderBottomEndRadius: 60,
        borderBottomStartRadius: 60,
        overflow: 'hidden',

        paddingTop: 80,
        paddingBottom: 40,
        alignItems: 'center',
        justifyContent: 'center',

        gap: 10,
    },

    text: {
        fontSize: 24,
        fontWeight: '500',
        color: 'white',
    },
});
