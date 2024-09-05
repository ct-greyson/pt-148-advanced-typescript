import React, { ReactNode } from "react";

//ReactNode - a type for ANYTHING that React can render
interface NestedComponentProp {
  children: ReactNode;
}

const ParentComponent = ({ children }: NestedComponentProp) => {
  return (
    <>
      <h1>TOP OF PARENT COMPONENT</h1>
        {/* all of the elements/components that we passed in */}
        {children}
      <h1>BOTTOM OF PARENT COMPONENT</h1>
    </>
  );
};

export default ParentComponent;
