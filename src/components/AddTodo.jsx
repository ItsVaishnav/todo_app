import { useContext, useRef } from "react";
import styles from "./AddTodo.module.css";
import { MdOutlinePostAdd } from "react-icons/md";
import { TodoItemContext } from "../store/todo-item-store";
import { useAllContext } from "../store/AllContext";

function AddTodo() {
  const nameElement = useRef();
  const dateElement = useRef();

  const {setError} = useAllContext();
  
  let errorDetails = {};
  const { OnAddTodo ,items} = useContext(TodoItemContext);
  const HandleOnSubmit = () => {
    const todoname = nameElement.current.value;
    const tododate = dateElement.current.value;

    if (todoname === "" || tododate === "") {
      errorDetails = {
        error: "Empty Items",
        errorDesc: "Please Enter Somthing to add ....!",
      };
      setError(errorDetails);
      return;
    }
    if (
      items.some(
        (item) => item.todoname === todoname && item.tododate === tododate
      )
    ) {
      errorDetails = {
        error: "Dulicate Item",
        errorDesc: "This todo has been already added ...!",
      };
      setError(errorDetails);
      return;
    } else {
      OnAddTodo(todoname, tododate);
      errorDetails = {
        error: "ToDo Added",
        errorDesc: "Your todo has been added successfully...!",
      };
      setError(errorDetails);
    }
    nameElement.current.value = "";
    dateElement.current.value = "";
  };
  return (
    <div className={`${styles.conn} ${styles.color}`}>
      <div className="container text-center">
        <div className="row my-4">
          <div className="col-6">
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter To Do Here"
              ref={nameElement}
            />
          </div>
          <div className="col-4">
            <input type="date" name="" id="" ref={dateElement} />
          </div>
          <div className="col-2">
            <button
              type="submit"
              className="btn btn-success"
              onClick={HandleOnSubmit}
            >
              <MdOutlinePostAdd />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
