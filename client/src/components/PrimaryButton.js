import React from "react";

const PrimaryButton = ({ children }) => {
  return (
    <button className="btn btn-primary border-0 bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC]">
      {children}
    </button>
  );
};

export default PrimaryButton;
