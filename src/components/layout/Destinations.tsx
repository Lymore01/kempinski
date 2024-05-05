/* eslint-disable @typescript-eslint/no-unused-vars */
import DestinationCard from "../common/DestinationCard.tsx";
import { destinations } from "../../utils/destinations.ts";

const Destinations = () => {
  return (
    <div className="w-full h-full p-16 flex place-content-center justify-center items-center bg-[white] flex-col gap-[20px] mb-[30px]">
      <div className="w-full h-auto p-8 pb-16 flex place-content-center flex-col gap-[10px] text-center text-[#02102A]">
        <h2 className="text-[32px] font-semibold lg:text-[60px] md:text-[34px]">
          Destinations
        </h2>
        <p className="text-[14px] font-normal lg:text-[18px] md:text-[16px]">
          Explore the world with Kempinski. Where will you go?
        </p>
      </div>
      <div className="items-center justify-center flex-row flex h-[70vh] overflow-x-scroll gap-[20px] p-4">
        {destinations.map((destination) => {
          return (
            <DestinationCard
              image={destination.image}
              logo_src={destination.logo_src}
              title={destination.title}
              location={destination.location}
              description={destination.description}
            />
          );
        })}
      </div>
      <div>
        <div
          className={`cursor-pointer p-3 pr-4 pl-4 h-[48px] items-center
               justify-center border border-[#b5A191] flex w-[310px]`}
        >
          <span className="font-bold tracking-widest">Discover more</span>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
