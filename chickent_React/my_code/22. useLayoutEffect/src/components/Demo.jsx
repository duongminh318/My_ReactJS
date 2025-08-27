// Dòng này "gọi" React và yêu cầu nó cung cấp các công cụ cần thiết:
// - useState: để tạo và quản lý "trạng thái" (state).
// - useEffect: để thực hiện các tác vụ "phụ" sau khi component render.
// - useLayoutEffect: một hook tương tự useEffect nhưng chạy đồng bộ (hiện đang được comment lại).
import { useState, useEffect, useLayoutEffect } from "react";

// Định nghĩa một component tên là Demo.
export default function Demo() {
  // Tạo một state tên là `count` với giá trị ban đầu là 0.
  // `count` là giá trị hiện tại, `setCount` là hàm để cập nhật giá trị đó.
  const [count, setCount] = useState(0);

  // Dòng này sử dụng `useEffect` để "lắng nghe" sự thay đổi của state `count`.
  useEffect(() => {
    // Bên trong `useEffect`, chúng ta kiểm tra giá trị của `count`.
    // Nếu `count` lớn hơn 2...
    if (count > 2) {
      // ...thì chúng ta sẽ đặt lại giá trị của `count` về 0.
      // Việc gọi `setCount` ở đây sẽ gây ra một lần re-render nữa.
      setCount(0);
    }
  }, [count]); // Mảng phụ thuộc [count] có nghĩa là: "Hãy chạy lại hiệu ứng này mỗi khi giá trị của `count` thay đổi".

  // Đây là hàm xử lý sự kiện khi người dùng nhấn vào nút.
  const handleCount = () => {
    // Khi nhấn nút, giá trị của `count` sẽ được tăng lên 1.
    // Việc này sẽ làm component re-render và cũng kích hoạt `useEffect` ở trên chạy lại.
    setCount(count + 1);
  };

  // Phần này trả về giao diện của component.
  return (
    <div>
      {/* Hiển thị giá trị hiện tại của state `count` */}
      <h1>{count}</h1>
      {/* Khi click vào nút, nó sẽ gọi hàm handleCount */}
      <button onClick={handleCount}>Count</button>
    </div>
  );
}