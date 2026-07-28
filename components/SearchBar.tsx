import { useState } from 'react';
import { StyleSheet, TextInput, View, Pressable } from 'react-native';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';

type Props = {
  onSearch: (city: string) => void;
  onLocationPress: () => void;
};

export default function SearchBar({ onSearch, onLocationPress }: Props) {
  const [query, setQuery] = useState('');

  function handleSubmit() {
    if (query.trim().length === 0) return;
    onSearch(query.trim());
    setQuery('');
  }

  return (
    <View style={styles.row}>
      <BlurView intensity={30} tint="light" style={styles.inputWrap}>
        <Ionicons name="search" size={18} color="rgba(255,255,255,0.8)" style={styles.searchIcon} />
        <TextInput
          style={styles.input}
          placeholder="Şehir ara..."
          placeholderTextColor="rgba(255,255,255,0.6)"
          value={query}
          onChangeText={setQuery}
          onSubmitEditing={handleSubmit}
          returnKeyType="search"
        />
      </BlurView>
      <Pressable style={styles.iconButton} onPress={onLocationPress}>
        <BlurView intensity={30} tint="light" style={styles.iconButtonInner}>
          <Ionicons name="locate" size={20} color="#FFFFFF" />
        </BlurView>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 16,
  },
  inputWrap: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 18,
    paddingHorizontal: 14,
    overflow: 'hidden',
    marginRight: 10,
  },
  searchIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 15,
    paddingVertical: 12,
  },
  iconButton: {
    width: 46,
    borderRadius: 18,
    overflow: 'hidden',
  },
  iconButtonInner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
