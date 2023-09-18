import {useEffect, useState} from "react";
import {Message} from "./Message.tsx";

interface User{
    username:string,
    email:string
}


export const SimpleForm = () => {
  const [formState, setFormState] = useState<User>({
    username:"",
    email:""
  });

  const {username, email} = formState;

  const handleInpuntChange = ({target}: React.ChangeEvent<HTMLInputElement>)=>{
    const {name, value} = target;

    setFormState({
      ...formState,
      [name]: value
    });
  };

  useEffect(() => {
    // console.log("useEffect called");
  },[]);

  useEffect(() => {
    // console.log("username changed");
  },[username]);

  useEffect(() => {
    // console.log("email changed");
  },[email]);

  return (
    <>
      <h1>Formulario simple</h1>
      <hr/>

      <input
        type="text" className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={(e)=>handleInpuntChange(e)}
      />

      <input
        type="email" className="form-control mt-2"
        placeholder="Correo"
        name="email"
        value={email}
        onChange={(e)=>handleInpuntChange(e)}
      />

      {
        username === "ruprosperi" && <Message/>
      }
    </>
  );
};

