import {View, Text} from "react-native";
import {useState} from "react";

export default function Pool() {

    const [pool, setPool] = useState(0);

    const getPool = async () => {
        const pool = 200;
        setPool(pool);
    }

    return (
        <View>
            <Text>Pool</Text>
            <Text>Money Amount</Text>
        </View>
    );
}