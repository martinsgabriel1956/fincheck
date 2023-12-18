import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { Router } from "./Router";
import { AuthProvider } from "./app/providers/AuthProvider";
import { queryClient } from "./app/services/queryClient";

export function App() {
  return (
    <QueryClientProvider
      client={queryClient}
    >
      <AuthProvider>
        <Router />
        <Toaster />
      </AuthProvider>
      <ReactQueryDevtools buttonPosition="bottom-left" />
    </QueryClientProvider>
  );
}