const TodoNew = (props) => {
 console.log(">>> check props: ", props);
    const {addNewToDo}= props;

    // addNewToDo("eric");
   
    return (

        <div className="todo-new">
            <input type="text" placeholder="Thêm một công việc mới..." />
            <button>Add</button>
        </div>
    );
}

export default TodoNew;