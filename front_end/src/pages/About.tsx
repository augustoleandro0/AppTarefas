import React, { ReactNode } from 'react';

interface AboutProps {
  children?: ReactNode;
}

function About({ children }: AboutProps) {
  return (
    <>
      <h1>About</h1>
      {children}
    </>
  );
}

export default About;
