import React from "react"
import Header from  "../../Header"
import NewRegister from "./NewRegister"
import OldRegister from "./OldRegister"

const Register = (choice: boolean) => {
    return(
        <div>
            <Header />
            <div>
              if (choice:boolean) {
                <NewRegister />
              }else{
                <OldRegister />
              }
            </div>
        </div>
    )
}

export default Register;