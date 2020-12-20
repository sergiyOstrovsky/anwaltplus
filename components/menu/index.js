// icons
import * as I from '../../icons';
// ui
import { Box, Menu, Flex,  } from '../../ui';
// ///////////////////////////////////////////////////////

const MenuComponent = ({ router, width, setIsOpenedMenu }) => (
  <Menu width={width}>
    <Flex
      p="1rem"
      width="100%"
      cursor="pointer"
      alignItems="center"
      border="1px solid white"
      justifyContent="center"
      onClick={() => setIsOpenedMenu(false)}
    >
      <Box cursor="pointer" mr={30} height="max-content" color="white" fontWeight={500}>
        MENU
      </Box>
      <Box>
        {I.close()}
      </Box>
    </Flex>
    <Box cursor="pointer" p="1rem" color="white" borderBottom="1px solid white" onClick={() => router.push('/')}>
      HOME
    </Box>
    <Box cursor="pointer" p="1rem" color="white" borderBottom="1px solid white" onClick={() => router.push('/services')}>
      SERVICES
    </Box>
    <Box cursor="pointer" p="1rem" color="white" borderBottom="1px solid white" onClick={() => router.push('/contacts')}>
      CONTACTS
    </Box>
  </Menu>
);

export default MenuComponent;