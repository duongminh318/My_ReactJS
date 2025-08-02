import Book from "./Book";
// mảng chứa tên các cuối sách
const myBooks = ["sách hay", "hành trình phát triển của wintech", "kỹ năng sống", "sách X"];
function App() {
  return (
    <>
      <h1>Danh sách Sách yêu thích</h1>

      <ul>
        {/* <Book title={myBooks[0]}> </Book>
        <Book title={myBooks[1]}/> */}

        {/* sử dụng map để tổng quan */}
        {myBooks.map((book, index) => (
          // gọi component hàm hiển thị lên view đã xây dựng sẵn
          <Book title={book} key={index} />
        ))}
      </ul>
    </>
  );
}

export default App;
