const Newsletter = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center mb-6">
      <h2 className="text-[32px] font-normal subscribe my-7 text-[#1A4D65]">
        Subscribe to newsletter
      </h2>
      <div>
        <input
          type="email"
          placeholder="E-mail"
          className="w-[400px] p-[8px_14px] rounded-sm focus:outline-none mr-3 bg-[#F9F9F9]"
        />
        <button className="p-[8px_36px] bg-[#279768] hover:bg-[#2cad77] focus:outline-none focus:border-0 transition-all duration-300 ease-in-out  rounded-sm text-white">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
