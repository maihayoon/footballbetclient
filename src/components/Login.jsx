import { useState } from "react";
import { login } from "../service/authApi.js";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        setErrorMessage("");

        const data = {
            email: email,
            password: password
        };

        login(data)
            .then(response => {
                setIsSuccess(true);
                setErrorMessage("התחברת בהצלחה למערכת!");
                console.log("Logged in user:", response.data);
                setEmail("");
                setPassword("");

                navigate("/dashboard");
            })
            .catch(err => {
                console.log(err);
                setIsSuccess(false);
                const serverErrorMessage =
                    err.response?.data || "ההתחברות נכשלה, אנא נסה שוב.";
                setErrorMessage(serverErrorMessage);
            });
    };

    return (
        <div>
            <form onSubmit={handleLogin}>
                <h2>התחברות למערכת</h2>

                <input
                    type="email"
                    value={email}
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <br />

                <input
                    type="password"
                    value={password}
                    placeholder="Enter password"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <br />

                <button type="submit">
                    התחברות
                </button>
            </form>

            {errorMessage && (
                <p>{errorMessage}</p>
            )}
        </div>
    );
}

export default Login;