import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import AppProvider from "../components/AppProvider";

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
