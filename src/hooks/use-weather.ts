// import type { Coordinates } from "@/api/types"
// import { WeatherAPI } from "@/api/weather"
// import { useQuery } from "@tanstack/react-query"

// export const WEATHER_KEYS = {
//   weather:(coords:Coordinates)=>["weather",coords] as const,
//   forecast:(coords:Coordinates)=>["forecast",coords] as const,
//   location:(coords:Coordinates)=>["location",coords] as const
// } as const;

// export  function useWeatherQuery(coordiantes: Coordinates | null) {
//   return useQuery({
//     queryKey: WEATHER_KEYS.weather(coordiantes ?? {lat: 0, lon: 0}),
//     queryFn:()=>coordiantes?WeatherAPI.getCurrentWeather(coordiantes):null,
//     enabled: !!coordiantes,
//   })
// }

// export  function useForecastQuery(coordiantes: Coordinates | null) {
//   return useQuery({
//     queryKey: WEATHER_KEYS.forecast(coordiantes ?? {lat: 0, lon: 0}),
//     queryFn:()=>coordiantes?WeatherAPI.getForecast(coordiantes):null,
//     enabled: !!coordiantes,
//   })
// }

// export  function useReverseGeocodeQuery(coordiantes: Coordinates | null) {
//   return useQuery({
//     queryKey: WEATHER_KEYS.location(coordiantes ?? {lat: 0, lon: 0}),
//     queryFn:()=>coordiantes?WeatherAPI.reverseGeocode(coordiantes):null,
//     enabled: !!coordiantes,
//   })
// }