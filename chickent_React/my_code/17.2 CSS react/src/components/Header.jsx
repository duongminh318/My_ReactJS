import logo from "../assets/logo-tuhoc.png";
import "./header.css"

export default function Header() {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1>CSS trong React</h1>
      <p
        style={{ 
           // ta chuyển vào một đối tượng
           color:"red",
           backgroundColor: "yellow" , //  background-color --> camelCase

        }}
      
      >
        Tìm hiểu về css trong react cho người mới.
        </p>
    </header>
  );
}
