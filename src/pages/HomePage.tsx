import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

interface User {
  id: number;
  name: string;
}

export default function HomePage() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(true);

  

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users',
          { signal }
        );
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (err: any) {
        if (err instanceof Error) {
          if (err.name === 'AbortError') return;
        }
        //only display non-abort errors to user:
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <Navbar />
      {error && <p>{error}</p>}

      {isLoading && (
        <button type='button' className='bg-indigo-500 ...' disabled>
          <span className='relative flex h-3 w-3'>
            <span className='animate-spin absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75'></span>
            <span className='relative inline-flex rounded-full h-3 w-3 bg-sky-500'></span>
          </span>
          Processing...
        </button>
      )}

      <h1>Home Page</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}
