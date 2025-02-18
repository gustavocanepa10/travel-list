// RENDERIZA O ITEM

const initialItems = [
    { id: 1, description: "Passports", quantity: 4, packed: true },
    { id: 2, description: "Socks", quantity: 12, packed: false },
    { id: 3, description: "Charger", quantity: 1, packed: true },

  ];


  

    function Item({item, ondeleteItems}) {
    return <li >
       <span style={ item.packed ? {textDecoration : "line-through"} : {}}>{item.description}</span> 
       <span> {item.quantity}     </span>
       <button onClick={() => ondeleteItems(item.id)} type="button">❌</button>
    </li>
        
  

    
}

  export function PackingList({items, ondeleteItems}) {
    return (
        <div className="list">
            <ul>
            {items.map((item) => <Item item = {item} ondeleteItems = {ondeleteItems} key = {item.id}/>)}
            </ul>
          
        </div>
    )
        
}
