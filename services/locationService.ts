import * as Location from 'expo-location';

export async function getCurrentCoords() {
  // kullanıcıdan konum izni istiyoruz - ilk seferde bir izin ekranı çıkacak
  const { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    throw new Error('Konum izni verilmedi');
  }

  const position = await Location.getCurrentPositionAsync({});
  return {
    latitude: position.coords.latitude,
    longitude: position.coords.longitude,
  };
}