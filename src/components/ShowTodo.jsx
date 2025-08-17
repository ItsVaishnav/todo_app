import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { TodoItemContext } from "../store/todo-item-store";

function ShowTodo(props) {
  let {todoname , tododate} = props.element;
  const {OnDelete} = useContext(TodoItemContext);
  return (
    <div className="container text-center">
      <div className="row my-4">
        <div className="col-6">{todoname}</div>
        <div className="col-4">{tododate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger" onClick={()=>{OnDelete(props.element)}}> 
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShowTodo;
