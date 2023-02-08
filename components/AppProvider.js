import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function AppProvider({ children }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
