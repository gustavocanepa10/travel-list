import { Logo } from './components/Logo';
import { Form } from './components/Form';
import { PackingList } from './components/PackingList';
import { Stats } from './components/Stats';
import { useState } from 'react';








export default function App() {
  const [list, setList] = useState([])

  
  
  
  function handleAddItems(newItem) {
    setList((prevList => [...prevList, newItem]))

}

  function handleToggleItems(id) {
    setList((prevList) => prevList.map((item) => item.id === id ? {...item, packed: !item.packed} : item))
  }


  function handleDeleteItems(id) {
    setList((prevList) => prevList.filter((item, index) => item.id !== id)) 
      
    
  }

  function handleClearList() {
    const confirmed = window.confirm("Você tem certeza que quer apagar tudo?");
    
    if (confirmed) {
      setList([]);
  }
}


  return (
    <div className="App">
    <Logo/>
    <Form addItems = {handleAddItems} item = {list}   />
    <PackingList items = {list} onToggleItems = {handleToggleItems}   onDeleteItems = {handleDeleteItems} handleClearList = {handleClearList}    />
    <Stats  list = {list}   />
    </div>
  );
}


