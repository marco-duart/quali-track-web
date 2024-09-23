import { Box, Flex } from '@chakra-ui/react';
import Sidebar from '../../../components/common/navigation/sidebar';
import Header from '../../../components/common/navigation/header';
import { ReactNode } from 'react';

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Flex>
      <Sidebar />
      <Box ml="250px" flex="1" minHeight="100vh">
        <Header />
        <Box mt="60px" p={6}>
          {children}
        </Box>
      </Box>
    </Flex>
  );
};

export default DashboardLayout;
