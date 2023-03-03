export default function SearchBar() {
  return (
    <div>
      <div className="mt-1 flex rounded-md shadow-sm">
        <button
          type="button"
          className="relative -ml-px inline-flex items-center space-x-2 rounded-l-md border border-gray-300 bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:border-main focus:outline-none focus:ring-1 focus:ring-main"
        >
          <span className="uppercase text-gray-400">Todo</span>
          <Icon />
        </button>
        <div className="relative flex flex-grow focus-within:z-10 justify-between">
          <input
            type="text"
            name="search"
            id="search"
            className="block w-full rounded-none rounded-r-md border-gray-300 pr-10 focus:border-main focus:ring-main text-sm font-light"
            placeholder="¿Qué estás buscando?"
          />
          <div className="pointer-events-none hidden absolute inset-y-0 right-0 md:flex items-center bg-main mx-2 my-1 px-2 rounded gap-1 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                clipRule="evenodd"
              />
            </svg>
            <p className="uppercase text-xs">Buscar</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      clipRule="evenodd"
      viewBox="0 0 106 61"
      className="w-3"
    >
      <path
        fill="#BCBBBB"
        fillRule="nonzero"
        d="M0-4.204l-5.401 5.401a.91.91 0 01-1.286 0l-5.401-5.401c-.573-.573-.168-1.552.642-1.552H-.643c.81 0 1.216.979.643 1.552"
        transform="translate(-2649.09 -1664.6) scale(8.33333) translate(330.247 205.508)"
      ></path>
    </svg>
  );
}
