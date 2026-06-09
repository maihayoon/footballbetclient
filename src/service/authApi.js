
import api from "./api";
//נתיב להרשמה
export const register = (data) => {
    return api.post("/auth/register", data) //כדי שה-controler  לא יהיה עמוס, נעשה קידומת לנתיב שנדע במה השתמשנו, במקרה זה נתיב לבדיקת תקינות

}
//נתיב להתחברות
export const login = (data) => {
    return api.post("/auth/login", data);
}
