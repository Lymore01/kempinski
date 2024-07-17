import { motion } from "framer-motion";

type Props = {
    hover: string,
    image:string,
    title: string
}

const LoyaltyCard = ({hover,image, title} : Props) => {
  return (
    <>
      <motion.a
        className={`w-full h-full relative flex hover:place-content-center cursor-pointer md:hover:scale-x-150 md:hover:${hover} md:hover:ease-linear hover:duration-700 md:hover:animate-spring md:hover:w-[250%]`}
        id="parent"
        whileHover={{
          scaleX: 1,
          transition: {
            ease: "easeInOut",
          },
        }}
      >
        <motion.img
          id="image"
          src={image}
          className="object-cover w-full h-full absolute top-0 z-10 transition-transform duration-300 ease-in-out"
        ></motion.img>
        <motion.div
          id="div"
          className="w-full h-full bg-[rgba(0,0,0,0.4)] grid place-content-center text-white text-[24px] absolute z-20 top-0 hover:place-content-center transition-transform duration-700 ease-in-out  font-mono"
        >
          <span>{title}</span>
        </motion.div>
      </motion.a>
    </>
  );
};

export default LoyaltyCard;
