import { createContext, useState, ReactNode } from 'react';

interface NavContextType {
  route: string;
  handleRoute: (route: string) => void;
}

export const NavContext = createContext<NavContextType>({
  route: '',
  handleRoute: () => {},
});

interface NavProviderProps {
  children: ReactNode;
}

export const NavProvider = ({ children }: NavProviderProps) => {
  const [route, setRoute] = useState('');

  const handleRoute = (route: string) => {
    setRoute(route);
  };

  console.log(route);

  return (
    <NavContext.Provider
      value={{
        route,
        handleRoute,
      }}
    >
      {children}
    </NavContext.Provider>
  );
};
