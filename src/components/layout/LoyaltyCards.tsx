import LoyaltyCard from "../common/LoyaltyCard";

const LoyaltyCards = () => {
  return (
    <>
      <div className="w-full h-full p-16 flex place-content-center justify-center items-center bg-[whitesmoke] flex-col">
        <div className="w-full h-auto p-8 pb-16 flex place-content-center flex-col gap-[10px] text-center text-[#02102A]">
          <h2 className="text-[32px] md:text-[34px] lg:text-[60px] font-semibold">
            Kempinski Loyalty
          </h2>
          <p className="lg:text-[18px] font-normal text-[14px] md:text-[16px]">
            Join our global loyalty programme for more rewards, greater access,
            and instant recognition
          </p>
        </div>
        <div className="w-[100%] lg:flex-row flex-col md:flex-col flex sm:h-[600px] md:h-[666px] lg:h-[70vh]  bg-clip-content ">
          <LoyaltyCard
            hover="origin-left"
            title="Instant Benefits"
            image="https://storage.kempinski.com/cdn-cgi/image/w=960,f=auto,g=auto,fit=scale-down/ki-cms-prod/images/2/2/2/5/255222-1-eng-GB/9e1994000a70-KISZG1_PUR_Sommer24_High-Res_24509_rs.jpg"
          />
          <LoyaltyCard
            hover="origin-center"
            title="DISCOVERY Dollars"
            image="https://storage.kempinski.com/cdn-cgi/image/w=960,f=auto,g=auto,fit=scale-down/ki-cms-prod/images/5/2/2/5/255225-1-eng-GB/ab4b8c779670-Kempinski-Cuba-461-CBP-ARTO-dec-21_High-Res_21604_rs.jpg"
          />
          <LoyaltyCard
            hover="origin-right"
            title="Live Local"
            image="https://storage.kempinski.com/cdn-cgi/image/w=960,f=auto,g=auto,fit=scale-down/ki-cms-prod/images/0/9/8/8/278890-1-eng-GB/f40bb1f4b323-Loyalty-DPS1-Kempinski-Bali-Experience-chakra-awakening-02.jpg"
          />
        </div>
      </div>
    </>
  );
};

export default LoyaltyCards;
