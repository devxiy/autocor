import Layout from "../components/Layout";
import Brands from "../components/Brands";
import List from "../components/List";
import Stats from "../components/Stats";
import CTA from "../components/CTA";
import ContactForm from "../components/ContactForm";
import SearchBar from "../components/SearchBar";
import FiltersSection from "../components/FiltersSection";

export default function Home() {
  return (
    <Layout selected="home">
      <div className="bg-gray-50 flex justify-center flex-col items-center py-10">
        <div className="px-6 w-full max-w-7xl py-6 mx-auto">
          <SearchBar />
        </div>

        <SectionText
          title="Especificaciones"
          subtitle="¿En cuál tipo de auto estás interesado?"
        />

        <FiltersSection />

        <Button title="Buscar mi auto" />
      </div>

      <div className="bg-white flex justify-center flex-col items-center pt-4 pb-10">
        <div className="pb-10 flex-col justify-center items-center">
          <SectionText
            title="Destacados"
            subtitle="Encuentra el seminuevo de tus sueños"
          />
          <List list={[1, 2, 3]} />
          <div className="flex justify-center">
            <Button title="Ver más autos" />
          </div>
        </div>
      </div>

      <CTA />

      <div className="bg-white flex justify-center flex-col items-center py-10">
        <div className="py-10 flex-col justify-center items-center">
          <SectionText
            title="Oportunidad de compra"
            subtitle="Los más vistos de la semana"
          />
          <List list={[1, 2, 3, 4, 5, 6]} />
          <div className="flex justify-center">
            <Button title="Ver más autos" />
          </div>
        </div>
      </div>

      <Stats />

      <Brands />

      <ContactForm />
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

function Button({ title }) {
  return (
    <button className="py-3 px-6 flex items-center bg-gray-600 text-white font-semibold rounded-lg uppercase hover:bg-main">
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
