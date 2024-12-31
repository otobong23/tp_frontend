'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/router';
// import { FC } from 'react';
import Cookies from 'js-cookie';

const WithAuth = <P extends object>(WrappedComponent: React.FC<P>): React.FC<P> => {
  const ComponentWithAuth: React.FC<P> = (props) => {
    const router = useRouter();

    useEffect(() => {
      const token = Cookies.get('Authorization');
      if (!token) {
        router.replace('/login');
      }
    }, [router]);

    const token = Cookies.get('Authorization');
    return token ? <WrappedComponent {...props} /> : null;
  };

  return ComponentWithAuth;
};

export default WithAuth;
