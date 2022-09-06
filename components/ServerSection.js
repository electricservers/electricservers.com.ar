import Server from "./Server";

const ServerSection = ({ logo, bgImage, text, serverList }) => {

  return (
    <div className="overflow-hidden h-max skew-y-2 my-5">
      <img src={bgImage} className="absolute min-h-full max-h-[200%] max-w-none min-w-full left-[50%] top-[50%] translate-x-[-50%] translate-y-[-30%]" />
      <div className="flex flex-col w-full h-full my-5">
        <div className="-skew-y-2 flex gap-4 place-items-center m-auto w-max py-8">
          <img src={logo} width="100" alt="logo" />
          <h1 className='font-bold text-2xl sm:text-3xl md:text-5xl text-white text-shadow'>{text}</h1>
        </div>
        <div className="-skew-y-2 pb-24">
          {serverList.map(({ ip, port }, i) => {
            return (
              <div key={i} className="my-2 max-w-[80vw] rounded-2xl m-auto bg-yellow-500/90">
                <Server ip={ip} port={port} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServerSection;
