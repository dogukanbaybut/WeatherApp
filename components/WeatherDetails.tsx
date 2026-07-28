import { StyleSheet, Text, View } from 'react-native';

type Props = {
    feelsLike: number;
    humidity: number;
    windSpeed: number; // km/s cinsinden
};

export default function WeatherDetails({ feelsLike, humidity, windSpeed }: Props) {
    return (
        <View style={styles.detailsCard}>
            <View style={styles.detailItem}>
                <Text style={styles.detailLabel}>Hissedilen</Text>
                <Text style={styles.detailValue}>{Math.round(feelsLike)}°</Text>
            </View>

            <View style={styles.detailDivider} />

            <View style={styles.detailItem}>
                <Text style={styles.detailLabel}>Nem</Text>
                <Text style={styles.detailValue}>%{humidity}</Text>
            </View>

            <View style={styles.detailDivider} />

            <View style={styles.detailItem}>
                <Text style={styles.detailLabel}>Rüzgar</Text>
                <Text style={styles.detailValue}>{Math.round(windSpeed)} km/s</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    detailsCard: {
        flexDirection: 'row',
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        borderRadius: 16,
        paddingVertical: 20,
        paddingHorizontal: 16,
        width: '100%',
    },
    detailItem: {
        flex: 1,
        alignItems: 'center',
    },
    detailDivider: {
        width: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
    },
    detailLabel: {
        fontSize: 13,
        color: '#E0ECFA',
        marginBottom: 6,
    },
    detailValue: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FFFFFF',
    },
});