import { useState } from "react"; 
// import hook useState của React để quản lý state (trạng thái) trong component

export default function AuthInputs() {
  // Khai báo 3 state:
  const [enteredEmail, setEnteredEmail] = useState(""); 
  // lưu email mà user nhập vào

  const [enteredPassword, setEnteredPassword] = useState(""); 
  // lưu password mà user nhập vào

  const [submitted, setSubmitted] = useState(false); 
  // lưu trạng thái: đã bấm nút "Sign In" chưa

  function handleInputChange(identifier, value) {
    // Hàm xử lý thay đổi input
    // identifier = "email" hoặc "password"
    if (identifier === "email") {
      setEnteredEmail(value); // cập nhật email
    } else {
      setEnteredPassword(value); // cập nhật password
    }
  }

  function handleLogin() {
    // Khi bấm nút Sign In thì chuyển trạng thái submitted thành true
    setSubmitted(true);
  }

  // Logic validate:
  const emailNotValid = submitted && !enteredEmail.includes("@"); 
  // Nếu đã submit và email không chứa ký tự "@", thì email không hợp lệ

  const passwordNotValid = submitted && enteredPassword.trim().length < 6; 
  // Nếu đã submit và password sau khi bỏ khoảng trắng < 6 ký tự => không hợp lệ

  return (
    <div id="auth-inputs">
      <div className="controls">
        <p>
          <label className={`${emailNotValid?"invalid": ""}`}>Email</label>
          <input
            type="email"
            className={emailNotValid ? "invalid" : undefined} 
            // Nếu email không hợp lệ => thêm class "invalid", để CSS báo lỗi
            onChange={(event) => handleInputChange("email", event.target.value)} 
            // Mỗi khi input thay đổi => gọi handleInputChange cập nhật state
          />
        </p>
        <p>
          <label className={`${passwordNotValid?"invalid": ""}`}>Password</label>
          <input
            type="password"
            className={passwordNotValid ? "invalid" : undefined} 
            // Nếu password không hợp lệ => thêm class "invalid"
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            } 
            // Khi gõ password => cập nhật state
          />
        </p>
      </div>
      <div className="actions">
        <button type="button" className="text-button">
          Create a new account
          {/* Nút tạo account mới (chưa có logic) */}
        </button>
        <button className="button" onClick={handleLogin}>
          Sign In
          {/* Khi click => gọi handleLogin => setSubmitted(true) */}
        </button>
      </div>
    </div>
  );
}
