import React from "react";
import NewRegister from "./NewRegister";
import OldRegister from "./OldRegister";

const Register = (choice: boolean) => {
  return (
    <div>
      <div>{choice ? <NewRegister /> : <OldRegister />}</div>
    </div>
  );
};

export default Register;
