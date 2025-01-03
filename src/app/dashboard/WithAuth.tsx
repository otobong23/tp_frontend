'use client';

import { useEffect, useState, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

const WithAuth: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get('Authorization');
    if (token) {
      setIsAuthenticated(true);
    } else {
      router.replace('/auth/login');
    }
  }, []); // Runs only once on client-side

  if (!isAuthenticated) {
    return null; // Optionally add a loading spinner here
  }

  return <>{children}</>;
};

export default WithAuth;
