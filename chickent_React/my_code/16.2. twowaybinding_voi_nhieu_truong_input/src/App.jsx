import { useState } from 'react'
import './App.css'

function App() {

  // useState hook để tạo state 'user' là một object chứa 'fullName' và 'email'. Giá trị khởi tạo là một object rỗng.
  const [user, setUser] = useState({ fullName: "", email: "" });

  // Hàm 'handleChange' được gọi mỗi khi giá trị của input thay đổi.
  const handleChange = (event) => {
    // Lấy 'name' và 'value' từ event.target (element đã gây ra event).
    const { name, value } = event.target;
    // Cập nhật state 'user' bằng cách sử dụng setUser.
    setUser((prevUser) => ({
      // Sử dụng spread operator (...) để sao chép các giá trị hiện tại của 'prevUser'.
      ...prevUser,
      // Cập nhật giá trị của property có 'name' tương ứng với 'value' mới.
      [name]: value,
    }));
    // trả về name và value
    return { name, value };
  }

  return (
    <>
      <div>
        {/* nhập dữ liệu vào */}
        <h2>Mời thím cập nhập thông tin cá nhân</h2>
        <lable>
          Họ và tên:
          {/* Input text để nhập họ và tên. Giá trị được liên kết với user.fullName và onChange gọi handleChange */}
          <input type='text' name='fullName' value={user.fullName} onChange={handleChange} />
        </lable>
        <br />
        <lable>
          Email:
          {/* Input email để nhập email. Giá trị được liên kết với user.email và onChange gọi handleChange */}
          <input type='email' name='email' value={user.email} onChange={handleChange} />
        </lable>
        <br />

        {/* hiển thị ra */}
        <h3>Thông tin đã nhập : </h3>
        {/* Hiển thị họ và tên đã nhập */}
        <p>Họ tên thím mới nhập là: {user.fullName}</p>
        {/* Hiển thị email đã nhập */}
        <p>Email thím mới nhập là: {user.email}</p>
      </div>


    </>
  )
}

export default App
