// icons
import * as I from '../../icons';
// ui
import { Img, Box, Flex, Header, StyledLink } from '../../ui';
// ///////////////////////////////////////////////////////

const HeaderComponent = ({ handleGoToHomePage }) => (
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
        onClick={handleGoToHomePage}
      />
      <Box>
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
    </Flex>
  </Header>
);

export default HeaderComponent;
