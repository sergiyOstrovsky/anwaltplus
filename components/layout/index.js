import Head from 'next/head';
// components
import FooterComponent from '../footer';
import HeaderComponent from '../header';
import ContactWithMap from '../contact';
// ui
import { PageWrapper } from '../../ui';
// //////////////////////////////////////////////////

const Layout = ({ title, router, loading, children }) => {
  const { push, route } = router;
  const handleGoToHomePage = () => push('/');

  return (
    <PageWrapper>
      <Head>
        <title>{title}</title>
      </Head>
      <HeaderComponent handleGoToHomePage={handleGoToHomePage} />
      {children}
      <ContactWithMap />
      <FooterComponent />
    </PageWrapper>
  );
};

export default Layout;
