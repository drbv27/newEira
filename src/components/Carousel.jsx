import { AmbulanceC } from './AmbulanceC'
import { Domicilio } from './Domicilio'
import { Teleconsulta } from './Teleconsulta'

const Carousel = () => {
  return (
    <div className='my-4'>
    <div className='overflow-hidden w-full'>
        <div className='flex whitespace-nowrap animate-scroll'>
            <div className='mx-1 w-[100vw] flex-shrink-0 shadow-2xl border'>
                <AmbulanceC />
            </div>
            <div className='mx-1 w-[100vw] flex-shrink-0 shadow-2xl border'>
                <Teleconsulta />
            </div>
            <div className='mx-1 w-[100vw] flex-shrink-0 shadow-2xl border'>
                <Domicilio />
            </div>
        </div>
    </div>
</div>
  )
}

export default Carousel