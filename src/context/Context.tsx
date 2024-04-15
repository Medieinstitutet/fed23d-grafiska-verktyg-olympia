import { createContext, ReactNode, useEffect, useState } from 'react';

const Context = createContext<IProviderTypes | undefined>(undefined);

interface IProviderTypes {
  isMobile: boolean;
  isDesktop: boolean;
  isCookiebarOpen: boolean;
  isButtonEnabled: boolean;
  closeCookiebarOnClick: () => void;
  switchEnabledStateOnChange: (inputRef: React.MutableRefObject<HTMLInputElement | null>) => void;
}

interface IContextType {
  children: ReactNode;
}

export const ContextProvider: React.FC<IContextType> = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isCookiebarOpen, setIsCookiebarOpen] = useState(true);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

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

  const switchEnabledStateOnChange = (inputRef: React.MutableRefObject<HTMLInputElement | null>) => {
    if (!inputRef.current) return;
    setIsButtonEnabled(inputRef.current.value.trim().length > 0);
  };

  const closeCookiebarOnClick = () => {
    setIsCookiebarOpen(false);
  };

  const contextValue = {
    isMobile: isMobile,
    isDesktop: isDesktop,
    isCookiebarOpen: isCookiebarOpen,
    isButtonEnabled: isButtonEnabled,
    closeCookiebarOnClick: closeCookiebarOnClick,
    switchEnabledStateOnChange: switchEnabledStateOnChange,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default Context;
