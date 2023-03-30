import React from 'react';

const Task = ({title, description, index, deleteTask}) => {
  return (
    < div className="task">
        <div>
        <h3>{title}</h3>
     <p>{description}</p>
        </div>
    <button onClick={()=>deleteTask(index)}>-</button>
    </div>
  );
};

export default Task;
