import { FaInstagram } from "react-icons/fa";
type Prop = {
    image:string,
    id:number
}

const ImagesSlider = ({image ,id} : Prop) => {
  return (
    <div className="h-[320px] cursor-pointer relative">
      <div className="w-full h-full absolute top-0 bg-[rgba(0,0,0,0.1)]">
        <div className="w-full grid place-content-end p-4">
          <span>
          <FaInstagram />
          </span>
        </div>
      </div>
      <img src={image} key={id} className="w-full h-full object-cover object-center"></img>
    </div>
  );
};

export default ImagesSlider;
