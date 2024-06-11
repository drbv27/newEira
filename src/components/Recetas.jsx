import medic from "../assets/recipes.jpeg";

export const Recetas = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 shadow-xl">
      <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-eiraoscuro-500 sm:text-4xl sm:leading-none">
              Recetas Médicas
              <br className="hidden md:block" />
              Simplificadas
              <span className="relative px-1">
                <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-eiraclaro-200" />
                <span className="relative inline-block text-eirateal-500">
                  y Seguras
                </span>
              </span>
            </h2>
            <p className="text-base text-eirateal-500 md:text-lg">
              Genera y gestiona recetas electrónicas con facilidad.
            </p>
          </div>
          <p className="mb-4 text-sm font-bold tracking-widest uppercase text-eiraoscuro-500">
            Beneficios de afiliarte
          </p>
          <div className="grid space-y-3 sm:gap-2 sm:grid-cols-1 sm:space-y-0">
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
                Generación Instantánea: Crea recetas en segundos con opciones
                <br /> preconfiguradas.
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
                Envío Directo: Envía recetas electrónicas directamente al email{" "}
                <br />
                elegido por el paciente.
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
                Reducción de Errores: Minimiza errores de transcripción y mejora
                <br />
                la seguridad del paciente.
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
                Fácil Acceso: Los pacientes pueden acceder a sus recetas desde
                <br />
                cualquier dispositivo.
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
                Ahorro de Tiempo: Evita desplazamientos innecesarios y agiliza
                el <br />
                proceso de obtención de medicamentos.
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
                Seguimiento Fácil: Mantén un registro de todas las recetas
                enviadas
                <br /> y su estado.
              </li>
            </ul>
          </div>
        </div>
        <div>
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src={medic}
            alt="Medicina"
          />
        </div>
      </div>
    </div>
  );
};
