import "./App.css";

const TodoList = () => {
  const tasks = ["Học bài React", "Hoàn thành bài tập lập trình", "Dọn dẹp bàn làm việc"];

  return (
    <div>
      <h1>Danh sách công việc của tôi</h1>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      <p>Chúc bạn hoàn thành công việc tốt nhất hôm nay!</p>
    </div>
  );
};
function App() {
  return (
    <>
    <TodoList></TodoList>

    </>
  );
}

export default App;
