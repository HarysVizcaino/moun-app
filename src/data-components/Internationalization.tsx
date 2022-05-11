import React, { ReactElement, useEffect, useState } from 'react';
import { MainAppMessage } from '../models/message-model';
import es from '../translations/es';

export interface IInternationalization {
  children: ReactElement;
}

export interface IIntContext {
  language: MainAppMessage;
  handleLanguage: (language: string) => void;
}

const initialValue: IIntContext = {
  language: es,
  handleLanguage: () => {
    console.log('THIONE');
  },
};

export const IntContext = React.createContext<IIntContext>(initialValue);

const Internationalization: React.FC<IInternationalization> = ({
  children,
}) => {
  const [language, setLanguage] = useState(es);
  useEffect(() => {}, []);

  const changeLanguage = (language: string) => {
    console.log('CHANGIN', language);
  };

  return (
    <>
      <IntContext.Provider
        value={{
          language,
          handleLanguage: changeLanguage,
        }}
      >
        {children}
      </IntContext.Provider>
    </>
  );
};

export default Internationalization;
