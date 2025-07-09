const TodoData = (props) => {
    // {
    //     name: "Eric",
    //     age: 25,
    //     data: {}
    // }

   const{name, age, data} = props;      // tương tự như const name= props.name;
    // const{address, country} =data;
  
    console.log(">>> check props: ", props);
    return (
        <div className="todo-data">
            {/* <div className="task-item">{props.name}</div> */}
            <div className="task-item">{name}</div>
            {/* <div className="task-item">{country}</div> */}
            <div className="task-item">Đi ngủ sớm</div>
            <div>
                {JSON.stringify(props.todoList)}
            </div>
        </div>

    )
}

export default TodoData;