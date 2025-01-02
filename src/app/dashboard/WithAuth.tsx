'use client';

import { useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

const WithAuth: React.FC<{ children: ReactNode }> = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get('Authorization');
    if (!token) {
      router.replace('/auth/login');
    }
  }, [router]);

  const token = Cookies.get('Authorization');
  return token ? <>{children}</> : null;
};

export default WithAuth;
