export default function CTA() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className=" bg-main px-6 pt-16 shadow-xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <div className="w-1/2 mt-16 lg:mt-8">
            {/* <img
              className="w-[57rem] rounded-md bg-white/5 ring-1 ring-white/10"
              src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
              alt="App screenshot"
              width={1824}
              height={1080}
            /> */}
          </div>
          <div className=" w-1/2 text-center lg:mx-0 lg:flex-auto lg:py-32">
            <h2 className="text-xl font-light uppercase tracking-tight text-white sm:text-xl">
              Compramos tu auto
            </h2>
            <p className="mt-1 text-3xl uppercase font-bold leading-8 text-white font-poppins">
              La historia de tu auto
              <br /> aún no termina
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button className="py-3 px-6 flex items-center bg-gray-600 text-white font-semibold rounded-lg uppercase hover:bg-main">
                <p>Conoce más</p> <IconArrow />
              </button>
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