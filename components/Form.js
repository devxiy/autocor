export default function Form() {
  return (
    <div className="">
      <form action="#" method="POST" className="mx-auto mt-4 sm:mt-4 max-w-3xl">
        <div className="grid grid-cols-1 gap-y-2 gap-x-2 sm:grid-cols-6">
          <div className="sm:col-span-6">
            <label htmlFor="name" className="sr-only">
              Nombre y apellido
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Nombre y apellido"
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main text-xs sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="phone" className="sr-only">
              Número de teléfono
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Número de teléfono"
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main text-xs sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="mail" className="sr-only">
              Correo electrónico
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="mail"
                id="mail"
                placeholder="Correo electrónico"
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main text-xs sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="city" className="sr-only">
              Ciudad
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="city"
                id="city"
                placeholder="Ciudad"
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main text-xs sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="model" className="sr-only">
              Modelo del vehículo
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="model"
                id="model"
                placeholder="Modelo del vehículo"
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main text-xs sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="amount" className="sr-only">
              Cantidad que deseas obtener por tu vehículo
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="amount"
                id="amount"
                placeholder="Cantidad que deseas obtener por tu vehículo"
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main text-xs sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <button className="py-3 px-6 flex items-center bg-main text-white font-semibold rounded-lg uppercase hover:bg-gray-600">
            <p>Enviar</p> <IconArrow />
          </button>
        </div>
      </form>
    </div>
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
