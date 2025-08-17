import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { TodoItemContext } from "../store/todo-item-store";
import { useAllContext } from "../store/AllContext";

function ShowTodo(props) {
  let {todoname , tododate} = props.element;
  const {OnDelete} = useContext(TodoItemContext);
  const {setError} = useAllContext();
  const handleOnDelete = () => {
    OnDelete(props.element);
    const errorDetails = {
        error: "Item Deleted",
        errorDesc: `The Item ${todoname} has been deleted successfully!`,
      };
      setError(errorDetails);
  }
  return (
    <div className="container text-center">
      <div className="row my-4">
        <div className="col-6">{todoname}</div>
        <div className="col-4">{tododate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger" onClick={handleOnDelete}> 
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShowTodo;
