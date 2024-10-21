import ButtonHouse from "./comp/buttonHouse";

const Home_Page = () => {
  return (
    <div className="relative h-full min-h-56 w-full shadow-sm">
      <div className="container h-full w-full space-y-3 px-3 py-8">
        <div className=" ">
          <h1 className="text-3xl font-bold text-white">Chainsaw Man</h1>
          <p className="w-3/4 text-sm text-white text-opacity-90">
            Denji has a simple dream ~ to live a happy and peaceful life,
            spending time with a girl.
          </p>
        </div>
        <ButtonHouse />
      </div>
      <div className="absolute inset-0 -z-10 h-full w-full">
        <video autoPlay muted loop className="h-full w-full object-cover">
          <source src="/ChainsawManOp.mp4" type="video/mp4" />
          Browsermu tidak mendukung video tag.
        </video>
      </div>
    </div>
  );
};

export default Home_Page;
