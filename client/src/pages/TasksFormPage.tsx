
import { useForm } from 'react-hook-form'
import  {createTask}  from '../api/Tasks.api'
import  {deleteTask, updateTask, getTask}  from '../api/Tasks.api'
import './TasksFormPage.css'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast'


export function TasksFormPage(){

  interface UserData{
    name: string;
    email: string;
    errors: string;
    title: string;
    description: string;
  }

  const {register, 
    handleSubmit, 
    formState: {
    errors},
    setValue
  } = useForm<UserData>()

  const navigate = useNavigate()
  const params = useParams()
  console.log(params);

  const onSubmit = handleSubmit( async (data:UserData) => {
  //  const res = await createTask(data)
  //  navigate('/tasks')
  //  console.log(res);
  if(params.id){
    updateTask(params.id, data)
    toast.success('Task updated', {
      style:{
        backgroundColor: '#101010',
        color: '#fff'
      }
     })
    console.log('Updating');
    
  }else{
    await createTask(data)
   toast.success('Task created', {
    style:{
      backgroundColor: '#101010',
      color: '#fff'
    }
   })
  }
    
    
  })
  // para utilizar async await en un useEffect hay que hacer otra funcion dentro del useEffect
  useEffect(() => {
   async function loadTask(){
      if(params.id){
        console.log('Getting data');
        const res = await getTask(params.id);
        // console.log(res);
        setValue('title', res.data.title)
        setValue('description', res.data.description)
        
      }
    }
    loadTask()
  },[])

    return (
      <div className='max-w-xl mx-auto '>
      <form onSubmit={onSubmit}>
        <input 
        className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
          type='text'
          placeholder='title'
          {...register('title', { required: true })}
        />
        {errors.title && <span>This field is required</span>}
        <textarea
        className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
        rows={3}
          placeholder='Description'
          {...register('description', { required: true })}
        ></textarea>
        {errors.description && 
          <span>Description is required</span>
        }
        <button 
        className='bg-indigo-600 w-full p-3 rounded-lg block mt-3'
        type='submit'>Save
        </button>
      </form>
      { params.id &&
       <div className='flex justify-end'>
        <button
      className='bg-red-400 w-48 p-3 rounded-lg block mt-3'
      onClick={ async () => {
      const accepted = window.confirm('Are you sure?')
      if(accepted){
        await deleteTask(params.id)
        toast.success('Task deleted', {
          style:{
            backgroundColor: '#101010',
            color: '#C64028'
          }
         })
        navigate('/tasks')
      }
      }}
      >Delete</button>
       </div>
      }
    </div>
    )
  }
  