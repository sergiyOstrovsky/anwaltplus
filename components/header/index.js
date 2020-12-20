// icons
import * as I from '../../icons';
// ui
import { Img, Box, Flex, Header, StyledLink } from '../../ui';
// ///////////////////////////////////////////////////////

const HeaderComponent = ({ isMenuOpened, setIsOpenedMenu, handleGoToHomePage }) => (
  <Header>
    <Flex
      mx="auto"
      p="10px 20px"
      alignItems="center"
      justifyContent="space-between"
    >
      <Img
        width={100}
        height={100}
        src="/logo.svg"
        cursor="pointer"
        onClick={handleGoToHomePage}
      />
      <Flex>
        <Box display={['none', 'block', 'block']}>
          <Flex alignItems="center">
            <Box mr={10}>
              {I.phone()}
            </Box>
            <StyledLink color="#004187" href="tel:+380676760604">+38 (067) 676 06 04</StyledLink>
          </Flex>
          <Flex mt={20} alignItems="center">
            <Box mr={10}>
              {I.phone()}
            </Box>
            <StyledLink color="#004187" href="tel:+380636760604">+38 (063) 676 06 04</StyledLink>
          </Flex>
        </Box>
        {
          isMenuOpened === false &&
          <Flex
            p={10}
            ml={50}
            width={120}
            cursor="pointer"
            alignItems="center"
            border="1px solid #413189"
            justifyContent="space-between"
            onClick={() => setIsOpenedMenu(true)}
          >
            <Box height="max-content" color="#5d5d5d" fontWeight={500}>
              MENU
            </Box>
            <Box>
              {I.menu()}
            </Box>
          </Flex>
        }
        {
          isMenuOpened && <Box ml={50} width={150} />
        }
      </Flex>
    </Flex>
  </Header>
);

export default HeaderComponent;
