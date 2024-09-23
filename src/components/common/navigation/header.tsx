import { Avatar, Box, Flex, HStack, IconButton, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react';
import { FiBell, FiChevronDown, FiLogOut, FiSettings } from 'react-icons/fi';

const Header = () => {
  return (
    <Flex
      as="header"
      position="fixed"
      top={0}
      left="250px"
      right={0}
      height="60px"
      bg="white"
      borderBottom="1px solid"
      borderBottomColor="gray.200"
      px={6}
      alignItems="center"
      justifyContent="space-between"
      boxShadow="md"
    >

      <Text fontSize="xl" fontWeight="bold">
        Dashboard
      </Text>


      <HStack spacing={4}>

        <IconButton
          aria-label="Notifications"
          icon={<FiBell />}
          variant="ghost"
          fontSize="xl"
        />


        <Menu>
          <MenuButton as={HStack} spacing={2} cursor="pointer">
            <Avatar name="Admin User" size="sm" />
            <Text fontWeight="medium">Admin User</Text>
            <FiChevronDown />
          </MenuButton>
          <MenuList>
            <MenuItem icon={<FiSettings />}>Configurações</MenuItem>
            <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Flex>
  );
};

export default Header;
