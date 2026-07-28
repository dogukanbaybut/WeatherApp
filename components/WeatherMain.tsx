import { StyleSheet, Text } from 'react-native';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';

type Props = {
  temperature: number;
  description: string;
  icon: string; // OpenWeatherMap'ten gelen "main" alanı (Clear, Clouds, Rain vb.)
};

function getIconName(icon: string): keyof typeof Ionicons.glyphMap {
  switch (icon) {
    case 'Clear':
      return 'sunny';
    case 'Clouds':
      return 'cloudy';
    case 'Rain':
    case 'Drizzle':
      return 'rainy';
    case 'Thunderstorm':
      return 'thunderstorm';
    case 'Snow':
      return 'snow';
    default:
      return 'partly-sunny';
  }
}

export default function WeatherMain({ temperature, description, icon }: Props) {
  return (
    <BlurView intensity={40} tint="light" style={styles.card}>
      <Ionicons name={getIconName(icon)} size={72} color="#FFFFFF" />
      <Text style={styles.temperature}>{Math.round(temperature)}°</Text>
      <Text style={styles.description}>{description}</Text>
    </BlurView>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    borderRadius: 28,
    paddingVertical: 32,
    alignItems: 'center',
    overflow: 'hidden', // BlurView'in köşeleri borderRadius'a uysun diye şart
    marginBottom: 20,
  },
  temperature: {
    fontSize: 64,
    fontWeight: '200',
    color: '#FFFFFF',
    marginTop: 8,
  },
  description: {
    fontSize: 18,
    color: '#FFFFFF',
    marginTop: 4,
    textTransform: 'capitalize',
  },
});
