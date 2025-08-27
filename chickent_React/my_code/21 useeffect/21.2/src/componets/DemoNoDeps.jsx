// Dòng này "gọi" React và yêu cầu nó cung cấp các công cụ cần thiết:
// - `useState`: để tạo và quản lý trạng thái của component.
// - `useEffect`: để thực hiện các tác vụ "phụ" sau khi component đã được render.
import React, { useState, useEffect } from 'react';

// Định nghĩa một component tên là DemoNoDeps.
// "NoDeps" (No Dependencies) có nghĩa là không có mảng phụ thuộc.
function DemoNoDeps() {
    // Tạo một state tên là `count` với giá trị ban đầu là 0.
    const [count, setCount] = useState(0);

    // Dòng này sử dụng `useEffect`.
    // Vì không có mảng phụ thuộc [] ở cuối, hàm này sẽ chạy sau MỌI LẦN render của component.
    useEffect(() => {
        // Dòng này sẽ in ra console mỗi khi hiệu ứng này chạy.
        console.log('useEffect without dependencies');
        // Dòng này thay đổi tiêu đề của trang web trên trình duyệt.
        // document.title = `Count: ${count}`;
        // { console.log("bắt đầu fetch") }
        // fetch('https://fakestoreapi.com/products/1')
        //     .then(res => res.json())
        //     .then(json => console.log(json))
        // { console.log("chương trình đã chạy qua fetch") }
    }); // <-- Không có mảng phụ thuộc [] ở đây

    // api


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
export default DemoNoDeps;