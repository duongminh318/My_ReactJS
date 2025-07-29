import { useState } from 'react'
import './App.css'

function App() {
  const [greeting, setGreeting] = useState("Hello !")

  // xây dựng hàm updateGreeting
  // Hàm updateGreeting sẽ chọn ngẫu nhiên một lời chào từ mảng greetings và cập nhật state greeting
  // function updateGreeting() {
  //   const greetings = [
  //     "Xin chào!",
  //     "Hello!",
  //     "Bonjour!",
  //     "Hola!",
  //     "Ciao!",
  //     "こんにちは!",
  //     "안녕하세요!",
  //     "Chào bạn!",
  //     "Welcome!",
  //     "Guten Tag!"
  //   ];
  //   // Chọn một lời chào ngẫu nhiên
  //   const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
  //   // Cập nhật state greeting với lời chào mới
  //   setGreeting(randomGreeting);
  // }

  // cập nhật lời chào theo giờ
  // Hàm updateGreeting sẽ cập nhật lời chào dựa theo giờ hiện tại
  function updateGreeting() {
    // Lấy giờ hiện tại từ hệ thống và gán vào biến currentHour
    const currentHour = new Date().getHours(); 
    let newGreeting = "";

    if (currentHour >= 5 && currentHour < 12) {
      newGreeting = "Chào buổi sáng!";
    } else if (currentHour >= 12 && currentHour < 18) {
      newGreeting = "Chào buổi chiều!";
    } else {
      newGreeting = "Chào buổi tối!";
    }

    setGreeting(newGreeting);
  }


  return (
    <>
      <p>{greeting}</p>
      <button onClick={updateGreeting}>cập nhật lời chào</button>
    </>
  )
}

export default App
