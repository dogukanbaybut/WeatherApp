const API_KEY = 'aed91ac062db48880906f6b278f16956';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export async function fetchWeather(city: string) {
  const url = `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric&lang=tr`;
  const response = await fetch(url);
  if (!response.ok) throw new Error('Hava durumu verisi alınamadı');
  return response.json();
}

// koordinata göre anlık hava durumu - konum özelliği için
export async function fetchWeatherByCoords(lat: number, lon: number) {
  const url = `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=tr`;
  const response = await fetch(url);
  if (!response.ok) throw new Error('Hava durumu verisi alınamadı');
  return response.json();
}

// 5 günlük tahmin - 3 saatlik aralıklarla toplam 40 kayıt döner
export async function fetchForecast(city: string) {
  const url = `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric&lang=tr`;
  const response = await fetch(url);
  if (!response.ok) throw new Error('Tahmin verisi alınamadı');
  return response.json();
}