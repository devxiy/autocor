import Layout from "../../components/Layout";
import List from "../../components/List";
import SearchBar from "../../components/SearchBar";
import FiltersSection from "../../components/FiltersSection";

export default function Vehicle() {
  return (
    <Layout selected="vehicles">
      <div className="bg-gray-50 flex justify-center flex-col items-center py-10">
        <div className="px-6 w-full max-w-7xl py-6 mx-auto">
          <SearchBar />
        </div>

        <SectionText
          title="Especificaciones"
          subtitle="¿En cuál tipo de auto estás interesado?"
        />

        <FiltersSection />

        <Button title="Aplicar filtro" />
      </div>

      <div className="bg-white flex justify-center flex-col items-center pt-4 pb-10">
        <div className="pb-10 flex-col justify-center items-center">
          <div className="py-6 flex flex-col lg:flex-row justify-between items-center gap-4">
            <Filters tags={["Toyota", "2018", "60000 kms.", "Un solo dueño"]} />
            <Pagination />
          </div>

          <List list={[...Array(15).keys()]} />
          <div className="flex justify-center">
            <Button title="Siguiente" />
          </div>
        </div>
      </div>
    </Layout>
  );
}

function Filters({ tags }) {
  return (
    <div className="gap-2 flex flex-col md:flex-row px-6">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="inline-flex px-2 py-1 bg-gray-200 text-gray-600 text-xs font-light rounded items-center gap-1 justify-between"
        >
          <p className="">{tag}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 text-gray-400"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      ))}
    </div>
  );
}

function Pagination() {
  return (
    <div className="flex px-6 text-sm text-gray-400 items-center gap-2 font-light">
      <p>1-50 de 364</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path
          fillRule="evenodd"
          d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
          clipRule="evenodd"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 text-gray-600"
      >
        <path
          fillRule="evenodd"
          d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
          clipRule="evenodd"
        />
      </svg>
    </div>
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
