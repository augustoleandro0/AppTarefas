import React, { ReactNode } from 'react';

interface HeaderProps {
  children?: ReactNode;
  name: string;
  small: string;
}

function Header({ children,name,small }: HeaderProps) {
  return (
    <>
      <header className="p-5 bg-slate-100 border-b-2 border-emerald-800">
        <h2>{name} <small>{small}</small></h2>
      </header>
      {children}
    </>
  );
}

export default Header;
