import { StyleSheet, Text, View } from 'react-native';

export default function WeatherDetails() {
    return (
        // flexDirection: 'row' ile üç öğeyi yan yana diziyoruz (varsayılan column'un tersine)
        <View style={styles.detailsCard}>
            <View style={styles.detailItem}>
                <Text style={styles.detailLabel}>Hissedilen</Text>
                <Text style={styles.detailValue}>30°</Text>
            </View>

            {/* İnce dikey çizgi - sadece genişliği 1px olan boş bir View */}
            <View style={styles.detailDivider} />

            <View style={styles.detailItem}>
                <Text style={styles.detailLabel}>Nem</Text>
                <Text style={styles.detailValue}>%45</Text>
            </View>

            <View style={styles.detailDivider} />

            <View style={styles.detailItem}>
                <Text style={styles.detailLabel}>Rüzgar</Text>
                <Text style={styles.detailValue}>12 km/s</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    detailsCard: {
        flexDirection: 'row', // üç öğeyi yan yana diz
        backgroundColor: 'rgba(255, 255, 255, 0.15)', // yarı saydam beyaz, "cam" efekti
        borderRadius: 16,
        paddingVertical: 20,
        paddingHorizontal: 16,
        width: '100%',
    },
    detailItem: {
        flex: 1, // üç öğe eşit genişlikte olsun
        alignItems: 'center',
    },
    detailDivider: {
        width: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.3)', // ince ayraç çizgisi
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