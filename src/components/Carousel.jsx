import { HistorialClinico } from "./HistorialClinico";
import { Citas } from "./Citas";
import { Recetas } from "./Recetas";
import { Chat } from "./Chat";
import { ConsultasMedicas } from "./ConsutasMedicas";

const Carousel = () => {
  return (
    <div className="mb-40">
      <div className="overflow-hidden w-full">
        <div className="flex flex-nowrap lg:flex-nowrap md:flex-wrap sm:flex-wrap animate-scroll">
          <div className="bg-slate-100 mx-1 w-full sm:w-full md:w-full lg:w-[70vw]  flex-shrink-0 ">
            <HistorialClinico />
          </div>
          <div className=" bg-slate-100 mx-1 w-full sm:w-full md:w-full lg:w-[70vw]  flex-shrink-0 ">
            <Recetas />
          </div>
          <div className="bg-slate-100 mx-1 w-full sm:w-full md:w-full lg:w-[70vw]  flex-shrink-0 ">
            <Citas />
          </div>
          <div className="bg-slate-100 mx-1 w-full sm:w-full md:w-full lg:w-[70vw]  flex-shrink-0 ">
            <Chat />
          </div>
          <div className="bg-slate-100 mx-1 w-full sm:w-full md:w-full lg:w-[70vw]  flex-shrink-0 ">
            <ConsultasMedicas />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
