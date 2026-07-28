import { StyleSheet, Text, View } from 'react-native';

type Props = {
    temperature: number;
    description: string;
    icon: string; // OpenWeatherMap'ten gelen "main" alanı (Clear, Clouds, Rain vb.)
};

// API'den gelen hava durumu koduna göre uygun emoji seçen küçük yardımcı fonksiyon
function getWeatherEmoji(icon: string) {
    switch (icon) {
        case 'Clear':
            return '☀️';
        case 'Clouds':
            return '☁️';
        case 'Rain':
        case 'Drizzle':
            return '🌧️';
        case 'Thunderstorm':
            return '⛈️';
        case 'Snow':
            return '❄️';
        default:
            return '🌡️'; // sis, toz vb. tanımadığımız durumlar için varsayılan
    }
}

export default function WeatherMain({ temperature, description, icon }: Props) {
    return (
        <View style={styles.mainInfo}>
            <Text style={styles.weatherEmoji}>{getWeatherEmoji(icon)}</Text>
            {/* Math.round: API ondalıklı sıcaklık gönderiyor (28.43 gibi), yuvarlıyoruz */}
            <Text style={styles.temperature}>{Math.round(temperature)}°</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    mainInfo: {
        alignItems: 'center',
        marginBottom: 48,
    },
    weatherEmoji: {
        fontSize: 80,
    },
    temperature: {
        fontSize: 72,
        fontWeight: '200',
        color: '#FFFFFF',
    },
    description: {
        fontSize: 20,
        color: '#FFFFFF',
        marginTop: 4,
        textTransform: 'capitalize', // API "açık" gibi küçük harfle döndürebiliyor, ilk harfi büyütüyoruz
    },
});