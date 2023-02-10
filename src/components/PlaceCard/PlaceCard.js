import { GrFormNextLink } from "react-icons/gr";

const PlaceCard = ({ item }) => {
  console.log(item);
  const { img_url, description } = item;
  return (
    <div className="transition ease-in-out duration-500 cursor-pointer transition-[.5s] hover:translate-y-[30px] place">
      <div
        className={`flex justify-center items-center text-[#fff] absolute top-1/3 left-1/3 w-[95px] h-[95px] bg-[#265C35] hover:bg-[#5bbb76] transition ease-in-out duration-700 rounded-[50%] font-normal text-[1rem] transition-[.5s]  opacity-0 circle`}
      >
        Learn <br /> more
        <br /> <GrFormNextLink />
      </div>
      <img className="rounded" src={img_url} alt={description} />
      <p className="font-semibold text-[20px] leading-[29px] float-left pt-[1rem] text-[#fff]">
        {" "}
        {description}
      </p>
    </div>
  );
};

export default PlaceCard;
