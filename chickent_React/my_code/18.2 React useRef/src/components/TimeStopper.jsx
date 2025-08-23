import { useState, useRef, useEffect } from "react";
import ResultModel from "./ResultModel";

export default function TimeStopper({ title, targetTime }) {
  // Tạo ref để lưu interval timer và dialog
  const timer = useRef();
  const dialog = useRef();

  // Khởi tạo state lưu thời gian còn lại (đổi từ giây sang mili-giây)
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  // Kiểm tra xem timer có đang chạy hay không
  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  // Sử dụng useEffect để kiểm tra khi hết thời gian
  useEffect(() => {
    if (timeRemaining <= 0) {
      clearInterval(timer.current); // Dừng timer
      dialog.current.open();        // Mở dialog thông báo thua
    }
  }, [timeRemaining]);

  // Hàm bắt đầu đếm thời gian
  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 10); // Giảm mỗi 10ms
    }, 10);
  }

  // Hàm dừng timer
  function handleStop() {
    clearInterval(timer.current); // Dừng interval
    // hiển thị hộp thoại
    dialog.current.open();
  }

  return (
    <>
      {/* Hiển thị kết quả khi hết thời gian */}
      <ResultModel ref={dialog} targetTime={targetTime} result="lost" />

      {/* Giao diện chính của component */}
      <section className="challenge">
        <h2>{title}</h2>

        {/* Hiển thị thời gian mục tiêu */}
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>

        {/* Nút bắt đầu hoặc dừng timer */}
        <button onClick={timerIsActive ? handleStop : handleStart}>
          {timerIsActive ? "stop" : "start"}
        </button>

        {/* Hiển thị trạng thái timer */}
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Time is running" : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
