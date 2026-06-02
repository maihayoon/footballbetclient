import {useState} from "react";
import {register} from "../service/authApi.js";

function RegisterForm() {
const [ username, setUsername ] = useState("");
const [ password, setPassword ] = useState("");
const [email, setEmail] = useState("");

//const [ message, setMessage ] = useState(" ");

// קריאת API GET ןקיראת POST



    const usernameRegex = (value) =>{
        const checkUserName = /^[A-Za-z0-9]+$/;
        return checkUserName.test(value.trim());
    }

  const passwordRegex = (value) =>{
        const checkPassword = /^[A-Za-z!@#*0-9]{2,10}$/;
        return checkPassword.test(value.trim());
  }

  const emailRegex = (value) =>{
        const checkEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        return checkEmail.test(value.trim());
  }

  const validation=() =>{
        let isValid = false;
        if(!usernameRegex(username)){
            isValid = true;
        }
        if(!passwordRegex(password)){
            isValid = true;
        }
        if(!emailRegex(email)){
            isValid = true;
        }
        return isValid;
  }

    const handleRegister = (e) => {
        e.preventDefault();
        const data= {username, password, email};

        register (data).then(response => {
           if(response.data.success){
                }
       })
           .catch(error => {
                console.log(error);
           })
        }






    return(
        <form onSubmit={handleRegister}>
            <input
                type = "text"
                value={ username }
                placeholder = "Enter username"
                onChange={ (e) => setUsername(e.target.value) }
               />

            <input
            type = "password"
            value={ password }
            placeholder = "Enter password"
            onChange={ (e) => setPassword(e.target.value) }/>

            <input
                type = "email"
                value={ email }
                placeholder = "Enter email"
                onChange={ (e) => setEmail(e.target.value) }/>

            <button
                disabled={ validation() }
                type="submit">
                Register
            </button>



        </form>
    )
}
export default RegisterForm;