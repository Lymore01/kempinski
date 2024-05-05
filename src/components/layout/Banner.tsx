import { AnimatePresence, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { banner } from "../../utils/banner";

const Banner = () => {
  const [currentMenu, setCurrentMenu] = useState<string>("1");
  // const [index, setIndex] = useState(0);
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("")
  const ref1 = useRef(null);
  const inView1 = useInView(ref1, { once: false });

  useEffect(()=>{
    const random = Math.floor(Math.random()*6)
    setCurrentMenu(random.toString())
  },[])

  useEffect(() => {
    if (currentMenu === "1") {
      setImage(banner[0].image);
      setTitle(banner[0].title);
      setDes(banner[0].des);

    } else if (currentMenu === "2") {
      setImage(banner[1].image);
      setTitle(banner[1].title);
      setDes(banner[1].des);

    } else if (currentMenu === "3") {
      setImage(banner[2].image);
      setTitle(banner[2].title);
      setDes(banner[2].des);

    } else if (currentMenu === "4") {
      setImage(banner[3].image);
      setTitle(banner[3].title);
      setDes(banner[3].des);

    } else if (currentMenu === "5") {
      setImage(banner[4].image);
      setTitle(banner[4].title);
      setDes(banner[4].des);

    } else {
      setImage(banner[5].image);
      setTitle(banner[5].title);
      setDes(banner[5].des);

    }
  }, [currentMenu]);

  /* useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % 6);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setImage(banner[index].image);
    setTitle(banner[index].title);
  }, [index]); */

  return (
    <>
      <div className="w-full h-full p-16 flex place-content-center justify-center items-center bg-white flex-col">
        <motion.div
          className={`w-[100%] flex-row flex h-[80vh] bg-clip-content relative ${
            inView1 && "md:scale-100 ease-in-out duration-800"
          }`}
          whileInView={{
            scale: 1.08,
            transition: {
              delay: 0.6,
              ease: "easeInOut",
            },
          }}
          id="div1"
        >
          <AnimatePresence>
            <motion.img
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{opacity:0}}
              transition={{
                ease: "easeInOut",
                duration: 1,
                delay:0.5
              }}
              src={image}
              className="object-cover w-full h-full absolute top-0 z-10 "
              id="image1"
            ></motion.img>
          
          <div className="w-full h-[80%] bg-[rgba(0,0,0,0.4)]  text-white text-[24px] font-bold absolute z-20 top-0 flex flex-col justify-between pt-24">
            <div className="w-full h-[80%] flex items-center justify-center flex-col gap-[10px] font-light">
              <h2 className="text-[46px]">{title}</h2>
              <p className="text-[15px] text-center w-[500px]">
                {des}
              </p>
              <div className="mt-[30px]">
                <div
                  className={`cursor-pointer p-3 pr-4 pl-4 h-[48px] items-center
               justify-center border border-[#b5A191] flex w-[208px] hover:bg-[#b5A191]`}
                >
                  <span className="tracking-wider text-[14px] font-light">
                    Discover more
                  </span>
                </div>
              </div>
            </div>
          </div>
          </AnimatePresence>
          <div
            className="h-[20%] w-full place-content-center flex flex-row gap-[30px] p-4 justify-center items-center list-none font-light text-[14px] capitalize absolute bottom-0 z-30 text-white bg-[rgba(0,0,0,0.4)]"
            ref={ref1}
          >
            <motion.li
              onHoverStart={() => {
                setCurrentMenu("1");
              }}
              className="hover:underline cursor-pointer"
            >
              suites
            </motion.li>
            <motion.li
              onHoverStart={() => {
                setCurrentMenu("2");
              }}
              className="hover:underline cursor-pointer"
            >
              culinary
            </motion.li>
            <motion.li
              onHoverStart={() => {
                setCurrentMenu("3");
              }}
              className="hover:underline cursor-pointer"
            >
              special occasions
            </motion.li>
            <motion.li
              onHoverStart={() => {
                setCurrentMenu("4");
              }}
              className="hover:underline cursor-pointer"
            >
              sports and adventure
            </motion.li>
            <motion.li
              onHoverStart={() => {
                setCurrentMenu("5");
              }}
              className="hover:underline cursor-pointer"
            >
              for your wellbeing
            </motion.li>
            <motion.li
              onHoverStart={() => {
                setCurrentMenu("6");
              }}
              className="hover:underline cursor-pointer"
            >
              family
            </motion.li>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Banner;
