import { useEffect } from 'react';
import { useRouter } from 'next/router';

// ----------------------------------------------------------------------

// what is useRouter? https://nextjs.org/docs/api-reference/next/router
//
export default function Index() {
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === '/') {
      router.push('/dashboard/one');
    }
  });

  return null;
}
