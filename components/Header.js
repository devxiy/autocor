import { useState } from "react";
import { Logo } from "./Shared";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const navigation = [
  { name: "Inicio", href: "/", slug: "home" },
  { name: "Quiénes somos", href: "/quienes-somos", slug: "about" },
  { name: "Vehículos", href: "/vehiculos", slug: "vehicles" },
  { name: "Compramos tu auto", href: "#", slug: "buy" },
  { name: "Planes de financiamiento", href: "#", slug: "financing" },
  { name: "Contáctanos", href: "/contactanos", slug: "contact" },
];

export default function Header({ selected }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-2xl">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between py-4 px-6 lg:px-8"
        aria-label="Autocor"
      >
        <Link href="/" className="-m-1.5 p-1.5">
          <span className="sr-only">Autocor</span>
          <Logo />
        </Link>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Abrir el menu principal</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={
                selected === item.slug
                  ? "text-sm leading-6 text-main hover:text-gray-900 underline"
                  : "text-sm leading-6 text-gray-900 hover:text-main hover:underline"
              }
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel
          focus="true"
          className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
        >
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Cerrar menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg py-2 px-3 leading-7 text-gray-900 hover:text-main hover:underline"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
