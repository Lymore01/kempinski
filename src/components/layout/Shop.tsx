const Shop = () => {
  return (
    <>
      <div className="w-full h-full p-16 flex place-content-center justify-center items-center bg-[white] flex-col gap-[20px] mb-[30px]">
        <div className="w-[90%] items-center justify-center flex-row flex h-auto overflow-x-scroll gap-[20px] p-4">
          <div className="w-full h-full flex place-content-center flex-col gap-[30px] text-[#02102A]">
            <h5 className="text-[36px]">Shop Kempinski</h5>
            <div className="flex flex-col gap-[15px]">
              <p className="text-[16px] leading-7">
                Experience the joy of Kempinski at home and share the<br></br>{" "}
                delight with your loved ones with our collection of <br></br>{" "}
                exclusive products and gift vouchers.
              </p>
              <p className="text-[16px] leading-7">
                Luxuriate with sumptuous duvets and linens, indulge<br></br>{" "}
                with divine bath and body products, or opt for a gift<br></br>{" "}
                voucher so the special people in your life can savour<br></br>{" "}
                Kempinski for themselves.
              </p>
            </div>
            <div
              className={`cursor-pointer p-3 pr-4 pl-4 h-[48px] items-center
               justify-center border border-[#b5A191] flex w-[180px] mt-[10px]`}
            >
              <span className="font-semibold uppercase tracking-widest">Browse Now</span>
            </div>
          </div>
          <div className="w-full h-full bg-[yellow]">
            <img
              src="https://storage.kempinski.com/cdn-cgi/image/w=1120,h=1490,f=auto,g=auto,fit=cover/ki-cms-prod/images/0/4/9/7/2347940-1-eng-GB/caf33c7cde69-homepage-image-shop-kempinski.jpg"
              className="h-full w-full object-cover object-center"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
