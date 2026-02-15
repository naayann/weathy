import { Button } from '@/components/ui/button'
import { useGeolocation } from '@/hooks/use-geolocation'
import { RefreshCw } from 'lucide-react'

const Dashboard = () => {

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
