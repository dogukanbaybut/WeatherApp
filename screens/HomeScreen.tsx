import { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import WeatherHeader from '../components/WeatherHeader';
import WeatherMain from '../components/WeatherMain';
import WeatherDetails from '../components/WeatherDetails';
import SearchBar from '../components/SearchBar';
import { fetchWeather } from '../services/weatherApi';

export default function HomeScreen() {
    // artık aranacak şehir de bir state - başlangıçta İstanbul
    const [city, setCity] = useState('Istanbul');
    const [weather, setWeather] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function loadWeather() {
            try {
                setLoading(true);
                setError(null); // yeni aramada eski hatayı temizle
                const data = await fetchWeather(city); // artık sabit 'Istanbul' değil, state'teki city
                setWeather(data);
            } catch (err) {
                setError('Şehir bulunamadı, tekrar dene.');
            } finally {
                setLoading(false);
            }
        }

        loadWeather();
    }, [city]); // <- [city]: city değeri her değiştiğinde bu efekt yeniden çalışır

    // SearchBar'dan gelen "ara" isteğini karşılayan fonksiyon.
    // Burada sadece city state'ini güncelliyoruz, useEffect zaten [city] değişimini görüp fetch'i tetikleyecek.
    function handleSearch(newCity: string) {
        setCity(newCity);
    }

    return (
        <View style={styles.container}>
            <SearchBar onSearch={handleSearch} />

            {loading ? (
                <ActivityIndicator size="large" color="#FFFFFF" />
            ) : error ? (
                <Text style={styles.errorText}>{error}</Text>
            ) : weather ? (
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
                        windSpeed={weather.wind.speed * 3.6}
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