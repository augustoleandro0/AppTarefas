import React, { Children, ReactNode, useState } from 'react';
import If from './If';

interface buttonProps{
  children?: ReactNode;
  onClick?: any
}


function Buttom({ children, onClick}: buttonProps) {

  const [Visible, setVisible] = useState<'hide' | 'show'>()
  return (
    <>
      <button onClick={onClick}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
          </svg>
        </button>
        
    </>
  );
}

export default Buttom;
