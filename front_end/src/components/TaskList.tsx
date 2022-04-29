import React, { ReactNode } from 'react';

interface TaskListProps {
  children?: ReactNode;
  list: any[];
  handleRemove: any;
  handleMarkAsDone: any;
  handleMarkAsPending: any;
}

function TaskList({ children, list, handleRemove, handleMarkAsDone, handleMarkAsPending }: TaskListProps) {
  const renderRows = () => {
    const group = list || [];
    console.log(group);
     return group.map( task => (
        <tr className="border-2" key={task._id}>

          <td  className={task.done ? 'markAsDone' : ''}>{task.description}</td>
          <td className="border-2  text-center ">
            
            <button  className="m-2 bg-emerald-800 rounded"  onClick={() => handleMarkAsDone(task)} hide={task.done}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>  
            </button>

            <button className="m-2 bg-yellow-500 rounded"  onClick={() => handleMarkAsPending(task)} hide={!task.done}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>

              
           <button className="m-2 bg-red-600 rounded" onClick={() => handleRemove(task)} hide={!task.done}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
           </button>

          </td>
        </tr>
     ))
  }

  return (
    <>
    <table className="w-full">
       <thead>
          <tr>
            <th>Descrição</th>
            <th>Ações</th>
          </tr>
       </thead>
       <tbody>
          {renderRows()}
       </tbody>
    </table>
    </>
  );
}

export default TaskList;
