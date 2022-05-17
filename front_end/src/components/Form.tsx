import React, { ReactNode } from 'react';
import Buttom from './Buttom';
import {add, search, clear} from './Icons';

interface formProps{
  handleAdd:() => void;
  description?: string;
  handOnChange: any;
  placeholder: string;
  handleSearch: () => void;
  handClear: () => void;

}

function Form({handleAdd, handClear, handleSearch, description, handOnChange, placeholder}: formProps) {

  const keyHandler = (e: any) => {
    if (e.key === 'Enter') {
        e.shiftKey ? handleSearch() : handleAdd()
    } else if (e.key === 'Escape') {
        handClear()
    }
}
  return (
    <>
     
      <form className="flex m-4 p-4 focus:shadow-outline relative rounded-md shadow-sm">
        { <input className=" w-full form-input h-10 px-3 mb-2 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" placeholder={placeholder} value={description}  onKeyUp={keyHandler} onChange={handOnChange} /> }
        <div className="ml-2 p-3 flex justify-between">
          <Buttom onClick={handleAdd}>
              {add}
          </Buttom>
           <Buttom onClick={handleSearch}>
              {search}
           </Buttom>
           <div className="pt-0.4 ">
              <Buttom onClick={handClear}>
                  {clear}
              </Buttom>
           </div>
       
        </div>
      </form>
  
    </>
  );
}

export default Form;
