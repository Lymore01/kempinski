import { useEffect, useState, useRef } from "react";
import { useAnimation, useInView } from "framer-motion";
import Header from "./components/layout//Header";
import HeroSection from "./components/layout/HeroSection";
import Destinations from "./components/layout//Destinations";
import Banner from "./components/layout/Banner";
import LoyaltyCards from "./components/layout/LoyaltyCards";
import Stories from "./components/layout/Stories";
import Shop from "./components/layout/Shop";
import Moments from "./components/layout/Moments";
import Footer from "./components/layout/Footer";

function App() {
  const ref1 = useRef(null);
  const inView1 = useInView(ref1, { once: false });
  const [isScrolled, setIsScrolled] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    console.log(inView1);
  }, [inView1]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 0);
      if (scrollY > 0) {
        controls.start({ backgroundColor: "white", color: "black" });
      } else {
        controls.start({ backgroundColor: "transparent", color: "white" });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  return (
    <>
      <div
        style={{
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          objectFit: "cover",
        }}
        className="relative bg-clip-content w-full h-[105vh] items-start justify-between flex flex-col"
      >
        <div className="w-full h-full absolute inset-0">
          <div className="absolute inset-0 w-full h-full object-cover bg-[rgba(0,0,0,0.3)]"></div>
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="https://media.iceportal.com/151526/Videos/video112923012536472_720p.mp4"
              type="video/mp4"
            ></source>
            Your browser does not support the video tag.
          </video>
        </div>
        <Header controls={controls} isScrolled={isScrolled} />
        <HeroSection />
      </div>
      <Destinations />
      <Banner />
      <Stories />
      <LoyaltyCards />
      <Shop />
      <Moments />
      <Footer />
    </>
  );
}

export default App;
