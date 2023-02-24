import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Brands() {
  return (
    <div className="bg-[url('/fondo-marcas.jpg')] py-20 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold leading-8 text-white">
          CONOCE NUESTRAS MARCAS
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-8">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
            <div key={index} className="bg-white py-8 px-6 rounded-lg">
              <Image
                src={"/marca" + index + ".png"}
                alt="Suzuki"
                width={696}
                height={709}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
