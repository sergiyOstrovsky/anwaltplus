import Head from 'next/head';
import { useState } from 'react';
// components
import MenuComponent from '../menu';
import FooterComponent from '../footer';
import HeaderComponent from '../header';
import ContactWithMap from '../contact';
// ui
import { PageWrapper } from '../../ui';
// //////////////////////////////////////////////////

const Layout = ({ title, router, loading, children }) => {
  const { push, route } = router;
  const handleGoToHomePage = () => push('/');
  const [isMenuOpened, setIsOpenedMenu] = useState(false);

  return (
    <PageWrapper>
      <Head>
        <title>{title}</title>
      </Head>
      <HeaderComponent
        isMenuOpened={isMenuOpened}
        setIsOpenedMenu={setIsOpenedMenu}
        handleGoToHomePage={handleGoToHomePage} />
      {children}
      <ContactWithMap />
      <FooterComponent />
      <MenuComponent router={router} width={isMenuOpened ? '280px': '0px'} setIsOpenedMenu={setIsOpenedMenu} />
    </PageWrapper>
  );
};

export default Layout;
