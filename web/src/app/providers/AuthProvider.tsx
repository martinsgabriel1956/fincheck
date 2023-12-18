import { ReactNode } from "react";
import { AuthContext } from "../contexts/AuthContext";

export function AuthProvider({ children }: { children: ReactNode }) {
  return (
    <AuthContext.Provider value={{ signedIn: true }}>
      {children}
    </AuthContext.Provider>
  );
}