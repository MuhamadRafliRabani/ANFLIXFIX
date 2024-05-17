import { PrismaClient } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

const prisma = new PrismaClient();
const Collection = async () => {
  const db = await prisma.collection.findMany();

  return (
    <section className="text-white font-semibold pt-14">
      <h1 className="py-2 font-bold text-lg ps-2 hover:text-[#E50914]">Your Collection :</h1>
      <div className="grid grid-cols-3 grid-rows-3 md:grid-cols-7 w-svw h-fit gap-2 ps-2 pe-2 md:pe-6">
        {db.map((data, index) => {
          return (
            <div key={index} className="w-fit h-fit flex flex-col justify-center items-center">
              <Link href={`/detail-anime/${data.anime_mal_id}`} className="mx-auto">
                <Image src={data.anime_images} width={200} height={330} className="rounded-md" />
              </Link>
              <p className="hover:text-[#E50914]">{data.anime_title}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Collection;
