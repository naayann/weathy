import type { Coordinates } from "@/api/types"
import { useEffect, useState } from "react"

interface GeolocationState {
  coordinates: Coordinates | null
  error: string | null
  isLoading: boolean
}

export function useGeolocation() {
  const [locationData, setLocationData] = useState<GeolocationState>({
    coordinates: null,
    error: null,
    isLoading: true,
  })

  const getLocation = () => {
    setLocationData((prev) => ({ ...prev, isLoading: true, error: null}))

    if(!navigator.geolocation) {
      setLocationData({
        coordinates: null,
        error: "Geolocation is not supported by your browser",
        isLoading: false,
      })
      return
    }

    navigator.geolocation.getCurrentPosistion((position) => {
      setLocationData({
        coordinates: {
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        },
        error: null,
        isLoading: false,
      })
    }, (error) => {
      let errorMsg: string;

      switch(error.code) {
        case error.PERMISSION_DENIED:
          errorMsg = "Location permission denied. Please enable location access.";
          break;
        case error.POSITION_UNAVAILABLE:
          errorMsg = "Location information is unavailable.";
          break;
        case error.TIMEOUT:
          errorMsg = "Location request timeout.";
          break;
        default:
          errorMsg = "An unknown error occurred."
      }

      setLocationData({
        coordinates: null,
        error: errorMsg,
        isLoading: false,
      })
    },{
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    })
  }

  useEffect(() => {
    getLocation()
  }, [])

  return {
    ...locationData,
    getLocation,
  }
}