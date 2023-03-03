const tiers = [
  {
    name: "Hobby",
    id: "tier-hobby",
    href: "#",
    priceMonthly: "$49",
    description:
      "Modi dolorem expedita deleniti. Corporis iste qui inventore pariatur adipisci vitae.",
    features: [
      "5 products",
      "Up to 1,000 subscribers",
      "Basic analytics",
      "48-hour support response time",
    ],
  },
  {
    name: "Team",
    id: "tier-team",
    href: "#",
    priceMonthly: "$79",
    description:
      "Explicabo quo fugit vel facere ullam corrupti non dolores. Expedita eius sit sequi.",
    features: [
      "Unlimited products",
      "Unlimited subscribers",
      "Advanced analytics",
      "1-hour, dedicated support response time",
      "Marketing automations",
    ],
  },
  {
    name: "Team",
    id: "tier-team2",
    href: "#",
    priceMonthly: "$79",
    description:
      "Explicabo quo fugit vel facere ullam corrupti non dolores. Expedita eius sit sequi.",
    features: [
      "Unlimited products",
      "Unlimited subscribers",
      "Advanced analytics",
      "1-hour, dedicated support response time",
      "Marketing automations",
    ],
  },
];

export default function Pricing() {
  return (
    <div className="max-w-5xl mx-auto px-10 py-10">
      <div className="grid w-full grid-cols-1 gap-16 lg:grid-cols-3 px-8">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className="flex flex-col justify-between rounded-3xl bg-[#F4F4F4] py-6 px-8 shadow-xl ring-1 ring-gray-900/10"
          >
            <div className="text-gray-600">
              <h3
                id={tier.id}
                className="text-base text-center font-bold -ml-8"
              >
                Plazo
              </h3>
              <div className="flex justify-center items-baseline -mt-1">
                <span className="text-7xl font-bold tracking-tight">36</span>
              </div>
              <p className="text-2xl text-center font-bold -mt-4">meses</p>

              <div className="bg-main -mx-10 text-white mt-4">
                <div className="px-4 py-4 flex flex-col justify-center items-center">
                  <p className="text-xs">Cuota</p>
                  <p className="text-3xl">
                    $470<span className="text-sm">/mes</span>
                  </p>
                  <div className="text-xs font-light flex">
                    <p className="flex text-right">
                      Entrada
                      <br className="p-0" />
                      desde
                    </p>
                    <span className="text-2xl">$2.000</span>
                  </div>
                </div>
              </div>

              <ul className="mt-4 text-sm font-light flex flex-col items-center gap-y-4 justify-center text-gray-600 list-disc">
                <li className="flex flex-col text-left">
                  Tasa de interés
                  <span className="font-bold">del 12%</span>
                </li>
                <li className="flex flex-col">
                  Entrada desde
                  <span className="font-bold">el 0%</span>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
