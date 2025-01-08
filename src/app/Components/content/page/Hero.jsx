import { BookmarkSimple, Play } from "@phosphor-icons/react/dist/ssr";
import Button from "../../ui/button";
import Image from "next/image";
import Link from "next/link";

const Home_Page = () => {
  return (
    <div className="relative z-20 h-full min-h-48 w-full shadow-sm">
      <div className="container absolute left-4 top-12 h-full w-3/4 space-y-3">
        <div className="">
          <h1 className="text-3xl font-bold tracking-wide text-white">
            Chainsaw Man
          </h1>
          <p className="w-full text-sm tracking-wide text-white text-opacity-90">
            Denji has a simple dream ~ to live a happy and peaceful life,
            spending time with a girl.
          </p>
        </div>
        <div className="space-x-2">
          <Link href="anime/detail/chainsaw man/44511">
            <Button text="Watch" icon={<Play size={14} />} />
          </Link>
          <Button text="Collection" icon={<BookmarkSimple size={16} />} black />
        </div>
      </div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white">
        <Image
          src="/chainsaw man.jpg"
          height={250}
          width={800}
          objectFit="cover"
          className="h-full w-full"
        />
      </div>
    </div>
  );
};

export default Home_Page;
