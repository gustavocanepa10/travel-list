import { useState } from "react";


export function Form({addItems}) {

    const [description, setDescription] = useState("")
    const [quantity, setQuantity] = useState(1)
    

    

    function handleSubmit(event) {
        event.preventDefault();

        if (!description) return ;


        


        const newItem = {description, quantity, packed: false, id : Math.random()}

        console.log(newItem)

        addItems(newItem)

        

        setDescription("")
        setQuantity(1)
        


    }


    function handleInput(event) {
        setDescription(event.target.value)
        console.log(event.target.value);

        
        
        
    }

    function handleSelect(event) {
        setQuantity(event.target.value)

        
       

    }






    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you need for your trip?</h3>
            <select value={quantity} onChange={handleSelect}>
                {Array.from({length : 20}, (_, i) => i +1).map(num => <option value={num} key={num}> {num}    </option>)}

            </select>
            <input onChange={handleInput} value={description} type="text" placeholder="item..." />
            <button>Add</button>

        </form>
    )
}