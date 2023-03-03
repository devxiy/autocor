import Features from "../../components/Features";
import Layout from "../../components/Layout";
import Pricing from "../../components/Pricing";
import Image from "next/image";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Details() {
  return (
    <Layout selected="vehicles">
      <div className="bg-white flex justify-center flex-col items-center pt-4 pb-10 px-8">
        <div className="flex flex-col lg:flex-row gap-8 px-4 lg:px-10 justify-center items-center">
          <div className="overflow-hidden">
            <Image
              className=""
              src={"/carro3.jpg"}
              alt=""
              width={1200}
              height={730}
              priority
            />
            <div className="flex gap-1 py-1">
              <Image
                className=""
                src={"/carro3.jpg"}
                alt=""
                width={200}
                height={122}
                priority
              />
              <Image
                className=""
                src={"/carro3.jpg"}
                alt=""
                width={200}
                height={122}
                priority
              />
              <Image
                className=""
                src={"/carro3.jpg"}
                alt=""
                width={200}
                height={122}
                priority
              />
              <Image
                className=""
                src={"/carro3.jpg"}
                alt=""
                width={200}
                height={122}
                priority
              />
            </div>
          </div>
          <div>
            <p className="text-gray-500 text-lg lg:text-3xl text-center lg:text-left">
              Año 2017
            </p>
            <p className="text-black font-bold text-2xl lg:text-6xl text-center lg:text-left">
              Jeep Wrangler Rubicon
            </p>
            <p className="text-main  text-3xl lg:text-6xl font-bold mt-6 text-center lg:text-left">
              $59.900
            </p>
            <p className="text-gray-500  text-2xl lg:text-4xl mt-2 text-center lg:text-left">
              $239<span className="text-lg">/mes</span>
            </p>
            <div className="flex gap-2 pt-4">
              <Button title="Reservar" variant="secondary" />
              <Button title="Whatsapp" variant="whatsapp" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white pb-10 flex-col justify-center items-center">
        <SectionText
          title="Financiamiento"
          subtitle="Plazos adaptados a tus necesidades"
        />

        <Pricing />
      </div>

      <div className="bg-white flex justify-center flex-col items-center pt-4 pb-10">
        <div className="pb-10 flex-col justify-center items-center">
          <SectionText
            title="Especificaciones"
            subtitle="¿Por qué elegir este auto?"
          />

          <Features />
        </div>
      </div>

      <div className="bg-white flex max-w-7xl pt-4 pb-10">
        <div className="pb-10 flex flex-1 justify-center">
          <div className="flex flex-col flex-1 max-w-5xl">
            <SectionText title="Extras" subtitle="Observaciones" />
            <ul className="list-disc font-light text-lg pt-8 px-12">
              <li>Ruedas delanteras (nuevas) + Ruedas traseras (nuevas)</li>
              <li>Etiqueta medioambiental C</li>
              <li>Mirror screen</li>
              <li>Control de velocidad adaptativo</li>
              <li>Prevención de colisión</li>
            </ul>
          </div>
        </div>
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

function Button({ title, variant }) {
  return (
    <button
      className={classNames(
        variant === "whatsapp"
          ? "bg-green-600 hover:bg-gray-600"
          : "bg-gray-600 hover:bg-main",
        "py-3 px-6 flex items-center text-sm text-white font-semibold rounded-lg uppercase"
      )}
    >
      <p>{title}</p> <IconArrow />
    </button>
  );
}

function IconArrow() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      clipRule="evenodd"
      viewBox="0 0 78 136"
      className="w-2 ml-2"
    >
      <path
        fill="#fff"
        fillRule="nonzero"
        d="M0-15.515l6.932 6.932a1.167 1.167 0 010 1.651L0 0c-.735.735-1.992.214-1.992-.825V-14.69c0-1.04 1.257-1.56 1.992-.825"
        transform="translate(-9082.92 -19967.5) scale(8.33333) translate(1091.94 2411.96)"
      ></path>
    </svg>
  );
}
