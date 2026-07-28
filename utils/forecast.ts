type ForecastItem = {
  date: string;
  temp: number;
  description: string;
  icon: string;
};

export function getDailyForecast(list: any[]): ForecastItem[] {
  // aynı güne ait kayıtları bir arada topla
  const grouped: Record<string, any[]> = {};
  for (const item of list) {
    const date = item.dt_txt.split(' ')[0]; // "2026-07-29 12:00:00" -> "2026-07-29"
    if (!grouped[date]) grouped[date] = [];
    grouped[date].push(item);
  }

  const dates = Object.keys(grouped).slice(0, 5);

  return dates.map((date) => {
    const entries = grouped[date];
    // gün içindeki kayıtlardan saati 12:00'a en yakın olanı seç (en temsili değer için)
    const midday = entries.reduce((closest, entry) => {
      const hour = parseInt(entry.dt_txt.split(' ')[1].split(':')[0], 10);
      const closestHour = parseInt(closest.dt_txt.split(' ')[1].split(':')[0], 10);
      return Math.abs(hour - 12) < Math.abs(closestHour - 12) ? entry : closest;
    });

    return {
      date,
      temp: midday.main.temp,
      description: midday.weather[0].description,
      icon: midday.weather[0].main,
    };
  });
}