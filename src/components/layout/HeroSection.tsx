

const HeroSection = () => {
  return (
    <div className="flex-col relative z-10 items-center justify-center w-full h-full place-content-center flex bg-clip-content">
      <div className="mt-[-8%] text-white text-center flex flex-col gap-[10px]">
            <h1 className="text-[36px] lg:text-[70px] font-bold lg:font-normal">
              Kempinski Hotels
            </h1>
            <span className="font-normal lg:text-[20px]">
              Destinations to discover,<br className="flex lg:hidden"></br>{" "}
              journeys to <br className="hidden lg:flex"></br>remember
            </span>
          </div>
          <div className="p-4 absolute bottom-2 animate-bounce duration-800">
            <svg
              width="76"
              height="76"
              className="cursor-pointer stroke-current text-white"
              fill="none"
              viewBox="0 0 76 76"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m22.7998 30.3996 15.2 15.2 15.2-15.2"
                strokeWidth="1.5"
              ></path>
            </svg>
          </div>
    </div>
  );
};

export default HeroSection;
