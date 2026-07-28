import { View, Text, StyleSheet } from 'react-native';

export default function WeatherHeader() {
    return (
        <View style={styles.header}>
            <Text style={styles.city}>İstanbul</Text>
            <Text style={styles.date}>28 Temmuz 2026, Salı</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        alignItems: 'center', // içindeki metinleri yatayda ortala
        marginBottom: 40,     // altındaki bölümden boşluk bırak
    },
    city: {
        fontSize: 32,
        fontWeight: '700', // kalın yazı, göze çarpsın
        color: '#FFFFFF',
    },
    date: {
        fontSize: 16,
        color: '#E0ECFA', // beyazdan biraz soluk ton, görsel hiyerarşi için
        marginTop: 4,      // şehir adıyla arasına küçük bir boşluk
    },
}
)