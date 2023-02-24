import Image from "next/image";
export function Spinner() {
  return (
    <svg
      className="animate-spin -ml-1 mr-3 h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );
}

export function Logo() {
  return <Image alt="" src={"/logo-autocor.png"} width={150} height={68} />;
}

export function LogoFooter() {
  return <Image alt="" src={"/logo-autocor.png"} width={120} height={54} />;
}
