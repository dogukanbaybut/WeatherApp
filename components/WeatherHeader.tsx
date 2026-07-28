import { StyleSheet, Text, View } from 'react-native';

type Props = {
  city: string;
};

export default function WeatherHeader({ city }: Props) {
  const today = new Date().toLocaleDateString('tr-TR', {
    day: 'numeric',
    month: 'long',
    weekday: 'long',
  });

  return (
    <View style={styles.header}>
      <Text style={styles.city}>{city}</Text>
      <Text style={styles.date}>{today}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    marginBottom: 24,
  },
  city: {
    fontSize: 30,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: 0.5,
  },
  date: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.75)',
    marginTop: 4,
    textTransform: 'capitalize',
  },
});
