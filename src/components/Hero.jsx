import { BiSolidAmbulance,BiSolidCameraHome,BiSolidHomeHeart,BiSolidFlask,BiSolidTimeFive,BiMobile } from 'react-icons/bi';
import { Link } from 'react-router-dom';

export const Hero = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
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
        <div className="grid gap-5 mb-8 md:grid-cols-2 lg:grid-cols-3">
          <Link to="/ambulance" className="p-5 duration-300 transform bg-white border rounded shadow-md hover:-translate-y-2">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-slate-100">
                <BiSolidAmbulance className="w-8 h-8 text-eirateal-500" />
            </div>
            <h6 className="mb-2 font-semibold leading-5 text-eirateal-500">Ambulancia</h6>
            <p className="text-sm text-gray-900">
               Nuestro servicio de ambulancia ofrece respuesta rápida y confiable en situaciones críticas. Estamos listos para brindarte cuidado especializado y transporte seguro. Tu seguridad y bienestar son nuestra prioridad.
            </p>
          </Link>
          <Link to="/telemedicine" className="p-5 duration-300 transform bg-white border rounded shadow-md hover:-translate-y-2">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-slate-100">
                <BiSolidCameraHome className="w-8 h-8 text-eirateal-500" />
            </div>
            <h6 className="mb-2 font-semibold leading-5 text-eirateal-500">Teleconsulta</h6>
            <p className="text-sm text-gray-900">
            Atención médica en línea desde cualquier lugar. Consulta con profesionales de la salud sin salir de casa a través de nuestra teleconsulta. Acceso rápido, conveniente y seguro.
            </p>
          </Link>
          <Link to="/homemedicine" className="p-5 duration-300 transform bg-white border rounded shadow-md hover:-translate-y-2">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-slate-100">
                <BiSolidHomeHeart className="w-8 h-8 text-eirateal-500" />
            </div>
            <h6 className="mb-2 font-semibold leading-5 text-eirateal-500">Domicilio</h6>
            <p className="text-sm text-gray-900">
            Recibe atención médica de calidad sin tener que salir de casa. Nuestros profesionales de la salud altamente capacitados estarán a tu lado para brindarte cuidado médico completo y cercano.
            </p>
          </Link>
          <Link to="laboratorie" className="p-5 duration-300 transform bg-white border rounded shadow-md hover:-translate-y-2">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-slate-100">
                <BiSolidFlask className="w-8 h-8 text-eirateal-500" />
            </div>
            <h6 className="mb-2 font-semibold leading-5 text-eirateal-500">Laboratorio</h6>
            <p className="text-sm text-gray-900">
              Aliquam scelerisque accumsan nisl, a mattis eros vestibulum et.
              Vestibulum placerat purus ut nibh aliquam fringilla. Aenean et
              tortor diam, id tempor elit.
            </p>
          </Link>
          <Link to="/support" className="p-5 duration-300 transform bg-white border rounded shadow-md hover:-translate-y-2">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-slate-100">
                <BiSolidTimeFive className="w-8 h-8 text-eirateal-500" />
            </div>
            <h6 className="mb-2 font-semibold leading-5 text-eirateal-500">Soporte 24/7</h6>
            <p className="text-sm text-gray-900">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque rem aperiam, eaque ipsa quae. Sed ut
              perspiciatis unde omnis.
            </p>
          </Link>
          <Link to="/aplication" className="p-5 duration-300 transform bg-white border rounded shadow-md hover:-translate-y-2">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-slate-100">
                <BiMobile className="w-8 h-8 text-eirateal-500" />
            </div>
            <h6 className="mb-2 font-semibold leading-5 text-eirateal-500">Aplicación Movil</h6>
            <p className="text-sm text-gray-900">
              Flatland! Hypatia. Galaxies Orions sword globular star cluster?
              Light years quasar as a patch of light gathered by gravity Vangelis
              radio telescope.
            </p>
          </Link>
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