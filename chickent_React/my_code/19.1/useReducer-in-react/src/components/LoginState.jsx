import { useState } from "react";

export default function LoginState(){
    // tạo biến cho biết đã login chưa
    const[isLoggedIn, setisLoggedIn] = useState(false);
    // function handleLogin(){
    //     setisLoggedIn(true);
    // }

    // function handleLogout(){
    //     setisLoggedIn(false);
    // }

    return(
        <div>
            <h2>{isLoggedIn? "Chào mừng xxx": "Thím chưa đăng nhập"}</h2>
            <button onClick={()=>{setisLoggedIn(true);}}> Đăng nhập</button>
            <button onClick={()=>{setisLoggedIn(false);}}> Đăng xuất</button>
        </div>
    )
}