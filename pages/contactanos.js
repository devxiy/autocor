import Layout from "../components/Layout";
import Image from "next/image";

export default function Contact() {
  return (
    <Layout selected="contact">
      <div className="bg-gray-50 pb-10 flex flex-col lg:flex-row justify-center items-center px-8">
        <div className="p-4 lg:w-1/2 flex flex-col gap-4">
          <SectionText
            title="Ven a nuestros concesionarios"
            subtitle="Tu Seminuevo espera por ti"
          />
          {[1, 2, 3, 4].map((index) => (
            <div
              key={index}
              className="bg-white shadow-2xl rounded-lg py-4 px-6 text-xs text-gray-600 flex gap-4"
            >
              <div className="flex justify-center items-center">
                <Image
                  src={"/contact-agency.jpg"}
                  alt=""
                  width={153}
                  height={180}
                />
              </div>
              <div className="space-y-1 flex flex-col flex-1 px-2">
                <p className="font-bold text-gray-800">Autocor Av. Orellana</p>
                <p>
                  Av. Francisco de Orellana E4-328 y Enrique Gangotena.
                  (Diagonal al Hotel Marriott)
                </p>
                <p>
                  Lunes a Viernes de 08h00 a 19h00
                  <br />
                  Sábado 09:00 a 17:00
                  <br />
                  Domingo 10:00 a 14:00
                </p>
                <p>
                  022503999 / 0998306709 / 0992564838 /<br />
                  0979315967 / 0960703355 / 0984495238 /<br />
                  0992858848 / 0995397965
                </p>
                <p>
                  ventas@autocor.com.ec
                  <br />
                  marketing@autocor.com.ec
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 lg:w-1/2">
          <Image src={"/contact-map.jpg"} alt="" width={3116} height={4748} />
        </div>
      </div>

      <div className="bg-gray-50 pb-10 flex-col justify-center items-center px-8">
        <CTA />
      </div>
    </Layout>
  );
}

function SectionText({ title, subtitle }) {
  return (
    <div className="pt-6 pb-2 px-6 sm:pt-8 sm:pb-4 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-xl font-light uppercase tracking-tight text-main sm:text-xl">
          {title}
        </h2>
        <p className="mt-1 text-3xl uppercase font-bold leading-8 text-gray-600 font-poppins">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

function CTA() {
  return (
    <div className="">
      <div className="mx-auto max-w-7xl py-4 lg:px-8">
        <div className=" bg-main px-6 pt-8 shadow-xl sm:px-16 md:pt-12 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <div className="hidden w-1/3 -m-36 lg:flex justify-center items-center">
            <Image
              className="rounded-md"
              src="/contact-car-1.png"
              alt=""
              width={1200}
              height={741}
            />
          </div>
          <div className="w-full lg:w-1/3 text-center lg:mx-0 lg:flex-auto py-16">
            <h2 className="text-2xl font-light uppercase tracking-tight text-white">
              El concesionario de
            </h2>
            <p className="mt-1 text-5xl uppercase font-bold text-white font-poppins">
              Todas las marcas,
              <br /> más cerca de ti
            </p>
          </div>
          <div className="hidden w-1/3 -m-36 lg:flex justify-center items-center">
            <Image
              className="rounded-md"
              src="/contact-car-2.png"
              alt=""
              width={1200}
              height={792}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
