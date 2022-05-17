import React, { ReactNode, useState } from 'react';
import If from './If';


interface buttonProps{
  children?: ReactNode;
  onClick?: any;
}


function Buttom({ children, onClick, }: buttonProps) {

  const [Visible, setVisible] = useState<'hide' | 'show'>()
  return (
    <>
      <button onClick={onClick}>
          {children}
      </button>
     
    </>
  );
}

export default Buttom;
