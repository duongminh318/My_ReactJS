// Dòng này "gọi" React và yêu cầu nó cung cấp các công cụ cần thiết:
// - `useState`: để tạo và quản lý trạng thái của component.
// - `useEffect`: để thực hiện các tác vụ "phụ" sau khi component đã được render.
import React, { useState, useEffect } from 'react';

// Định nghĩa một component tên là DemoNoDeps.
// "NoDeps" (No Dependencies) có nghĩa là không có mảng phụ thuộc.
function DemoWithDeps() {
    // Tạo một state tên là `count` với giá trị ban đầu là 0.
    const [count, setCount] = useState(0);

    // Dòng này sử dụng `useEffect`.
    // Vì không có mảng phụ thuộc [] ở cuối, hàm này sẽ chạy sau MỌI LẦN render của component.
    useEffect(() => {
        // Dòng này sẽ in ra console mỗi khi hiệu ứng này chạy.
        console.log('useEffect  dependencies chạy khi count đổi:', count);
        // Dòng này thay đổi tiêu đề của trang web trên trình duyệt.
        // document.title = `Count: ${count}`;
          const fetchData = async () => {
            console.log("Bắt đầu fetch");

            try {
                // Dùng await để chương trình "chờ" cho đến khi fetch xong.
                const response = await fetch('https://fakestoreapi.com/products');
                // Dùng await để "chờ" cho đến khi chuyển sang json xong.
                const data = await response.json();

                // Các dòng log dưới đây sẽ chỉ chạy SAU KHI có dữ liệu.
                console.log(data);
                console.log("Chương trình đã fetch xong và có dữ liệu");
            } catch (error) {
                console.error("Lỗi khi fetch:", error);
            }
        }

        // Gọi hàm async vừa tạo.
        fetchData();
    }, [count]); // <--  có mảng phụ thuộc [] ở đây nhưng khôn có giá trị

    // Phần này trả về giao diện của component.
    return (
        <>
            {/* Hiển thị giá trị hiện tại của state `count` */}
            <p>Count: {count}</p>
            {/* Khi click vào nút, state `count` sẽ tăng lên 1, và component sẽ render lại. */}
            <button onClick={() => setCount(count + 1)}>Increment</button>
            {/* Dòng này sẽ chạy và in ra console mỗi khi giao diện được render lại. */}
            {console.log("Render lại giao diện")}
        </>
    );
}

// Xuất component này ra để có thể sử dụng ở các file khác.
export default DemoWithDeps;