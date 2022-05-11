import { createTheme, ThemeProvider } from '@mui/material/styles';
import Head from 'next/head';
import React, { ReactElement } from 'react';
import TopMenu, { MenuItem } from '../../menus/top/TopMenu';
import styles from './PrimaryLayout.module.css';

export interface IPrimaryLayout {
  children: ReactElement;
}

const items: MenuItem[] = [
  {
    label: 'Inicio',
    to: '/',
  },
  {
    label: 'Nosotros',
    to: '/about',
  },
  {
    label: 'Buscar',
    to: '/search',
  },
];

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
      <ThemeProvider theme={darkTheme}>
        <TopMenu menuItems={items} />
        <div className={styles.headerSeparator}></div>
        <main className={styles.main}>{children}</main>
      </ThemeProvider>
    </>
  );
};

export default PrimaryLayout;
