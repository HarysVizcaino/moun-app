import React, { ReactElement, useState } from 'react';
import { MainAppMessage } from '../models/message-model';
import en from '../translations/en';
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
  handleLanguage: () => {},
};

export const IntContext = React.createContext<IIntContext>(initialValue);

const Internationalization: React.FC<IInternationalization> = ({
  children,
}) => {
  const [values, setValues] = useState(es);

  const changeLanguage = (language: string) => {
    console.log('CHANGIN', language);
    if (language === 'es') {
      setValues(es);
    } else if (language === 'en') {
      setValues(en);
    }
  };

  const valuesCtx: IIntContext = {
    language: values,
    handleLanguage: changeLanguage,
  };

  return (
    <>
      <IntContext.Provider value={valuesCtx}>{children}</IntContext.Provider>
    </>
  );
};

export default Internationalization;
