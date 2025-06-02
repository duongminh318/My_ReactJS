
import './App.css'

function Header() {
  return (
    <>
      <h2>Chào mừng thím đã đến với thế giới React</h2>
      <p>
        Hôm nay là <strong>2/6/2025</strong>
        . Thời gian hiện tại <strong>4:03 PM</strong>
      </p>
    </>
  )
}


function App() {
  return (
    <>
      <Header></Header>
      <Header/>
      <h1>haha</h1>
      <h1>hoho</h1>

    </>
  )
}

export default App
