import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const useAuth = (allowedRoles: string[]) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') return;

    const userRole = session?.user?.role;
    if (!session || !userRole || !allowedRoles.includes(userRole)) {
      router.push('/auth/login');
    }
  }, [session, status, allowedRoles, router]);

  return { session };
};

export default useAuth;
