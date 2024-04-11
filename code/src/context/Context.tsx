import { createContext, ReactNode, useEffect, useState } from 'react';

const Context = createContext<IProviderTypes | undefined>(undefined);

interface IProviderTypes {
  isMobile: boolean;
}

interface IContextType {
  children: ReactNode;
}

export const ContextProvider: React.FC<IContextType> = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const resizeWindow = () => {
      const screenSize = window.innerWidth;
      setIsMobile(screenSize < 744);
    };

    window.addEventListener('resize', resizeWindow);

    resizeWindow();

    return () => {
      window.removeEventListener('resize', resizeWindow);
    };
  }, []);

  const contextValue = {
    isMobile: isMobile,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default Context;
