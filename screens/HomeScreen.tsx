import { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import WeatherHeader from '../components/WeatherHeader';
import WeatherMain from '../components/WeatherMain';
import WeatherDetails from '../components/WeatherDetails';
import SearchBar from '../components/SearchBar';
import ForecastList from '../components/ForecastList';
import SearchHistory from '../components/SearchHistory';
import { fetchWeather, fetchWeatherByCoords, fetchForecast } from '../services/weatherApi';
import { getCurrentCoords } from '../services/locationService';
import { getSearchHistory, addToSearchHistory } from '../services/storage';
import { getDailyForecast } from '../utils/forecast';

export default function HomeScreen() {
  const [city, setCity] = useState('Istanbul');
  const [weather, setWeather] = useState<any>(null);
  const [forecast, setForecast] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => {
    getSearchHistory().then(setHistory);
  }, []);

  useEffect(() => {
    async function loadWeather() {
      try {
        setLoading(true);
        setError(null);

        const data = await fetchWeather(city);
        setWeather(data);

        const forecastData = await fetchForecast(city);
        setForecast(getDailyForecast(forecastData.list));

        const updatedHistory = await addToSearchHistory(data.name);
        setHistory(updatedHistory);
      } catch (err) {
        setError('Şehir bulunamadı, tekrar dene.');
      } finally {
        setLoading(false);
      }
    }

    loadWeather();
  }, [city]);

  function handleSearch(newCity: string) {
    setCity(newCity);
  }

  async function handleUseLocation() {
    try {
      setLoading(true);
      setError(null);

      const { latitude, longitude } = await getCurrentCoords();
      const data = await fetchWeatherByCoords(latitude, longitude);
      setWeather(data);

      const forecastData = await fetchForecast(data.name);
      setForecast(getDailyForecast(forecastData.list));

      const updatedHistory = await addToSearchHistory(data.name);
      setHistory(updatedHistory);
    } catch (err) {
      setError('Konum alınamadı, izin verdiğinden emin ol.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <LinearGradient colors={['#1CB5E0', '#0B2447']} style={styles.outer}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <SearchBar onSearch={handleSearch} onLocationPress={handleUseLocation} />
        <SearchHistory history={history} onSelect={handleSearch} />

        {loading ? (
          <ActivityIndicator size="large" color="#FFFFFF" style={styles.loader} />
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
            <ForecastList data={forecast} />
          </>
        ) : null}
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  outer: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 64,
    paddingBottom: 48,
  },
  loader: {
    marginTop: 60,
  },
  errorText: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 60,
  },
});
