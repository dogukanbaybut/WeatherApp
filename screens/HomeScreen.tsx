import { StyleSheet, View } from 'react-native';
import WeatherHeader from '../components/WeatherHeader';
import WeatherMain from '../components/WeatherMain';
import WeatherDetails from '../components/WeatherDetails';
// '../components/...' → bir üst klasöre çık, sonra components'e gir
// (HomeScreen artık screens/ klasöründe olduğu için '../' gerekiyor)

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <WeatherHeader />
            <WeatherMain />
            <WeatherDetails />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4A90D9',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 24,
    },
});