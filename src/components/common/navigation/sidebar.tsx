import { Box, Flex, Icon, Link, Text, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FiHome, FiUsers, FiBarChart2, FiSettings } from 'react-icons/fi';

const Sidebar = () => {
  const router = useRouter();

  const menuItems = [
    { name: 'Dashboard', icon: FiHome, path: '/dashboard/admin' },
    { name: 'Usuários', icon: FiUsers, path: '/dashboard/users' },
    { name: 'Relatórios', icon: FiBarChart2, path: '/dashboard/reports' },
    { name: 'Configurações', icon: FiSettings, path: '/dashboard/settings' },
  ];

  return (
    <Box
      as="nav"
      position="fixed"
      left={0}
      top={0}
      height="100vh"
      width="250px"
      bg="gray.800"
      color="white"
      px={4}
      py={6}
      boxShadow="lg"
    >
      <VStack spacing={6} align="start">

        <Box mb={8}>
          <Text fontSize="2xl" fontWeight="bold" color="primary.500">
            QualiTrack
          </Text>
        </Box>

        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.path}
            w="full"
            onClick={() => router.push(item.path)}
            _hover={{ textDecoration: 'none', bg: 'gray.700' }}
            py={3}
            px={4}
            borderRadius="lg"
            display="flex"
            alignItems="center"
          >
            <Icon as={item.icon} mr={3} boxSize={5} />
            <Text>{item.name}</Text>
          </Link>
        ))}
      </VStack>
    </Box>
  );
};

export default Sidebar;
