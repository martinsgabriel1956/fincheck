import { ReactNode, useCallback, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { AuthContext } from "../contexts/AuthContext";
import { localStorageKeys } from "../config/localStorageKeys";
import { usersService } from "../services/usersService";
import { queryClient } from "../services/queryClient";
import { LaunchScreen } from "@/view/components";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [signedIn, setSignedIn] = useState<boolean>(() => {
    const storedAccessToken = localStorage.getItem(localStorageKeys.ACCESS_TOKEN);
    return !!storedAccessToken;
  });

  const { isError, isFetching, isSuccess } = useQuery({
    queryKey: ["users", "me"],
    queryFn: () => usersService.me(),
    enabled: signedIn,
    staleTime: Infinity
  });

  const signin = useCallback((accessToken: string) => {
    localStorage.setItem(localStorageKeys.ACCESS_TOKEN, accessToken);
    setSignedIn(true);
  }, []);

  const signout = useCallback(() => {
    localStorage.removeItem(localStorageKeys.ACCESS_TOKEN);
    queryClient.removeQueries({
      queryKey: ["users", "me"]
    });
    setSignedIn(false);
  }, []);

  useEffect(() => {
    if (isError) {
      toast.error("Sua sessão expirou!");
      signout();
    }
  }, [isError, signout]);

  return (
    <AuthContext.Provider value={{ signedIn: isSuccess && signedIn, signin, signout }}>
      <LaunchScreen isLoading={isFetching} />
      {!isFetching && children}
    </AuthContext.Provider>
  );


}