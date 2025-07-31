import {useState} from "react";

//bài tập 03 khoá học react js tại 
export default function App() {

  const[isActive, setActive]= useState(false);

// hàm bật tắt
function handleToggle() {
  setActive(prev => !prev);

}

  return (
    <div className="container">
      <p className={isActive? "active": undefined}>Click vào em!</p>
      <button onClick={handleToggle}>Toggle btn</button>
    </div>
  );
}
