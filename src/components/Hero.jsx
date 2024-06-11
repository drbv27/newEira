import { Slide } from "react-awesome-reveal";

export const Hero = () => {
  return (
    <div className=" px-4 py-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 mb-60 ">
      <Slide>
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-4xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Afíliate
            </p>
          </div>
          <h2 className=" mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-eiraoscuro-500 sm:text-8xl md:mx-auto">
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
            </span>{" "}
            Bienvenido a Eira, tu aliado digital en la gestión médica
          </h2>
          <p className="text-base text-eirateal-500 md:text-2xl">
            En Eira, entendemos que tu tiempo es valioso y que la atención a tus
            pacientes es tu prioridad. Por eso, hemos desarrollado una
            plataforma integral que facilita el registro y manejo de todos los
            aspectos de tu práctica médica.
          </p>
        </div>
      </Slide>
      {/*  */}
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
