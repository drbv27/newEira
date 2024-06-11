import homem from "../assets/citas.jpeg";

export const Citas = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 shadow-xl bg-slate-200">
      <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-eiraoscuro-500 sm:text-4xl sm:leading-none">
              Gestión de Citas
              <br className="hidden md:block" />
              Eficiente y Sencilla
              <span className="relative px-1">
                <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-eiraclaro-200" />
                <span className="relative inline-block text-eirateal-500">
                  desde tu Hogar
                </span>
              </span>
            </h2>
            <p className="text-base text-eirateal-500 md:text-lg">
              Programa y gestiona tus citas médicas de manera rápida y fácil.
            </p>
          </div>
          <p className="mb-4 text-sm font-bold tracking-widest uppercase text-eiraoscuro-500">
            Beneficios de afiliarte
          </p>
          <div className=" dark:text-eirateal-600 font-bold  grid space-y-3 sm:gap-2 sm:grid-cols-1 sm:space-y-0">
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
                Fácil Programación: Reserva citas en pocos pasos, desde
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
                Recordatorios Automáticos: Recibe notificaciones de tus próximas
                citas.
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
                Gestión Centralizada: Controla todas tus citas médicas desde una
                sola plataforma.
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
                Flexibilidad de Horarios: Encuentra y reserva citas que se
                adapten a tu horario.
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
                Confirmación Instantánea: Recibe confirmación inmediata de tus
                citas.
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
                Acceso a Especialistas: Encuentra el especialista adecuado según
                tus necesidades.
              </li>
            </ul>
          </div>
        </div>
        <div>
          <img
            className="object-cover w-full h-41 rounded shadow-lg sm:h-96"
            src={homem}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
