import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { TasksPage } from './pages/TasksPage';
import { TasksFormPage } from './pages/TasksFormPage';
import  Navigation  from './components/Navigation';
import { Toaster } from 'react-hot-toast'
import {Footer }from './components/Footer'

const App: React.FC = () => {
  return (
    <BrowserRouter>
       <div className='container mx-auto'>
       <Navigation />
      <Routes>
        <Route path='/' element={ <Navigate to = '/Tasks' />} />
        <Route path='/tasks' element={<TasksPage />} />
        <Route path='/tasks-create' element={<TasksFormPage />} />
        <Route path='/tasks/:id' element={<TasksFormPage />} />
      </Routes>
      <Toaster/>
      <Footer/>
       </div>
    </BrowserRouter>
  );
}

export default App;
 