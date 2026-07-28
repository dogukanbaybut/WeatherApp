import { StyleSheet, Text, View } from 'react-native';
import { BlurView } from 'expo-blur';
import { Feather } from '@expo/vector-icons';

type Props = {
  feelsLike: number;
  humidity: number;
  windSpeed: number; // km/s cinsinden
};

export default function WeatherDetails({ feelsLike, humidity, windSpeed }: Props) {
  return (
    <BlurView intensity={30} tint="light" style={styles.card}>
      <View style={styles.item}>
        <Feather name="thermometer" size={20} color="#FFFFFF" />
        <Text style={styles.label}>Hissedilen</Text>
        <Text style={styles.value}>{Math.round(feelsLike)}°</Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.item}>
        <Feather name="droplet" size={20} color="#FFFFFF" />
        <Text style={styles.label}>Nem</Text>
        <Text style={styles.value}>%{humidity}</Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.item}>
        <Feather name="wind" size={20} color="#FFFFFF" />
        <Text style={styles.label}>Rüzgar</Text>
        <Text style={styles.value}>{Math.round(windSpeed)} km/s</Text>
      </View>
    </BlurView>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    width: '100%',
    borderRadius: 24,
    paddingVertical: 20,
    overflow: 'hidden',
    marginBottom: 20,
  },
  item: {
    flex: 1,
    alignItems: 'center',
  },
  divider: {
    width: 1,
    backgroundColor: 'rgba(255,255,255,0.25)',
  },
  label: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.8)',
    marginTop: 6,
  },
  value: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
    marginTop: 2,
  },
});
