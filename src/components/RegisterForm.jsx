import {useState} from "react";
import {register} from "../service/authApi.js";

function RegisterForm() {
const [ username, setUsername ] = useState("");
const [ password, setPassword ] = useState("");
const [email, setEmail] = useState("");

const [ message, setMessage ] = useState(" ");
// --- תוספת: משתנה שיעזור לנו לצבוע את ההודעה בירוק (הצלחה) או אדום (שגיאה) ---
    const [isSuccess, setIsSuccess] = useState(false);
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
        setMessage("");

        // כאן שינינו את השם ל-passwordHash כדי שיתאים ב-100% ל-User.java החדש בשרת
        const data = {
            username: username,
            passwordHash: password, // שלח את המשתנה password תחת המפתח passwordHash
            email: email
        };

        register(data).then(response => {
            setIsSuccess(true);
            setMessage(response.data); // השרת מחזיר מחרוזת "המשתמש נרשם בהצלחה!"

            setUsername("");
            setPassword("");
            setEmail("");
        })
            .catch(error => {
                console.log(error);
                setIsSuccess(false);
                const serverErrorMessage = error.response?.data || "הרשמה נכשלה, אנא נסה שוב.";
                setMessage(serverErrorMessage);
            })
    }






    return(
        <div>
    <form onSubmit={handleRegister}>
            <h2> הרשמה למערכת </h2>
            <input
                type = "text"
                value={ username }
                placeholder = "Enter username"
                onChange={ (e) => setUsername(e.target.value) }
               />
            <br/>

            <input
            type = "password"
            value={ password }
            placeholder = "Enter password"
            onChange={ (e) => setPassword(e.target.value) }/>
<br/>
            <input
                type = "email"
                value={ email }
                placeholder = "Enter email"
                onChange={ (e) => setEmail(e.target.value) }/>
<br/>
            <button
                disabled={ validation() }
                type="submit">
                Register
            </button>



        </form>
        <div>
    {/* הצגת הודעת הצלחה או שגיאה למשתמש */}
    {message&&(
        <p>{message}</p>
    )}
        </div>
        </div>
    )
}
export default RegisterForm;