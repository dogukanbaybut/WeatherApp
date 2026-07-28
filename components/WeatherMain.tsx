import { StyleSheet, Text, View } from 'react-native';

export default function WeatherMain() {
    return (
        // Emoji, sıcaklık ve açıklamayı dikey grupluyoruz
        <View style={styles.mainInfo}>
            {/* Emoji'yi ikon yerine kullanıyoruz - basit ve ekstra kütüphane gerektirmiyor */}
            <Text style={styles.weatherEmoji}>☀️</Text>
            <Text style={styles.temperature}>28°</Text>
            <Text style={styles.description}>Açık ve Güneşli</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    mainInfo: {
        alignItems: 'center',
        marginBottom: 48,
    },
    weatherEmoji: {
        fontSize: 80, // büyük emoji, ana görsel odak
    },
    temperature: {
        fontSize: 72,
        fontWeight: '200', // ince yazı - rakamlar zaten büyük olduğu için kalın olmasına gerek yok
        color: '#FFFFFF',
    },
    description: {
        fontSize: 20,
        color: '#FFFFFF',
        marginTop: 4,
    },
});