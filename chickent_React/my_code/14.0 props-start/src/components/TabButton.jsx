// Component TabButton nhận vào 2 props từ cha (App):
// 1️⃣ children  → nội dung nằm giữa thẻ <TabButton>...</TabButton>
// 2️⃣ onSelect  → là 1 hàm callback được truyền từ App xuống
export default function TabButton({ children, onSelect }) {

  // ❗Trước đây nếu là JavaScript thuần, ta phải tự đi "bắt" sự kiện click
  // bằng querySelector + addEventListener như dưới (đã bị comment)
  // React giúp ta làm gọn hơn — chỉ cần thêm onClick={hàm} là đủ
  
  // const btn = document.querySelector("button");
  // btn.addEventListener("click", ()=>{
  //   // làm việc gì đó
  // })

  // 🧩 Khi người dùng bấm vào button:
  // React tự động gọi hàm onSelect được truyền từ App.js
  // → App chạy handleSelect("jsx" hoặc "props"...) → cập nhật state → render lại
  return (
    <li>
      {/* Khi click, hàm onSelect (từ App) sẽ chạy */}
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}
