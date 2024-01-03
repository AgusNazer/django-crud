import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { TasksPage } from './pages/TasksPage';
import { TasksFormPage } from './pages/TasksFormPage';
import  Navigation  from './components/Navigation';

const App: React.FC = () => {
  return (
    <BrowserRouter>
        <Navigation />
      <Routes>
        <Route path='/' element={ <Navigate to = '/Tasks' />} />
        <Route path='/tasks' element={<TasksPage />} />
        <Route path='/tasks-create' element={<TasksFormPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
 