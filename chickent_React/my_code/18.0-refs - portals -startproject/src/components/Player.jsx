// Dòng này "gọi" React và yêu cầu nó cung cấp một công cụ đặc biệt là "useState".
// useState là một "hook", dùng để quản lý "trạng thái" (state) của component.
import { useState } from "react";

// Dòng này định nghĩa và xuất (export) một "component" tên là Player.
// Component này là một hàm và sẽ trả về các thẻ HTML để hiển thị lên màn hình.
export default function Player() {
  // Dòng này tạo ra một "trạng thái" (state) tên là "enteredPlayerName".
  // enteredPlayerName là giá trị hiện tại của state, ban đầu là null.
  // setEnteredPlayerName là một HÀM để cập nhật giá trị đó sau này.
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);
  
  // Tương tự, dòng này tạo ra một state tên là "submitted".
  // submitted ban đầu là false. Nó dùng để kiểm tra xem nút đã được nhấn hay chưa.
  const [submitted, setSubmitted] = useState(false);

  // Đây là một hàm "xử lý sự kiện" (event handler) cho ô input.
  // Hàm này được gọi mỗi khi người dùng gõ phím vào ô input.
  function handleChange(event) {
    // Dòng này đặt lại state submitted về false.
    // Tức là mỗi khi người dùng gõ lại, mình coi như chưa bấm nút "set Name".
    setSubmitted(false);
    
    // Dòng này cập nhật giá trị của state enteredPlayerName
    // bằng giá trị mà người dùng đang gõ trong ô input.
    setEnteredPlayerName(event.target.value);
  }

  // Đây là hàm xử lý sự kiện khi người dùng nhấn vào nút.
  function handleClick() {
    // Dòng này cập nhật state submitted thành true.
    // Điều này báo hiệu là người dùng đã nhấn nút "set Name".
    setSubmitted(true);
  }

  // Toàn bộ code bên trong "return" này là JSX, nó trông giống HTML nhưng có thể lồng logic JavaScript.
  // Nó sẽ được React chuyển đổi thành các thẻ HTML để hiển thị lên trình duyệt.
  return (
    <section id="player">
      {/* Dòng này hiển thị "Welcome" và tên người chơi.
        Đây là một toán tử 3 ngôi (ternary operator):
        - Nếu "submitted" là true, nó sẽ hiển thị giá trị của state enteredPlayerName.
        - Nếu không (là false), nó sẽ hiển thị "No name".
      */}
      <h2>Welcome {submitted ? enteredPlayerName : "No name"}</h2>
      <div>
        {/* Đây là một ô nhập liệu (input) */}
        <input 
          type="text" 
          // Khi giá trị của ô input thay đổi (người dùng gõ), nó sẽ gọi hàm handleChange.
          onChange={handleChange} 
          // Giá trị của ô input luôn được đồng bộ với state enteredPlayerName.
          value={enteredPlayerName || ''} 
        />
        {/* Đây là một nút bấm */}
        <button onClick={handleClick}> set Name</button>
      </div>
    </section>
  );
}