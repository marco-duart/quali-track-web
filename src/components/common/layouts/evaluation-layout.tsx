import { ReactNode } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

interface EvaluationLayoutProps {
  children: ReactNode;
}

const EvaluationLayout = ({ children }: EvaluationLayoutProps) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === 'loading') return <p>Loading...</p>;
  if (!session) {
    router.push('/auth/login');
    return null;
  }

  return (
    <Box padding="4" maxWidth="1200px" margin="0 auto">
      <Heading mb={6}>Monitorias</Heading>
      
      <Box>{children}</Box>
    </Box>
  );
};

export default EvaluationLayout;
