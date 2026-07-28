import { ScrollView, StyleSheet, Text } from 'react-native';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';

type ForecastItem = {
  date: string;
  temp: number;
  description: string;
  icon: string;
};

type Props = {
  data: ForecastItem[];
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

function getDayLabel(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('tr-TR', { weekday: 'short' });
}

export default function ForecastList({ data }: Props) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
      {data.map((item) => (
        <BlurView key={item.date} intensity={30} tint="light" style={styles.dayCard}>
          <Text style={styles.dayLabel}>{getDayLabel(item.date)}</Text>
          <Ionicons name={getIconName(item.icon)} size={26} color="#FFFFFF" style={styles.icon} />
          <Text style={styles.temp}>{Math.round(item.temp)}°</Text>
        </BlurView>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  dayCard: {
    borderRadius: 20,
    paddingVertical: 16,
    paddingHorizontal: 16,
    alignItems: 'center',
    marginRight: 10,
    minWidth: 72,
    overflow: 'hidden',
  },
  dayLabel: {
    color: 'rgba(255,255,255,0.85)',
    fontSize: 13,
    marginBottom: 8,
    textTransform: 'capitalize',
  },
  icon: {
    marginBottom: 8,
  },
  temp: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});
