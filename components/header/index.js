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
        <StyledLink hoverColor="#004187">+380974473293</StyledLink>
        <StyledLink mt={10} hoverColor="#004187">+380974473293</StyledLink>
      </Box>
    </Flex>
  </Header>
);

export default HeaderComponent;
