import styles from "./AddTodo.module.css";

function AddTodo({HandleOnAdd, HandleOnChangeDate, HandleOnChangeName , name , date}) {
  return (
    <div className={`${styles.conn} ${styles.color}`}>
    <div className="container text-center">
      <div className="row my-4">
        <div className="col-6">
          <input type="text" name="" id="" placeholder="Enter To Do Here" onChange={HandleOnChangeName} value={name}/>
        </div>
        <div className="col-4">
          <input type="date" name="" id="" onChange={HandleOnChangeDate} value={date}/>
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success" onClick={HandleOnAdd}>
            Add
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default AddTodo;
