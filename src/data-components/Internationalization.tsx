import React, { ReactElement, useEffect, useState } from 'react';
import { MainAppMessage } from '../models/message-model';
import en from '../translations/en';
import es from '../translations/es';

export interface IInternationalization {
  children: ReactElement;
}

export interface IIntContext {
  language: MainAppMessage;
  handleLanguage?: (language: string) => void;
}

const initialValue: IIntContext = {
  language: es,
};

export const IntContext = React.createContext<IIntContext>(initialValue);

const Internationalization: React.FC<IInternationalization> = ({
  children,
}) => {
  const [values, setValues] = useState({
    language: es,
    handleLanguage: (value: string) => {},
  });

  const changeLanguage = (language: string) => {
    console.log('CHANGIN', language);
  };

  useEffect(() => {
    console.log('The Effect');
    setValues({
      language: en,
      handleLanguage: changeLanguage,
    });
  }, []);

  return (
    <>
      <IntContext.Provider
        value={{
          language: values.language,
          handleLanguage: changeLanguage,
        }}
      >
        {children}
      </IntContext.Provider>
    </>
  );
};

export default Internationalization;
