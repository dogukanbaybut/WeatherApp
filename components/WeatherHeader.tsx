import { StyleSheet, Text, View } from 'react-native';

// props'un tipini tanımlıyoruz: bu component'in "city" adında bir string alması gerektiğini söylüyoruz
type Props = {
    city: string;
};

// { city }: gelen props objesinden direkt "city" alanını çekiyoruz (destructuring)
export default function WeatherHeader({ city }: Props) {
    return (
        <View style={styles.header}>
            <Text style={styles.city}>{city}</Text>
            <Text style={styles.date}>28 Temmuz 2026, Salı</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        marginBottom: 40,
    },
    city: {
        fontSize: 32,
        fontWeight: '700',
        color: '#FFFFFF',
    },
    date: {
        fontSize: 16,
        color: '#E0ECFA',
        marginTop: 4,
    },
});