import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import AppProvider from "../components/AppProvider";
import { Montserrat, Poppins } from "@next/font/google";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: ["300", "400", "600", "700", "900"],
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "600", "700", "900"],
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }) {
  return (
    <div className={`${montserrat.variable} ${poppins.variable} font-sans`}>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </div>
  );
}

export default MyApp;
