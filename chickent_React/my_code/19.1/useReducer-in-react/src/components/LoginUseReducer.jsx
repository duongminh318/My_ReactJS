// step 1 : import
import { useReducer } from "react";

// step 2: Khởi tạo giá trị ban đầu
const initState = false;
// step 3: khao báo action
const LOGIN = "login";
const LOGOUT = "logout";

// step 4: khai báo function reducer (sẽ làm gì với từng action)
function reducerLogin(state, action) {
    switch (action) {
        case LOGIN:
            return true;
        case LOGOUT:
              return false;
        default:
            throw new Error("Action không hợp lệ");

    }
}

export default function LoginUseReducer() {
    // const[isLoggedIn, setisLoggedIn] = useState(false);
    const [isLoggedIn, dispath] = useReducer(reducerLogin, initState)
    return (
        <div>
            <h2>{isLoggedIn ? "Chào mừng xxx" : "Thím chưa đăng nhập"}</h2>
            <button onClick={() => { dispath(LOGIN); }}> Đăng nhập</button>
            <button onClick={() => { dispath(LOGOUT); }}> Đăng xuất</button>
        </div>
    )
}