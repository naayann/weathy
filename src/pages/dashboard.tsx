import { Button } from '@/components/ui/button'
import WeatherSkeleton from '@/components/ui/loading-skeleton'
import { useGeolocation } from '@/hooks/use-geolocation'
import { RefreshCw } from 'lucide-react'
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
import { AlertCircleIcon, MapPin } from 'lucide-react'

const Dashboard = () => {

  const { 
    coordinates, 
    error: locationError, 
    getLocation, 
    isLoading: locationLoading
   } = useGeolocation()

  // const handleRefresh = () => {
  //   getLocation()
  //   if (coordinates) {
  //     // reload weather data
  //   }
  // }

  if(locationLoading) {
    return <WeatherSkeleton />
  }

  if (locationError) {
    return (
    <Alert variant="destructive" className="max-w-md">
      <AlertCircleIcon />
      <AlertTitle>Location Error</AlertTitle>
      <AlertDescription className='flex flex-col gap-4'>
        <p>{locationError}</p>
        <Button onClick={getLocation} variant={'outline'} className='w-fit'>
          <MapPin className="mr-2 h-4 w-4" />
          Enable Loaction
        </Button>
      </AlertDescription>
    </Alert>
  )
  }

  if (!coordinates) {
    return (
    <Alert variant="destructive">
      <AlertCircleIcon />
      <AlertTitle>Location Error</AlertTitle>
      <AlertDescription className='flex flex-col gap-4'>
        <p>Please enable location access to see your local weather.</p>
        <Button onClick={getLocation} variant={'outline'} className='w-fit'>
          <MapPin className="mr-2 h-4 w-4" />
          Enable Loaction
        </Button>
      </AlertDescription>
    </Alert>
  )
  }

  return (
    <div>
      {/* Favorite Cities */}
      <div className='flex items-center justify-between'>
        <h1 className='text-xl font-bold tracking-tight'>My Location</h1>
        <Button
          variant={'outline'}
          size={'icon'}
        // onClick={handleRefresh}
        >
          <RefreshCw />
        </Button>
      </div>

      {/* Current and Hourly weather */}
    </div>
  )
}

export default Dashboard
