import Image from "next/image";

const Slide = () => {
  const [emblaRef] = useEmblaCarousel({
    dragFree: true,
    align: "start",
  });

  return (
    <div className="embla w-full md:overflow-hidden" ref={emblaRef}>
      <div className="embla__container flex gap-2 md:gap-3">
        <div className="embla__slide w-[113px] min-w-0 flex-shrink-0 flex-grow-0 md:w-full">
          <Image
            src="/image-auth-1.jpg"
            width={700}
            height={600}
            alt=""
            className="h-full w-full rounded-lg brightness-90"
          />
        </div>
        <div className="embla__slide w-[113px] min-w-0 flex-shrink-0 flex-grow-0 md:w-full">
          <Image
            src="/image-auth-2.jpg"
            width={700}
            height={600}
            alt=""
            className="h-full w-full rounded-lg brightness-90"
          />
        </div>
        <div className="embla__slide w-[113px] min-w-0 flex-shrink-0 flex-grow-0 md:w-full">
          <Image
            src="/image-auth-3.jpg"
            width={700}
            height={600}
            alt=""
            className="h-full w-full rounded-lg brightness-90"
          />
        </div>
        <div className="embla__slide w-[113px] min-w-0 flex-shrink-0 flex-grow-0 md:w-full">
          <Image
            src="/image-auth-4.jpg"
            width={700}
            height={600}
            alt=""
            className="h-full w-full rounded-lg brightness-90"
          />
        </div>
      </div>
    </div>
  );
};

export default Slide;
