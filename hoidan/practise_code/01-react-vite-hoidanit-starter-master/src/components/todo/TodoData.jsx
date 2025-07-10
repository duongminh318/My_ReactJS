const TodoData = (props) => {


    const { todoList } = props;      // tương tự như const name= props.name;


    console.log(">>> check props: ", todoList);
    return (
        <div className="todo-data">
            {/* <div className="task-item">{props.name}</div> */}
            {
                todoList.map((item, index) => {
                    console.log(">> check map ,", item, index);
                    return (
                        <div className="todo-item">
                            <div className="task-item" >{item.name}</div>

                            <button>Delete</button>
                        </div>

                    )
                })
            }
            {/* <div className="task-item">learning React</div>
            <div className="task-item">Đi ngủ sớm</div> */}
            <div>
                {JSON.stringify(props.todoList)}
            </div>
        </div>

    )
}

export default TodoData;