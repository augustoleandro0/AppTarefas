import React, { ReactNode } from 'react';

import {done, remove, pending} from './Icons'

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
     return group.map( task => (
        <tr className="border-2 text-center" key={task._id}>

          <td className={task.done ? 'markAsDone' : ''}>{task.description}</td>
          <td className="border-2  text-center ">
            
            <button className="m-2 bg-emerald-800 rounded"  onClick={() => handleMarkAsDone(task)}>
              {done}
            </button>

            <button className="m-2 bg-yellow-500 rounded"  onClick={() => handleMarkAsPending(task)}>
              {pending}
            </button>

              
           <button className="m-2 bg-red-600 rounded" onClick={() => handleRemove(task)}>
              {remove}
           </button>

          </td>
        </tr>
     ))
  }

  return (
    <>
    <table className="w-full ">
       <thead>
          <tr>
            <th>Descrição</th>
            <th>Ações</th>
          </tr>
       </thead>
       <tbody className="m-10">
          {renderRows()}
       </tbody>
    </table>
    </>
  );
}

export default TaskList;
