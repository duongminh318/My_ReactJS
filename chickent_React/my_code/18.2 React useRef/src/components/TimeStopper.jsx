import { useState, useRef } from "react";

export default function TimeStopper({ title, targetTime }) {
  const timer= useRef();
  // Tạo 2 state để lưu thời gian
  const [timerStart, setTimerStart] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  // Hàm xử lý khi click vào nút
  // Đây là hàm sẽ được gọi khi bạn muốn bắt đầu bộ đếm.
  function handleStart() {
    // Dòng này đặt một "lệnh hẹn giờ" (timer) để chạy một đoạn code sau một khoảng thời gian nhất định.
    timer.current= setTimeout(() => {
      // Đoạn code bên trong này chỉ chạy sau khi hết thời gian chờ.
      // Nó cập nhật state của "timer" thành "đã hết hạn".
      setTimerExpired(true);
    }, targetTime * 1000); // Thời gian chờ được tính bằng cách lấy targetTime (giây) * 1000 (mili-giây).

    // Dòng này chạy NGAY LẬP TỨC khi hàm handleStart được gọi.
    // Nó cập nhật state để báo hiệu rằng "bộ đếm đã bắt đầu".
    setTimerStart(true);
  }

  function handleStop(){
    clearTimeout(timer.current);
    setTimerStart(false);
  }

  return (
    // Thẻ <section> bao bọc toàn bộ giao diện của component.
    <section className="challenge">
      {/* Hiển thị tiêu đề, giá trị này được truyền vào từ bên ngoài. */}
      <h2>{title} </h2>

      {/* Cách hiển thị có điều kiện: Nếu `timerExpired` là true, thì hiển thị thẻ <p> này. Nếu không thì không hiển thị. */}
      {timerExpired && <p> Bạn đã thua</p>}
     

      {/* Đoạn code này để hiển thị thời gian. */}
      <p className="challenge-time">
        {/* Hiển thị số giây. */}
        {targetTime} second
        {/* Kiểm tra xem `targetTime` có lớn hơn 1 không, nếu có thì thêm chữ "s" vào. */}
        {targetTime > 1 ? "s" : ""}
      </p>

      {/* Đây là nút bấm. */}
      <button onClick={timerStart ? handleStop : handleStart}>
        {/* Nội dung của nút sẽ thay đổi tùy thuộc vào trạng thái `timerStart`. */}
        {/* Nếu `timerStart` là true, nút hiển thị "stop", ngược lại là "start". */}
        {timerStart ? "stop" : "start"}
      </button>

      {/* Đoạn code này để hiển thị trạng thái của timer. */}
      <p className={timerStart? "active": undefined}>
        {/* Nếu `timerStart` là true, thêm class "active" và hiển thị "Time is running". */}
        {/* Ngược lại, không có class và hiển thị "Timer inactive". */}
        {timerStart ? " Time is running" : "Timer inactive"}
      </p>
    </section>
  );
}