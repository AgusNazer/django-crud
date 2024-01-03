import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
      <Link to='/tasks'>
      <h1>Tasks App</h1>
      </Link>
      <Link to='/tasks-create'> Create Task</Link>
    </div>
  );
};

export default Navigation;
