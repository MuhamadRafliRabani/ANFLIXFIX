import { BookmarkSimple, Play } from "@phosphor-icons/react/dist/ssr";
import Button from "../../ui/button";

const Home_Page = () => {
  return (
    <div className="relative z-20 h-full min-h-56 w-full shadow-sm md:min-h-[70svh]">
      <div className="container absolute left-4 top-12 h-full w-3/4 space-y-3 md:left-12 md:top-[45%] md:w-[20%]">
        <div className="">
          <h1 className="text-3xl font-bold tracking-wide text-white md:text-5xl">
            Chainsaw Man
          </h1>
          <p className="w-full text-sm tracking-wide text-white text-opacity-90">
            Denji has a simple dream ~ to live a happy and peaceful life,
            spending time with a girl.
          </p>
        </div>
        <div className="space-x-2">
          <Button text="Watch" icon={<Play size={14} />} />
          <Button text="Collection" icon={<BookmarkSimple size={16} />} black />
        </div>
      </div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white">
        <video autoPlay muted loop className="h-full w-full object-cover">
          <source src="/ChainsawManOp.mp4" type="video/mp4" />
          Browsermu tidak mendukung video tag.
        </video>
      </div>
    </div>
  );
};

export default Home_Page;
