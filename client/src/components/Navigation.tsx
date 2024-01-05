import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className='flex justify-between py-3'>
      <Link to='/tasks'>
      <h1 className='font-bold text-3xl mb-4 m-4'>Tasks App</h1>
      </Link>
      <button className='bg-indigo-500 px-3 py-2 rounded-lg m-4'>
      <Link to='/tasks-create'> Create Task</Link>
      </button>
    </div>
  );
};

export default Navigation;
