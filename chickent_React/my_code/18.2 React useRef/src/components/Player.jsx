// 1. Dòng này "gọi" React và yêu cầu nó cung cấp 2 công cụ:
//    - "useState": dùng để quản lý trạng thái.
//    - "useRef": dùng để tạo một "tham chiếu" (reference) đến một thẻ HTML.
import { useState, useRef } from "react";

// 2. Dòng này định nghĩa và xuất (export) một "component" tên là Player.
export default function Player() {
  // 3. Dòng này tạo một "tham chiếu" rỗng tên là "playerName".
  //    Tham chiếu này sẽ "dính" vào một thẻ HTML nào đó trong component.
  const playerName = useRef();

  // 4. Dòng này tạo một trạng thái (state) tên là "enteredPlayerName".
  //    Giá trị ban đầu của nó là một chuỗi rỗng "".
  //    Đây là state sẽ được dùng để hiển thị tên người chơi sau này.
  const [enteredPlayerName, setEnteredPlayerName] = useState("");

  // 5. Đây là hàm xử lý sự kiện khi người dùng nhấn vào nút.
  function handleClick() {
    // 6. Dòng này chính là "điểm mấu chốt" của useRef.
    //    - playerName là tham chiếu mà chúng ta đã tạo.
    //    - .current sẽ trỏ tới chính thẻ HTML mà nó được gán.
    //    - .value sẽ lấy giá trị hiện tại của thẻ input đó.
    //    Cuối cùng, nó cập nhật state "enteredPlayerName" bằng giá trị lấy được.
    setEnteredPlayerName(playerName.current.value);
  }

  // 7. Đây là phần giao diện của component.
  return (
    <section id="player">
      {/* 8. Dòng này hiển thị "Welcome" và tên người chơi.
          - Nó kiểm tra xem "enteredPlayerName" có rỗng không.
          - Nếu có (người dùng đã nhập tên), nó hiển thị tên đó.
          - Nếu không, nó hiển thị "No name".
      */}
      <h2>Welcome {enteredPlayerName ? enteredPlayerName : "No name"}</h2>
      <div>
        {/* 9. Đây là ô nhập liệu (input) */}
        <input
          type="text"
          // 10. Dòng này "gắn" tham chiếu "playerName" vào thẻ input.
          //     Nhờ vậy, chúng ta có thể truy cập trực tiếp thẻ input này bằng "playerName.current".
          ref={playerName}
        />
        {/* 11. Đây là nút bấm, khi được nhấn sẽ gọi hàm handleClick. */}
        <button onClick={handleClick}> set Name</button>
      </div>
    </section>
  );
}