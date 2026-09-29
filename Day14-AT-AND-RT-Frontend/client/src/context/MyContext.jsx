import { createContext, useState } from "react";

export const MyContext = createContext();

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
    const [form, setForm] = useState({
      name: "",
      email: "",
      password: "",
    });

  return (
    <MyContext.Provider
      value={{
        user,
        accessToken,
        isLoading,
        setUser,
        setAccessToken,
        setIsLoading,
        form,
        setForm
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default ContextProvider
