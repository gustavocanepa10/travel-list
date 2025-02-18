import { Logo } from './components/Logo';
import { Form } from './components/Form';
import { PackingList } from './components/PackingList';
import { Stats } from './components/Stats';
import { useState } from 'react';







export default function App() {
  const [list, setList] = useState([])
  
  function handleAddItems(newItem) {
    setList((list => [...list, newItem]))

}

function handleDeleteItem(id) {
setList((list) => list.filter((item, index) => {
  return item.id !== id
}))

}




  return (
    <div className="App">
    <Logo/>
    <Form addItems = {handleAddItems}   />
    <PackingList items = {list} ondeleteItems = {handleDeleteItem}   />
    <Stats/>
    </div>
  );
}


