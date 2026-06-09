import { useNavigate } from "react-router-dom";

function Dashboard() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>דשבורד</h1>
            <p>בחר פעולה:</p>

            <button onClick={() => navigate("/bet")}>
                להמר על משחקים
            </button>

            <button onClick={() => navigate("/my-games")}>
                המשחקים העתידיים שלי
            </button>
        </div>
    );
}

export default Dashboard;