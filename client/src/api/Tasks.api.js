
import axios from 'axios'

const getAllTasks = () => {
  
  return axios.get('http://localhost:8000/tasks/api/v1/tasks/')

}

export default getAllTasks