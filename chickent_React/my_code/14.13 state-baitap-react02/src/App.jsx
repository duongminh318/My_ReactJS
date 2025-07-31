import { useState } from "react";

// Don't change the component name "App"

export default function App() {
  // Khai báo state để kiểm soát hiển thị cảnh báo
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  // Khai báo state để kiểm soát trạng thái kích hoạt
  const [isActivated, setIsActivated] = useState(false);

  // Hàm xử lý khi nhấn nút "Activate"
  function activateHandler() {
    setIsAlertVisible(true); // Hiển thị hộp cảnh báo
  }

  // Hàm xử lý khi nhấn nút "Confirm"
  function confirmHandler() {
    setIsAlertVisible(false); // Ẩn hộp cảnh báo
    setIsActivated(true);     // Đặt trạng thái đã kích hoạt
  }

  // Hàm xử lý khi nhấn nút "Cancel"
  function cancelHandler() {
    setIsAlertVisible(false); // Ẩn hộp cảnh báo
    setIsActivated(false);    // Đặt trạng thái chưa kích hoạt
  }

  return (
    <>
      {/* Hiển thị nút "Activate" khi chưa kích hoạt và chưa hiện cảnh báo */}
      {!isAlertVisible && !isActivated && (
        <button className="action-btn" onClick={activateHandler}>Activate</button>
      )}

      {/* Hiển thị hộp cảnh báo khi isAlertVisible = true */}
      {isAlertVisible && (
        <div className="alert-box">
          <h2>Warning!</h2>
          <p>Are you sure you want to activate this mode?</p>
          {/* Nút xác nhận */}
          <button className="confirm-btn" onClick={confirmHandler}>Confirm</button>
          {/* Nút hủy */}
          <button className="cancel-btn" onClick={cancelHandler}>Cancel</button>
        </div>
      )}

      {/* Hiển thị thông báo thành công khi đã kích hoạt */}
            {isActivated && (
              <h3 className="success-message">Mode Activated!</h3>
            )}
          </>
        );
      }
