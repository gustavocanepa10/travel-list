// RENDERIZA O ITEM






function Item({item, onToggleItems, onDeleteItems}) {
    return <li >
      <input type="checkbox" value={item.packed} onChange={() => onToggleItems(item.id)}  />
       <span 
       style={ item.packed ? {textDecoration : "line-through"} : {}}>
        {item.quantity} {item.description} </span> 
      
       <button onClick={() => onDeleteItems(item.id)} type="button">❌</button>
    </li>
        
  

    
}

  export function PackingList({items, onToggleItems, onDeleteItems, handleClearList}) {
    
    return (
        <div className="list">
          <ul>

          {items.map((item) => <Item  key={item.id}  item={item} onToggleItems={onToggleItems} onDeleteItems={onDeleteItems}    />  )}
          </ul>


          <div className = "actions">
            
            <button onClick = {handleClearList} type="button">Limpar Lista</button>

          </div>
         
          
        </div>
    )
        
}
