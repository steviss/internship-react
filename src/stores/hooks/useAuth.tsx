import { useMemo } from "react";
import { useSelector } from "react-redux";

import { UserType } from "@types";

import { getCurrentToken, selectCurrentUser } from "../reducers";

export interface UseAuthReturnI {
  user: UserType | null;
  token: string | null;
}

const useAuth = (): UseAuthReturnI => {
  const user = useSelector(selectCurrentUser);

  const token = useSelector(getCurrentToken);

  return useMemo(() => ({ user, token }), [user, token]);
};

export default useAuth;