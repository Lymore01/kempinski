import { FaArrowRightLong } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoWechat } from "react-icons/io5";
import { FaWeibo } from "react-icons/fa";
import { FaArrowUpLong } from "react-icons/fa6";

const Footer = () => {
  const icons = [
    {
      src: <FaFacebookF className="w-[18px] h-[18px] fill-[#B5A191]" />,
    },
    {
      src: <IoLogoYoutube className="w-[18px] h-[18px] fill-[#B5A191]" />,
    },
    {
      src: <FaXTwitter className="w-[18px] h-[18px] fill-[#B5A191]" />,
    },
    {
      src: <FaInstagram className="w-[18px] h-[18px] fill-[#B5A191]" />,
    },
    {
      src: <FaLinkedinIn className="w-[18px] h-[18px] fill-[#B5A191]" />,
    },
    {
      src: <IoLogoWechat className="w-[18px] h-[18px] fill-[#B5A191]" />,
    },
    {
      src: <FaWeibo className="w-[18px] h-[18px] fill-[#B5A191]" />,
    },
  ];
  return (
    <>
      <div className="w-full h-auto md:h-[60vh] bg-[#02102A] flex flex-col justify-between place-items-center gap-[20px] md:px-24 py-6">
        <div className="w-full h-auto flex flex-col md:flex-row justify-between p-2 md:p-4 text-white">
          <div className="grid grid-rows-1 grid-cols-2 text-sm md:text-[17px] gap-10">
            <div className="flex flex-col gap-[20px]">
              <h1>About us</h1>
              <ul className="list-none gap-[20px] flex flex-col">
                <li>Careers</li>
                <li>Sustainability</li>
                <li>Development</li>
                <li>Residences</li>
              </ul>
            </div>
            <div className="flex flex-col gap-[20px]">
              <h1>Contact us</h1>
              <ul className="list-none gap-[20px] flex flex-col">
                <li>Press room</li>
                <li>Best rate guarantee</li>
                <li>Shop Kempinski</li>
                <li>Download our App</li>
              </ul>
            </div>
          </div>
          <div className=" w-[95%] md:w-[566px] h-full bg-[] flex flex-col gap-[24px] mt-[40px] md:mt-0">
            <div className="w-full md:block hidden">
              <span className="text-[17px]">
                Sign up for offers, news and travel inspiration
              </span>
            </div>
            <div className="w-full flex-row flex border-[2px] border-transparent border-b-[#999FAA]">
              <input
                type="text"
                placeholder="email@example.com"
                className="text-xl md:text-[28px] w-full py-2  bg-[transparent] outline-none"
              ></input>
              <div className="flex items-center">
                <FaArrowRightLong className="fill-[#B5A191]" />
              </div>
            </div>
            <div className="flex flex-row gap-[10px] items-center w-full h-auto">
              {icons.map((icon, i) => {
                return (
                  <div
                    className="w-[50px] h-[50px] rounded-full border border-slate-500 items-center justify-center flex cursor-pointer" 
                    key={i}
                  >
                    {icon.src}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-full h-[14%] flex flex-col md:flex-row justify-between text-[#999FAA] text-sm md:text-[17px]">
          <div className="flex items-center p-4">
            <ul className="flex flex-row list-none items-center gap-[20px]">
              <li>Legal</li>
              <li>Privacy Policy</li>
              <li>Imprint</li>
              <li>Sitemap</li>
            </ul>
          </div>
          <div className="flex items-center p-6 flex-col  md:flex-row justify-between gap-[20px] md:gap-[40px] text-white">
              <span className="text-sm">© 2024 Kempinski Hotels</span>
              <p className="text-sm">Made with ❤ by Kelly Limo.</p>
              <div className="hidden md:block">
                <FaArrowUpLong className="h-[30px] w-[30px] fill-[#B5A191]"/>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
