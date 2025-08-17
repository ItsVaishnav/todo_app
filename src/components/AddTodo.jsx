import { useContext, useRef } from "react";
import styles from "./AddTodo.module.css";
import { MdOutlinePostAdd } from "react-icons/md";
import { TodoItemContext } from "../store/todo-item-store";

function AddTodo() {
  const nameElement = useRef();
  const dateElement = useRef();
  const { OnAddTodo } = useContext(TodoItemContext);
  const HandleOnSubmit = () => {
    OnAddTodo(nameElement.current.value, dateElement.current.value);
    nameElement.current.value = "";
    dateElement.current.value = "";
  }
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
