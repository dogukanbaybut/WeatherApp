import { Pressable, ScrollView, StyleSheet, Text } from 'react-native';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';

type Props = {
  history: string[];
  onSelect: (city: string) => void;
};

export default function SearchHistory({ history, onSelect }: Props) {
  if (history.length === 0) return null;

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
      {history.map((city) => (
        <Pressable key={city} onPress={() => onSelect(city)}>
          <BlurView intensity={25} tint="light" style={styles.chip}>
            <Ionicons name="time-outline" size={14} color="#FFFFFF" style={styles.chipIcon} />
            <Text style={styles.chipText}>{city}</Text>
          </BlurView>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 16,
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    paddingVertical: 7,
    paddingHorizontal: 14,
    marginRight: 8,
    overflow: 'hidden',
  },
  chipIcon: {
    marginRight: 6,
  },
  chipText: {
    color: '#FFFFFF',
    fontSize: 13,
  },
});
