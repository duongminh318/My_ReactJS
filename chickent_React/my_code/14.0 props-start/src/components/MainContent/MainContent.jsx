// Nhập thư viện PropTypes để kiểm tra kiểu dữ liệu của props
import PropTypes from "prop-types";

// ✅ MainContent component – hiển thị 1 khái niệm trong React, nhận dữ liệu qua props
function MainContent({image, title, desc}) {  // các tham số
  return (
    <li>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{desc}</p>
    </li>
  );
}

// 🔍 Kiểm tra kiểu dữ liệu props được truyền vào MainContent
MainContent.propTypes = {
  image: PropTypes.string.isRequired,  // Đường dẫn ảnh (bắt buộc)
  title: PropTypes.string.isRequired,  // Tiêu đề (bắt buộc)
  desc: PropTypes.string               // Mô tả (không bắt buộc)
};

export default MainContent;