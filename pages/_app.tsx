import type { AppProps } from 'next/app';
import Internationalization from '../src/data-components/Internationalization';
import '../styles/globals.css';
import { NextPageWithLayout } from './page';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <Internationalization>
      <Component {...pageProps} />
    </Internationalization>
  );
}

export default MyApp;
