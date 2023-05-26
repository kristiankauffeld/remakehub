import { useEffect, useState } from 'react';

type FetchFunction<T> = () => { request: Promise<T[]>; cancel: () => void };

const useData = <T>( fetchFunction: FetchFunction<T> ): { data: T[]; error: string; isLoading: boolean; cancel: () => void } => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const { request, cancel } = fetchFunction();

    request.then((responseData) => {
        setData(responseData);
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof Error && error.name === 'AbortError') return;
        setError(error.message);
        setLoading(false);
      });

    return () => cancel();
  }, []);

  return { data, error, isLoading, cancel: () => {} };
};

export default useData;
