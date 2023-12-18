import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { Router } from "./Router";
import { AuthProvider } from "./app/providers/AuthProvider";

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider
      client={queryClient}
    >
      <AuthProvider>
        <Router />
        <Toaster />
      </AuthProvider>
    </QueryClientProvider>
  );
}