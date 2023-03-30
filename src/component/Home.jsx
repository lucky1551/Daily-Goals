import React,{useEffect, useState} from 'react';
import Task from './Task';
  
const Home = () => {
  const initialArr = localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[];
  const [tasks,setTasks] = useState(initialArr);
  const [title,setTitle] = useState("");
  const [description,setDescription] = useState("");
  
  useEffect(() => {
    localStorage.setItem("tasks",JSON.stringify(tasks));
  }, [tasks])
  
  const submithandler =(e)=>{
    e.preventDefault();
     if(title!=="" && description!=="")
    setTasks([...tasks, { title, description }]);
    

    // this will store one previous value. e.g if we going to add three task it will going to store second and third one. So we use "useEffect"
    // localStorage.setItem("tasks",JSON.stringify(tasks));
    setTitle("");
    setDescription("");
  };

  const deleteTask = (index)=>{
const filterArr=tasks.filter((val,i)=>{
  return i!==index;
});
setTasks(filterArr);
  }
  return (
    <div className='container'>
      <form onSubmit={submithandler}>
        <input type="text" placeholder='Title' required='true' value={title} 
        onChange={(e)=>setTitle(e.target.value )}  />
        <textarea placeholder='Description'  required='true'  value={description} 
        onChange={(e)=>setDescription(e.target.value )}></textarea>
        <button type="submit">ADD</button>
       
      </form>
      {
      tasks.map((item,index)=>(
        <Task key={index}
         title={item.title} 
         description={item.description}
         deleteTask={deleteTask} 
         index={index}  />
      ))
       } 
    </div>
  );
};

export default Home