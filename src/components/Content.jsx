import { Slide } from "react-awesome-reveal";
import aplication from "../assets/banners/imgmujer-min.jpg";


export const Content = () => {
  return (
    <div className="dark:bg-slate-100 relative flex flex-col-reverse py-16 lg:py-0 lg:flex-col mb-60">
      <div className="w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:py-20 lg:max-w-screen-xl">
        <div className="mb-0 lg:max-w-lg lg:pr-8 xl:pr-6">
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-eiraoscuro-500 sm:text-4xl sm:leading-none md:text-center">
            ¿Necesitas Ayuda?
            <br className="hidden md:block" />
            <span className="relative px-1">
              <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-eiraclaro-200" />
              <span className="relative inline-block text-eirateal-500">
                ¡Llámanos!
              </span>
            </span>
          </h2>
          <p className="mb-5 text-base text-eirateal-500 md:text-lg md:text-center">
            Estamos aquí para asistirte en todo lo que necesites.
          </p>
          <div className="mb-10 text-center md:mb-16 lg:mb-20">
            <hr className="my-8 border-gray-300" />
          </div>
          <div className="flex flex-col items-center">
            <p className="mb-4 text-sm font-bold tracking-widest uppercase text-eiraoscuro-500">
              Nuestros Servicios
            </p>
            <div className="dark:text-eirateal-600 font-bold  grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0">
              <ul className="space-y-3">
                <li className="flex">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px text-eiraclaro-500"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </span>
                  Registro de Historias Clínicas
                </li>
                <li className="flex">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px text-eiraclaro-500"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </span>
                  Teleconsulta con Especialistas
                </li>
                <li className="flex">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px text-eiraclaro-500"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </span>
                  Generar y Gestionar Recetas
                </li>
                <li className="flex">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px text-eiraclaro-500"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </span>
                  Chat con Médicos
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px text-eiraclaro-500"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </span>
                  Consulta a Domicilio
                </li>
                <li className="flex">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px text-eiraclaro-500"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </span>
                  Soporte Telefónico 24/7
                </li>
                <li className="flex">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px text-eiraclaro-500"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </span>
                  Programación de Citas
                </li>
                <li className="flex">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px text-eiraclaro-500"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </span>
                  Recordatorios de Medicación
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="inset-y-0 top-0 right-0 w-full max-w-xl px-4 mx-auto mb-6 md:px-0 lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
        <Slide direction="right">
          <img
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src={aplication}
            alt=""
          />
        </Slide>
      </div>
    </div>
  );
};
