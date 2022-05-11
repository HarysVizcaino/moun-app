import { createTheme, ThemeProvider } from '@mui/material/styles';
import Head from 'next/head';
import React, { ReactElement } from 'react';
import Internationalization from '../../../data-components/Internationalization';
import MovieDataComponent from '../../../data-components/movieDataComponent';
import TopMenu from '../../menus/top/TopMenu';
import styles from './PrimaryLayout.module.css';

export interface IPrimaryLayout {
  children: ReactElement;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  const darkTheme = createTheme({
    palette: {
      mode: 'light',
    },
  });

  return (
    <>
      <Head>
        <title>Moun - Movie App</title>
      </Head>
      <Internationalization>
        <MovieDataComponent>
          <ThemeProvider theme={darkTheme}>
            <TopMenu />
            <div className={styles.headerSeparator}></div>
            <main className={styles.main}>{children}</main>
          </ThemeProvider>
        </MovieDataComponent>
      </Internationalization>
    </>
  );
};

export default PrimaryLayout;
