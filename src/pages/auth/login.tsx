import { signIn } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { Box, Button, Input, FormLabel, FormControl } from '@chakra-ui/react';

const LoginPage = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    await signIn('credentials', {
      redirect: true,
      email: data.email,
      password: data.password,
      callbackUrl: '/dashboard',
    });
  };

  return (
    <Box maxW="sm" mx="auto" mt={10}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" {...register('email')} />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Password</FormLabel>
          <Input type="password" {...register('password')} />
        </FormControl>

        <Button mt={4} colorScheme="blue" type="submit">
          Login
        </Button>
      </form>
    </Box>
  );
};

export default LoginPage;
