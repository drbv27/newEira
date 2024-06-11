import consultationImage from "../assets/consultas.png";

export const ConsultasMedicas = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 shadow-xl bg-slate-200">
      <div className="grid gap-10 row-gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center order-2 lg:order-1">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-eiraoscuro-500 sm:text-4xl sm:leading-none">
              Consultas Médicas
              <br className="hidden md:block" />a tu Alcance
              <span className="relative px-1">
                <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-eiraclaro-200" />
                <span className="relative inline-block text-eirateal-500">
                  con Facilidad
                </span>
              </span>
            </h2>
          </div>
          <p className="mb-4 text-sm font-bold tracking-widest uppercase text-eiraoscuro-500">
            Ventajas de nuestras consultas
          </p>
          <div className="dark:text-eirateal-600 font-bold grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0">
            <ul className="space-y-3">
              <li className="flex ">
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
                Atención Personalizada: Consulta con especialistas desde la
                comodidad de tu hogar.
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
                Ahorro de Tiempo: Evita traslados innecesarios y largas esperas
                en la sala.
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
                Disponibilidad 24/7: Consulta médica disponible en cualquier
                momento del día.
              </li>
            </ul>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src={consultationImage}
            alt="Consultas Médicas"
          />
        </div>
      </div>
    </div>
  );
};
