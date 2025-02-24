export function Stats({list}) {


    const numItems = list.length
    const numPacked = list.filter((list) => list.packed).length;

    const percentage = numItems > 0 ? Math.round((numPacked/numItems) * 100 ) : 0; 
    
    
    return (
        <footer className="stats">
        <em>  

            {percentage === 100 
            ? "Você pegou tudo, pronto para partir!"
            : `Você tem ${numItems} items na sua lista, e já pegou ${numPacked} (${percentage} %) `}
            
            

            
            
        </em>
      
    </footer>

    ) 
}