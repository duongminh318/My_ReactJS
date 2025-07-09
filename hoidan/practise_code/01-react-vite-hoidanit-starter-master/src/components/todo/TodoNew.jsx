const TodoNew = (props) => {
    console.log(">>> check props: ", props);
    const { addNewToDo } = props;

    // addNewToDo("win");   // đưa đối số vào

    // addNewTodo ("eric")  
    const handleClick = () => {  // fire: kích hoạt function
        alert("Click me")
    }

    //  const handleOnChange = (event) => {  // fire: kích hoạt function
    //    console.log(">> handleOnChange ",event.target.value);
    // }


    const handleOnChange = (name) => {  // fire: kích hoạt function
        console.log(">> handleOnChange ", name);
    }

    return (

        <div className="todo-new">
            <input type="text" placeholder="Thêm một công việc mới..."
                onChange={(event) => handleOnChange(event.target.value)}  // thay bằng arrow function
            />
            <button style={{ cursor: "pointer" }}
                onClick={handleClick}
            >Add
            </button>
        </div>
    );
}


// const TodoNew = (props) => {
//  console.log(">>> check props: ", props);
//     const {addNewToDo}= props;

//     // addNewToDo("eric");

//     return (

//         <div className="todo-new">
//             <input type="text" placeholder="Thêm một công việc mới..." />
//             <button>Add</button>
//         </div>
//     );
// }

export default TodoNew;