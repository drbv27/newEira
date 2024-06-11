import ambulance from "../assets/historial.jpeg";

export const HistorialClinico = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 shadow-xl">
      <div className="grid gap-10 row-gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center order-2 lg:order-1">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-eiraoscuro-500 sm:text-4xl sm:leading-none">
              Historial Clínico
              <br className="hidden md:block" />
              al Alcance de
              <span className="relative px-1">
                <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-eiraclaro-200" />
                <span className="relative inline-block text-eirateal-500">
                  tu Mano
                </span>
              </span>
            </h2>
          </div>
          <p className="mb-4 text-sm font-bold tracking-widest uppercase text-eiraoscuro-500">
            Beneficios de afiliarte
          </p>
          <div className="dark:text-slate-300 grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0">
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
                Acceso Rápido y Seguro: Consulta y actualiza la información{" "}
                <br />
                del paciente en cualquier momento y lugar.
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
                Organización Eficiente: Mantén un registro ordenado y detallado{" "}
                <br />
                de todas las visitas y tratamientos.
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
                Historial Completo: Facilita la continuidad del cuidado con un
                registro
                <br /> integral de la salud del paciente.
              </li>
            </ul>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src={ambulance}
            alt="Ambulance"
          />
        </div>
      </div>
    </div>
  );
};
