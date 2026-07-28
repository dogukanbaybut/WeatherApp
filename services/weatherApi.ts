// Bu dosyanın tek görevi: OpenWeatherMap'e istek atmak ve veriyi döndürmek.
// Hiçbir React/UI kodu içermiyor - sadece "veri getirme" mantığı.

const API_KEY = 'aed91ac062db48880906f6b278f16956';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

// async fonksiyon: içinde "await" kullanabilmemizi sağlar (bekleme gerektiren işlemler için)
export async function fetchWeather(city: string) {
  // fetch'e URL'i parça parça değil, tam hazır şekilde veriyoruz.
  // units=metric -> Celsius cinsinden sıcaklık istiyoruz (yoksa Kelvin döner)
  // &lang=tr -> hava durumu açıklaması Türkçe gelsin (örn. "açık" yerine "clear sky" değil)
  const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric&lang=tr`;

  // await: fetch'in cevap vermesini burada bekle, cevap gelene kadar
  // bu satırın altına geçme (ama uygulamanın geri kalanı donmaz)
  const response = await fetch(url);

  // response.ok: HTTP durum kodu 200-299 arasında mı? (başarılı mı?)
  if (!response.ok) {
    throw new Error('Hava durumu verisi alınamadı');
  }

  // response.json(): gelen ham veriyi JavaScript objesine çevirir
  // bu da zaman alan bir işlem olduğu için başına await koyuyoruz
  const data = await response.json();

  return data;
}