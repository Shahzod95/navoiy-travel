import Client from "../image/client1.png";

const OurClients = () => {
  return (
    <div>
      <div className="w-full h-[50vh] bg-[#fff]"></div>
      <div className="absolute flex mt-[-15rem] ml-[40rem] gap-[2rem] overflow-hidden">
        <img src={Client} />
        <img src={Client} />
      </div>
      <div className="w-full h-[50vh] bg-[#345059] p-[90px_120px]">
        <p className="our-clients font-normal text-[50px] leading-[120%] text-[#fff]">
          Get inspired by <br /> our clients
        </p>
        <p className="font-light text-[18px] leading-[130%] text-[#fff]">
          Lorem Ipsum is simply dummy text of the printing and typesetting{" "}
          <br /> industry. Lorem Ipsum has been the industry's standard
        </p>
      </div>
    </div>
  );
};

export default OurClients;
