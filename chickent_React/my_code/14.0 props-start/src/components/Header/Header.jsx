import logo from "../../assets/logo-tuhoc.png";

// ✅ Header component – phần đầu trang gồm logo, tiêu đề, mô tả
function Header() {
  return (
    <header>
      <img src={logo} alt="Tự Học" />
      <h1>React winTech.pro</h1>
      <p>
        Học React - Khám phá cách xây dựng ứng dụng linh hoạt, hiện đại, và đầy sáng tạo!
      </p>
    </header>
  );
}

export default Header;