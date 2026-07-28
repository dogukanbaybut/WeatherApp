import { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import WeatherHeader from '../components/WeatherHeader';
import WeatherMain from '../components/WeatherMain';
import WeatherDetails from '../components/WeatherDetails';
import { fetchWeather } from '../services/weatherApi';

export default function HomeScreen() {
    const [weather, setWeather] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function loadWeather() {
            try {
                setLoading(true);
                const data = await fetchWeather('Istanbul');
                setWeather(data);
            } catch (err) {
                setError('Hava durumu alınamadı, tekrar dene.');
            } finally {
                setLoading(false);
            }
        }

        loadWeather();
    }, []);

    return (
        <View style={styles.container}>
            {loading ? (
                <ActivityIndicator size="large" color="#FFFFFF" />
            ) : error ? (
                <Text style={styles.errorText}>{error}</Text>
            ) : weather ? (
                // weather objesi geldiyse, içindeki alanları component'lere props olarak dağıtıyoruz.
                // OpenWeatherMap'in cevap yapısı: { name, main: { temp, feels_like, humidity }, wind: { speed }, weather: [{ main, description }] }
                <>
                    <WeatherHeader city={weather.name} />
                    <WeatherMain
                        temperature={weather.main.temp}
                        description={weather.weather[0].description}
                        icon={weather.weather[0].main}
                    />
                    <WeatherDetails
                        feelsLike={weather.main.feels_like}
                        humidity={weather.main.humidity}
                        windSpeed={weather.wind.speed * 3.6} // API m/s döndürüyor, km/s'e çeviriyoruz (1 m/s = 3.6 km/s)
                    />
                </>
            ) : null}
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
    errorText: {
        color: '#FFFFFF',
        fontSize: 16,
        textAlign: 'center',
    },
});