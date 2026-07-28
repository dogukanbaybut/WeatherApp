import { useState } from 'react';
import { StyleSheet, TextInput, View, Pressable, Text } from 'react-native';

type Props = {
    // onSearch: kullanıcı aramayı onayladığında HomeScreen'e "şu şehri ara" demek için kullanacağımız fonksiyon.
    // Bunu HomeScreen tanımlayıp buraya prop olarak gönderecek (yani component "yukarıya" bilgi gönderiyor).
    onSearch: (city: string) => void;
};

export default function SearchBar({ onSearch }: Props) {
    // input kutusunun anlık değerini tutan state - kullanıcı her harf yazdığında güncellenecek
    const [query, setQuery] = useState('');

    function handleSubmit() {
        // boş yazı ile arama yapılmasın diye küçük bir kontrol
        if (query.trim().length === 0) return;
        onSearch(query.trim()); // yukarıdan gelen fonksiyonu çağırıp şehir adını gönderiyoruz
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Şehir ara..."
                placeholderTextColor="rgba(255,255,255,0.7)"
                value={query} // kutunun gösterdiği değer her zaman state'ten geliyor
                onChangeText={setQuery} // her harf yazıldığında state'i güncelle
                onSubmitEditing={handleSubmit} // klavyedeki "ara/enter" tuşuna basınca tetiklenir
                returnKeyType="search"
            />
            <Pressable style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Ara</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        marginBottom: 24,
    },
    input: {
        flex: 1, // buton hariç kalan tüm genişliği kapla
        backgroundColor: 'rgba(255,255,255,0.15)',
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 10,
        color: '#FFFFFF',
        fontSize: 16,
        marginRight: 8,
    },
    button: {
        backgroundColor: 'rgba(255,255,255,0.25)',
        borderRadius: 12,
        paddingHorizontal: 16,
        justifyContent: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontWeight: '600',
    },
});