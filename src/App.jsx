import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import ShowTodo from "./components/ShowTodo";
import Container from "./components/Container";
import { useState } from "react";
import Errormessage from "./components/Errormessage";
function App() {

  const [items ,setItems] = useState([
    {todoname : "Buy Milk",tododate : "20/07/2025"},
    {todoname : "Buy Eggs",tododate : "28/07/2025"},
  ]);

  const [name , setName] = useState('');
  const [date , setDate] = useState('');

  const [error , setError] = useState('');
  const [errorDesc , setErrorDesc] = useState('');

  const HandleOnAdd = () => {
    if(name === "" || date === ''){
      setError("Empty Items");
      setErrorDesc("Please Enter Somthing to add ....!");
    }else if (items.some((item) => item.todoname === name && item.tododate === date)){
      setError("Dulicate Item");
      setErrorDesc("This todo has been already added ...!");
    }else{
      let newItems = [...items , {todoname : name,tododate : date}];
      setItems(newItems);
      setError("ToDo Added");
      setErrorDesc("Your todo has been added successfully...!");
    }
    setName('');
    setDate('');
  }

  const HandleOnChangeName = (event) => {
    setName(event.target.value);
  }
  const HandleOnChangeDate = (event) => {
    setDate(event.target.value);
  }

  const handleOnDelete = (item) =>{
    let NewArr = items.filter(ele => ele !== item)
    setItems(NewArr);
  }

  return (  
    <>
      <div className="to-do-container text-center conn">
        <Container>
        <AppName />
        <Errormessage error={error} errorDesc={errorDesc}/>
        </Container>
        <Container>
        <AddTodo HandleOnAdd={HandleOnAdd} HandleOnChangeName={HandleOnChangeName} HandleOnChangeDate={HandleOnChangeDate} name={name} date={date}/>
        <div className="container text-center">
          {items.map(ele=> (
            <ShowTodo key={ele.todoname} element={ele} handleOnDelete={handleOnDelete}/>
          ))}
        </div>
        </Container>
      </div>
    </>
  );
}

export default App;