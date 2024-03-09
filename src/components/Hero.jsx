import { Fade, Slide } from 'react-awesome-reveal';
import { BiSolidAmbulance,BiSolidCameraHome,BiSolidHomeHeart,BiSolidFlask,BiSolidTimeFive,BiMobile } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import ambulance from "../assets/banners/1483.jpg"
import medic from "../assets/banners/telemedicine.jpg"
import homem from "../assets/banners/1378.jpg"
import labo from "../assets/banners/13961.jpg"
import soporte from "../assets/banners/2149.jpg"
import aplicacion from "../assets/banners/2223.jpg"

export const Hero = () => {
    return (
      <div className="bg-white dark:bg-slate-800 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <Slide>
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Brand new
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-eiraoscuro-500 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-eirateal-300 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="d9d7687a-355f-4502-8ec4-7945db034688"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#d9d7687a-355f-4502-8ec4-7945db034688)"
                  width="52"
                  height="24"
                />
              </svg>
            </span>{' '}
            The quick, brown fox jumps over a lazy dog
          </h2>
          <p className="text-base text-eirateal-500 md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </p>
        </div>
        </Slide>
        <div className="grid gap-5 mb-8 md:grid-cols-2 lg:grid-cols-3">

          <Slide delay={200} direction={"right"} className="dark:bg-slate-800 p-5 duration-300 transform bg-white rounded shadow-md hover:-translate-y-2 dark:shadow-slate-400">
            <Link to="/ambulance" >

                <div className='w-30'>
                  <img src={ambulance} alt="" className='rounded-md'/>
                </div>

                  <h6 className="mb-2 font-semibold leading-5 text-eirateal-500 dark:text-eirateal-300">Ambulancia</h6>
              <p className="text-sm text-gray-900 dark:text-gray-400">
                Nuestro servicio de ambulancia ofrece respuesta rápida y confiable en situaciones críticas. Estamos listos para brindarte cuidado especializado y transporte seguro. Tu seguridad y bienestar son nuestra prioridad.
              </p>
            
            </Link>
          </Slide>

          <Slide delay={200} className="dark:bg-slate-800 p-5 duration-300 transform bg-white rounded shadow-md hover:-translate-y-2 dark:shadow-slate-400">
            <Link to="/telemedicine" >

                <div className='w-30'>
                  <img src={medic} alt="" className='rounded-md'/>
                </div>

                  <h6 className="mb-2 font-semibold leading-5 text-eirateal-500 dark:text-eirateal-300">Teleconsulta</h6>
              <p className="text-sm text-gray-900 dark:text-gray-400">
                Nuestro servicio de ambulancia ofrece respuesta rápida y confiable en situaciones críticas. Estamos listos para brindarte cuidado especializado y transporte seguro. Tu seguridad y bienestar son nuestra prioridad.
              </p>
            
            </Link>
          </Slide>

          <Slide delay={200} direction={'right'} className="dark:bg-slate-800 p-5 duration-300 transform bg-white rounded shadow-md hover:-translate-y-2 dark:shadow-slate-400">
            <Link to="/telemedicine" >

                <div className='w-30'>
                  <img src={homem} alt="" className='rounded-md'/>
                </div>

                  <h6 className="mb-2 font-semibold leading-5 text-eirateal-500 dark:text-eirateal-300">Domicilio</h6>
              <p className="text-sm text-gray-900 dark:text-gray-400">
                Nuestro servicio de ambulancia ofrece respuesta rápida y confiable en situaciones críticas. Estamos listos para brindarte cuidado especializado y transporte seguro. Tu seguridad y bienestar son nuestra prioridad.
              </p>
            
            </Link>
          </Slide>

          <Slide delay={200} className="dark:bg-slate-800 p-5 duration-300 transform bg-white rounded shadow-md hover:-translate-y-2 dark:shadow-slate-400">
            <Link to="/telemedicine" >

                <div className='w-30'>
                  <img src={labo} alt="" className='rounded-md'/>
                </div>

                  <h6 className="mb-2 font-semibold leading-5 text-eirateal-500 dark:text-eirateal-300">Laboratorio</h6>
              <p className="text-sm text-gray-900 dark:text-gray-400">
                Nuestro servicio de ambulancia ofrece respuesta rápida y confiable en situaciones críticas. Estamos listos para brindarte cuidado especializado y transporte seguro. Tu seguridad y bienestar son nuestra prioridad.
              </p>
            
            </Link>
          </Slide>

          <Slide delay={200} direction={'right'} className="dark:bg-slate-800 p-5 duration-300 transform bg-white rounded shadow-md hover:-translate-y-2 dark:shadow-slate-400">
            <Link to="/support" >

                <div className='w-30'>
                  <img src={soporte} alt="" className='rounded-md'/>
                </div>

                  <h6 className="mb-2 font-semibold leading-5 text-eirateal-500 dark:text-eirateal-300">Soporte 24/7</h6>
              <p className="text-sm text-gray-900 dark:text-gray-400">
                Nuestro servicio de ambulancia ofrece respuesta rápida y confiable en situaciones críticas. Estamos listos para brindarte cuidado especializado y transporte seguro. Tu seguridad y bienestar son nuestra prioridad.
              </p>
            
            </Link>
          </Slide>

          <Slide delay={200} className="dark:bg-slate-800 p-5 duration-300 transform bg-white rounded shadow-md hover:-translate-y-2 dark:shadow-slate-400">
            <Link to="/support" >

                <div className='w-30'>
                  <img src={aplicacion} alt="" className='rounded-md'/>
                </div>

                  <h6 className="mb-2 font-semibold leading-5 text-eirateal-500 dark:text-eirateal-300">Soporte 24/7</h6>
              <p className="text-sm text-gray-900 dark:text-gray-400">
                Nuestro servicio de ambulancia ofrece respuesta rápida y confiable en situaciones críticas. Estamos listos para brindarte cuidado especializado y transporte seguro. Tu seguridad y bienestar son nuestra prioridad.
              </p>
            
            </Link>
          </Slide>

{/*           <Slide delay={200} direction={"right"} className="dark:bg-slate-800 p-5 duration-300 transform bg-white border border-slate-300 rounded shadow-md hover:-translate-y-2">
            <Link to="/ambulance" >
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-slate-100 dark:bg-eirateal-500">
                  <BiSolidAmbulance className="w-8 h-8 text-eirateal-500 dark:text-slate-800" />
              </div>
              <h6 className="mb-2 font-semibold leading-5 text-eirateal-500 dark:text-eirateal-300">Ambulancia</h6>
              <p className="text-sm text-gray-900 dark:text-gray-400">
                Nuestro servicio de ambulancia ofrece respuesta rápida y confiable en situaciones críticas. Estamos listos para brindarte cuidado especializado y transporte seguro. Tu seguridad y bienestar son nuestra prioridad.
              </p>
            
            </Link>
          </Slide> */}

{/*           <Slide delay={200} className="dark:bg-slate-800 p-5 duration-300 transform bg-white border border-slate-300 rounded shadow-md hover:-translate-y-2">
            <Link to="/telemedicine" >
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-slate-100 dark:bg-eirateal-500">
                  <BiSolidCameraHome className="w-8 h-8 text-eirateal-500 dark:text-slate-800" />
              </div>
              <h6 className="mb-2 font-semibold leading-5 text-eirateal-500 dark:text-eirateal-300">Teleconsulta</h6>
              <p className="text-sm text-gray-900 dark:text-gray-400">
              Atención médica en línea desde cualquier lugar. Consulta con profesionales de la salud sin salir de casa a través de nuestra teleconsulta. Acceso rápido, conveniente y seguro.
              </p>
            </Link>
          </Slide> */}

{/*           <Slide delay={200} direction={"right"} className="dark:bg-slate-800 p-5 duration-300 transform bg-white border border-slate-300 rounded shadow-md hover:-translate-y-2">
            <Link to="/homemedicine" >
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-slate-100 dark:bg-eirateal-500">
                  <BiSolidHomeHeart className="w-8 h-8 text-eirateal-500 dark:text-slate-800" />
              </div>
              <h6 className="mb-2 font-semibold leading-5 text-eirateal-500 dark:text-eirateal-300">Domicilio</h6>
              <p className="text-sm text-gray-900 dark:text-gray-400">
              Recibe atención médica de calidad sin tener que salir de casa. Nuestros profesionales de la salud altamente capacitados estarán a tu lado para brindarte cuidado médico completo y cercano.
              </p>
            </Link>
          </Slide> */}

{/*           <Slide delay={200}  className="dark:bg-slate-800 p-5 duration-300 transform bg-white border border-slate-300 rounded shadow-md hover:-translate-y-2">
            <Link to="laboratorie" >
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-slate-100 dark:bg-eirateal-500">
                  <BiSolidFlask className="w-8 h-8 text-eirateal-500 dark:text-slate-800" />
              </div>
              <h6 className="mb-2 font-semibold leading-5 text-eirateal-500 dark:text-eirateal-300">Laboratorio</h6>
              <p className="text-sm text-gray-900 dark:text-gray-400">
                Aliquam scelerisque accumsan nisl, a mattis eros vestibulum et.
                Vestibulum placerat purus ut nibh aliquam fringilla. Aenean et
                tortor diam, id tempor elit.
              </p>
            </Link>
          </Slide> */}

{/*           <Slide delay={200} direction={"right"} className="dark:bg-slate-800 p-5 duration-300 transform bg-white border border-gray-300 rounded shadow-md hover:-translate-y-2">
            <Link to="/support">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-slate-100 dark:bg-eirateal-500">
                  <BiSolidTimeFive className="w-8 h-8 text-eirateal-500 dark:text-slate-800" />
              </div>
              <h6 className="mb-2 font-semibold leading-5 text-eirateal-500 dark:text-eirateal-300">Soporte 24/7</h6>
              <p className="text-sm text-gray-900 dark:text-gray-400">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque rem aperiam, eaque ipsa quae. Sed ut
                perspiciatis unde omnis.
              </p>
            </Link>
          </Slide> */}

{/*           <Slide delay={200} className="dark:bg-slate-800 p-5 duration-300 transform bg-white border border-gray-300 rounded shadow-md hover:-translate-y-2">
            <Link to="/aplication" >
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-slate-100 dark:bg-eirateal-500">
                  <BiMobile className="w-8 h-8 text-eirateal-500 dark:text-slate-800" />
              </div>
              <h6 className="mb-2 font-semibold leading-5 text-eirateal-500 dark:text-eirateal-300">Aplicación Movil</h6>
              <p className="text-sm text-gray-900 dark:text-gray-400">
                Flatland! Hypatia. Galaxies Orions sword globular star cluster?
                Light years quasar as a patch of light gathered by gravity Vangelis
                radio telescope.
              </p>
            </Link>
          </Slide> */}
        </div>
{/*         <div className="text-center">
          <a
            href="/"
            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          >
            Learn more
          </a>
        </div> */}
      </div>
    );
  };