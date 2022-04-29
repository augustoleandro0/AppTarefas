import React, { ReactNode } from 'react';
import Buttom from './Buttom';

interface formProps{
  handleAdd:() => void;
  description?: string;
  handOnChange: any;
  placeholder: string;

}

function Form({handleAdd, description, handOnChange, placeholder}: formProps) {


  return (
    <>
     
      <form className="flex m-4 p-4 focus:shadow-outline relative rounded-md shadow-sm">
        { <input className=" w-full form-input h-10 px-3 mb-2 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" placeholder={placeholder} value={description}  onChange={handOnChange} /> }
        <div className="ml-2 p-3">
          <Buttom onClick={handleAdd}/>
       
        </div>
      </form>
  
    </>
  );
}

export default Form;
