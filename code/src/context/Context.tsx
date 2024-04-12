import { createContext, ReactNode, useEffect, useState } from 'react';

const Context = createContext<IProviderTypes | undefined>(undefined);

interface IProviderTypes {
  isMobile: boolean;
  isDesktop: boolean;
}

interface IContextType {
  children: ReactNode;
}

export const ContextProvider: React.FC<IContextType> = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false); 

  useEffect(() => {
    const resizeWindow = () => {
      const screenSize = window.innerWidth;
      setIsMobile(screenSize < 744);
      setIsDesktop(screenSize >= 1440);
    };

    window.addEventListener('resize', resizeWindow);

    resizeWindow();

    return () => {
      window.removeEventListener('resize', resizeWindow);
    };
  }, []);

  const contextValue = {
    isMobile: isMobile,
    isDesktop: isDesktop,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default Context;
