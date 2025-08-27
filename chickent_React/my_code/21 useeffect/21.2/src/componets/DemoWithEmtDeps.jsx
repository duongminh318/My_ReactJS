import { useEffect, useState } from "react";

export default function DemoEmptDeps() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        // Để xử lý bất đồng bộ một cách tuần tự,
        // chúng ta tạo một hàm async bên trong useEffect.
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

    }, []); // Mảng rỗng [] đảm bảo useEffect này chỉ chạy 1 LẦN DUY NHẤT.

    return (
        <>
            <h3>useEffect với mảng rỗng []</h3>
            <button onClick={() => setCount(count + 1)}>Tăng</button>
            <p>Giá trị : {count}</p>
            {console.log("Render lại giao diện")}
        </>
    );
}