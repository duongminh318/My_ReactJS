import { useState } from "react";
// import hook useState của React để quản lý state (trạng thái) trong component
// import classes from "./header.module.css"
import { styled } from "styled-components";

const ControlContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
`;

const Lable= styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #2d00f3ff;
`;

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
          <ControlContainer>
            <p>
              <Lable className={`${emailNotValid ? "invalid" : ""}`}>Email</Lable>
              <input
                type="email"
                style={{
                  // thay đổi động style theo điều kiện
                  backgroundColor: emailNotValid ? "red" : "yellow",
                }}

                onChange={(event) => handleInputChange("email", event.target.value)}
              // Mỗi khi input thay đổi => gọi handleInputChange cập nhật state
              />
            </p>
            <p>
              <Lable className={`${passwordNotValid ? "invalid" : ""}`}>Password</Lable>
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
      </ControlContainer>


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
