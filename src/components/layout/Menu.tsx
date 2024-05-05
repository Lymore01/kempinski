import { useEffect } from "react"


const Menu = () => {
    useEffect(()=>{
        const targetHeight = 500;
        const handleScroll = () => {
            if (window.pageYOffset <= targetHeight) {
              window.scrollTo({ top: targetHeight, behavior: 'smooth' });
            }
          };
          window.addEventListener("scroll", handleScroll);
          return () => {
            window.removeEventListener("scroll", handleScroll);
          };
    },[])
  return (
    <>
    <div className="w-full h-screen fixed top-0 p-4 bg-white z-40">
        
    </div>
    </>
  )
}

export default Menu