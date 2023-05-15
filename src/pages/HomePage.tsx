import Navbar from '../components/Navbar';
import useUsers from '../hooks/useUsers';

export default function HomePage() {
  const { users, error, isLoading } = useUsers();

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
