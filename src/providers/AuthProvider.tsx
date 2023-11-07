import { ReactNode, createContext, useContext, useState } from "react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import useLabelState from "../hooks/useLabelState";
import { createToken } from "../utils/createToken";
type AuthProviderProps = {
  children: ReactNode;
};
type IUser = {
  username: string;
  password: string;
};
type IAuthContext = {
  signIn: ({ username, password }: IUser) => void;
  signOut: () => void;
  authError: string;
  user: string | null;
};

export const AuthContext = createContext<IAuthContext>({
  signIn: () => {},
  signOut: () => {},
  authError: "",
  user: "",
});

const getUser = () => {
  const savedUser = localStorage.getItem("user");
  return savedUser ? savedUser : null;
};

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useLabelState(getUser(), "User");
  const [authError, setAuthError] = useLabelState("", "Auth Error");
  const navigate = useNavigate();

  const signIn = ({ username, password }: IUser) => {
    //* Replace this with API Call
    const token = createToken(username, password);
    setUser(token);
    localStorage.setItem("user", token);
    navigate("/", { replace: true });
  };

  const signOut = () => {
    setUser("");
    localStorage.removeItem("user");
  };
  const values = {
    signIn,
    signOut,
    authError,
    user,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  return useContext(AuthContext);
};
