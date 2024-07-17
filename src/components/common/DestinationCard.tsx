import { motion } from "framer-motion";
import { CiLocationOn } from "react-icons/ci";

type Props = {
	image: string,
	logo_src: string,
	title:string,
	location:string,
	description:string
}


const DestinationCard = ({image, logo_src,title,location,description} : Props) => {
  return (
        <a className="h-[70vh] relative flex w-full md:w-[380px] group">
  <motion.img
    id="image"
    src={image}
    className="object-cover w-full h-full absolute top-0 z-10"
  ></motion.img>
  <motion.div
    id="div"
    className="w-full h-full bg-[rgba(0,0,0,0.4)] grid place-content-center text-white text-[24px] font-bold absolute z-20 top-0 bg-clip-content group-hover:hidden"
  >
    <img
      src={logo_src}
      alt="logo"
      className="w-full h-full object-cover"
    ></img>
  </motion.div>
  <motion.div
    id="div"
    className="bg-clip-content gap-[20px] w-full h-full bg-[rgba(0,0,0,0.7)]  justify-center items-center hidden text-white text-[24px] font-bold absolute z-30 top-0 flex-col md:hidden  group-hover:flex"
  >
    <h4 className="font-light text-center">{title}</h4>
    <div className="w-auto p-2 flex flex-row gap-[10px] text-[14px] font-light items-center">
      <span><CiLocationOn className="w-[25px] h-[25px] fill-[#b5A191]"/></span>
      <span className="font-[16px]">
        {location}
      </span>
    </div>
    <div>
      <p className="text-center font-light text-[14px] w-[60%] mx-auto">{description}</p>
    </div>
    <div
      className={`cursor-pointer p-3 pr-4 pl-4 h-[48px] items-center justify-center border border-[#b5A191] flex w-[200px] text-[12px]`}
    >
      <span className="font-bold tracking-widest">Discover more</span>
    </div>
  </motion.div>
</a>
  );
};

export default DestinationCard;
