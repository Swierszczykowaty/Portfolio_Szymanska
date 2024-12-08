import React from "react";

type WrapperProps = {
  children: React.ReactNode;
};

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <div className="px-4 sm:px-8 lg:px-16 xl:px-24 pt-[120px]">
      {children}
    </div>
  );
};

export default Wrapper;
