
import api from "./api";

export const register = (data) => {
    return api.post("/auth/register", data) //כדי שה-controler  לא יהיה עמוס, נעשה קידומת לנתיב שנדע במה השתמשנו, במקרה זה נתיב לבדיקת תקינות

}
