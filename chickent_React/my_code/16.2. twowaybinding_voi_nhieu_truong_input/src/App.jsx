import { useState } from 'react'
import './App.css'

function App() {
  // useState (giatribandau, hamthaydoigiatri) = useState("giá trị ban đầu")
  const [playerName, setPlayerName] = useState("Win");

  // hàm xử lý khi người dùng nhập liệu
  const handleChange = (e)=>{ // khi thay đổi giá trị
    setPlayerName(e.target.value)
  }
  

  return (
    <>
     
      <h1>nhập tên người chơi</h1>
      {/* khi thay đổi trên ô input sẽ chạy hàm handleChange */}
      <input type='text' value={playerName} onChange={handleChange}></input>
      {/* hiển thị những gì vừa mới thay đổi ra màn hình */}
      <p> Thím đã nhập: {playerName}</p>
      
     
   
    </>
  )
}

export default App
