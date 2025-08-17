import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import ShowTodo from "./components/ShowTodo";
import {useState } from "react";
import Errormessage from "./components/Errormessage";
import { TodoItemContext } from "./store/todo-item-store";
import { AllContextProvider } from "./store/AllContext";


function App() {

  const [items, setItems] = useState([
    { todoname: "Buy Milk", tododate: "20/07/2025" },
    { todoname: "Buy Eggs", tododate: "28/07/2025" },
  ]);

  const OnAddTodo = (todoname,tododate) => {
    if (todoname === "" || tododate === "") {
      setError("Empty Items");
      setErrorDesc("Please Enter Somthing to add ....!");
      return;
    }
    if (
      items.some(
        (item) =>
          item.todoname === todoname &&
          item.tododate === tododate
      )
    ) {
      setError("Dulicate Item");
      setErrorDesc("This todo has been already added ...!");
      return;
    }

    setItems((currentValue) => [
      ...currentValue,
      {
        todoname: todoname,
        tododate: tododate,
      },
    ]);
  };

  const OnDelete = (item) => {
    setItems((oldvalue) =>
      oldvalue.filter(
        (ele) =>
          !(ele.todoname === item.todoname && ele.tododate === item.tododate)
      )
    );
  };

  return (
    <>
      <div className="to-do-container text-center conn">
        
        <TodoItemContext.Provider value={{items,OnDelete,OnAddTodo ,setItems}}>
        <AppName />
        <AllContextProvider>
          <Errormessage/>
          <AddTodo/>
        </AllContextProvider>
        <div className="container text-center">
          {items.map((ele) => (
            <ShowTodo
              key={`${ele.todoname}-${ele.tododate}`}
              element={ele}
            />
          ))}
        </div>
        </TodoItemContext.Provider>
      </div>
    </>
  );
}

export default App;
