import {View, Text, Image, StyleSheet} from "react-native";
import '../styles/Navigation.css';

function Navigation(){
    return (
        <View style={styles.container}>
            <Image source={require('../assets/Logos/logo.png')}/>
            <Image source={require('../assets/Logos/logo.png')}/>
            <Image source={require('../assets/Logos/logo.png')}/>
            <Image source={require('../assets/Logos/logo.png')}/>
            <Image source={require('../assets/Logos/logo.png')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
    },
});

export default Navigation;
