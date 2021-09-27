import React from "react";
import NewRegister from "./new_register";
import OldRegister from "./old_register";

const Register = (choice: boolean) => {
  return (
    <div>
      <div>{choice ? <NewRegister /> : <OldRegister />}</div>
    </div>
  );
};

export default Register;
