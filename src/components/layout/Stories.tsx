import { FaArrowRightLong } from "react-icons/fa6";

const Stories = () => {
  return (
    <>
      <div className="w-full h-full p-2 md:p-16 flex place-content-center justify-center items-center bg-[white] flex-col mb-[80px] md:mb-[30px]">
        <div className="w-full md:w-[80%] h-auto p-8 pb-16 flex place-content-center flex-col gap-[10px] text-center text-[#02102A] mb-[80px] md:mb-0">
          <h2 className="text-[32px] font-semibold lg:text-[60px] md:text-[34px] text-start">
            Traveling In Style
          </h2>
        </div>
        <div className="items-center justify-center flex-col md:flex-row flex h-[100vh] gap-[20px] p-4 bg-[] w-full md:w-[80%]">
          <div className="w-full md:w-[50%] h-[100%] flex flex-col">
            <div className="h-[60%] w-full">
              <img
                className="w-full h-full object-cover object-center"
                src="https://storage.kempinski.com/cdn-cgi/image/w=960,f=auto,g=auto,fit=scale-down/ki-cms-prod/images/5/1/4/7/2197415-1-eng-GB/560910441b4a-KIXBO-homepage-image.jpg"
              ></img>
            </div>
            <div className="h-auto w-full flex flex-col gap-[15px] p-8 text-[#02102A]">
              <p className="text-[28px] font-semibold lg:text-[15px] md:text-[13px] uppercase">
                ICONIC DESTINATION
              </p>
              <p className="text-[20px] md:text-[28px] font-normal ">
                Engelberg,<br></br>Switzerland: One <br></br>Place, Two Worlds
              </p>
              <p className="font-normal text-[14px] md:text-base">
                Amidst the magic of the mountains, <br></br>Engelberg combines
                the best of adventure <br></br>and relaxation.
              </p>
              <span className="text-base md:text-[18px] underline font-bold cursor-pointer">
                Explore Engelberg
              </span>
            </div>
          </div>
          <div className="w-full md:w-[60%] h-full relative">
            <div className="w-full h-[100%] flex flex-row ">
              <div className="w-[50%] h-[60%] mt-[20%] mr-[20px] z-20">
                <img src="https://storage.kempinski.com/cdn-cgi/image/w=321,h=400,f=auto,g=auto,fit=cover/ki-cms-prod/images/5/4/6/9/2449645-1-eng-GB/f57112fe5e96-KIIST_July23_Historical-Hammam_High-Res_45619.jpg" className="w-full h-full object-cover object-center"></img>
              </div>
              <div className="w-[50%] h-[60%] mt-[10%] mr-[10px] z-20">
                <img src="https://storage.kempinski.com/cdn-cgi/image/w=321,h=400,f=auto,g=auto,fit=cover/ki-cms-prod/images/5/4/0/2/2162045-1-eng-GB/e70d8bbd8539-KINBO1_Food_Chinese-Cuisine-Dimsum_High-Res_11359.jpg" className="w-full h-full object-cover object-center"/>
              </div>
            </div>

            <div className="w-[90%] h-[60%] absolute bottom-[-40px] right-0 bg-[#F8F6F0] z-10">
              <div className="absolute w-full h-[30%] bottom-0 text-center">
                <span className="text-[#02102A] text-lg flex flex-row items-center justify-center cursor-pointer">
                  See more stories
                  <span className="ml-[10px]">
                    <FaArrowRightLong />
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stories;
