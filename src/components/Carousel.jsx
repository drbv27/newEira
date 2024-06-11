import { HistorialClinico } from "./HistorialClinico";
import { Citas } from "./Citas";
import { Recetas } from "./Recetas";
import { Chat } from "./Chat";
import { ConsultasMedicas } from "./ConsutasMedicas";

const Carousel = () => {
  return (
    <div className="my-4">
      <div className="overflow-hidden w-full">
        <div className="flex whitespace-nowrap animate-scroll">
          <div className="mx-1 w-[100vw] flex-shrink-0 shadow-2xl  ">
            <HistorialClinico />
          </div>
          <div className="mx-1 w-[100vw] flex-shrink-0 shadow-2xl ">
            <Recetas />
          </div>
          <div className="mx-1 w-[100vw] flex-shrink-0 shadow-2xl ">
            <Citas />
          </div>
          <div className="mx-1 w-[100vw] flex-shrink-0 shadow-2xl ">
            <Chat />
          </div>
          <div className="mx-1 w-[100vw] flex-shrink-0 shadow-2xl ">
            <ConsultasMedicas />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;