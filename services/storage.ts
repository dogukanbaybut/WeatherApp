import AsyncStorage from '@react-native-async-storage/async-storage';

const HISTORY_KEY = 'search_history';
const MAX_HISTORY = 5;

export async function getSearchHistory(): Promise<string[]> {
  const json = await AsyncStorage.getItem(HISTORY_KEY);
  return json ? JSON.parse(json) : [];
}

export async function addToSearchHistory(city: string): Promise<string[]> {
  const current = await getSearchHistory();
  // aynı şehir tekrar aranırsa listede iki kere görünmesin diye önce çıkarıyoruz
  const filtered = current.filter((c) => c.toLowerCase() !== city.toLowerCase());
  const updated = [city, ...filtered].slice(0, MAX_HISTORY);
  await AsyncStorage.setItem(HISTORY_KEY, JSON.stringify(updated));
  return updated;
}