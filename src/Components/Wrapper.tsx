import React from "react";

type WrapperProps = {
  children: React.ReactNode;
};

const wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <div className="mx-6 sm:mx-10 md:mx-16 lg:mx-24 xl:mx-32 2xl:mx-72 ">
      {children}
    </div>
  );
};

export default wrapper;
