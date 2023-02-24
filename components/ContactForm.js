import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

export default function Form() {
  return (
    <div className="">
      <div className="mx-auto max-w-7xl py-16 px-6 sm:py-24 lg:px-8">
        <div className="relative bg-white shadow-xl">
          <h2 className="sr-only">Contact us</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* Contact information */}
            <div className="relative overflow-hidden bg-secondary py-10 px-6 sm:px-10 xl:p-12"></div>

            {/* Contact form */}
            <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12 bg-main">
              <h2 className="text-xl font-light uppercase tracking-tight text-white sm:text-xl text-center">
                DÉJANOS TUS DATOS
              </h2>
              <p className="mt-1 text-3xl uppercase font-bold leading-8 text-white font-poppins text-center">
                ¡ESTRENA TU SEMINUEVO HOY!
              </p>
              <p className="font-light text-lg tracking-tight text-white text-center">
                Un asesor te contactará de inmediato{" "}
              </p>
              <form
                action="#"
                method="POST"
                className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
              >
                <div className="sm:col-span-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-white"
                  ></label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Nombre y apellido"
                      className="block w-full rounded-md font-light border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-900"
                    ></label>
                  </div>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      placeholder="Número de teléfono"
                      className="block w-full rounded-md font-light border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      aria-describedby="phone-optional"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-900"
                  ></label>
                  <div className="mt-1">
                    <input
                      id="city"
                      name="city"
                      type="text"
                      placeholder="Ciudad"
                      className="block w-full font-light rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-900"
                  ></label>
                  <div className="mt-1">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Correo electrónico"
                      className="block w-full font-light rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2 sm:flex sm:justify-center">
                  <button className="py-3 px-6 flex items-center bg-gray-600 text-white font-semibold rounded-lg uppercase hover:bg-main">
                    <p>Enviar</p> <IconArrow />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
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
