import React, { ReactNode } from 'react';

interface IfProps {
  children: ReactNode;
  test: boolean;
}

function If({ children, test }: IfProps) {
   if (test) {
     return ({ children})
   } else {
    return false
   }
}

export default If;
