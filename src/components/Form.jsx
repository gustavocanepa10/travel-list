


import { Controller, useForm } from "react-hook-form";




// CRIAR O ITEM e ADICIONAR ITEM


export function Form({addItems, item}) {


    const {control, handleSubmit} = useForm({defaultValues : {
        id : Math.random(),
        quantity : "",
        description : ""
    }})



    
    
    

    

    function onSubmit(data) {



        console.log(data);

        


        
           



        
        addItems(data)
        console.log(item)
        




        

        


        

        

        
        

        

        

        
        


    }


    






    return (
        <form className="add-form"  onSubmit={handleSubmit(onSubmit)}>
            <h3>O que você precisa para a viagem?</h3>
            <Controller control={control} name="quantity" render={({field}) => ( <select {...field}  >
                {Array.from({length : 20}, (_, i) => i +1).map(num => <option value={num} key={num}> {num}    </option>)}

            </select>)}  />

            <Controller control={control} name="description" render={({field}) => (<input  type="text" placeholder="item..." {...field} />)}  />
           
            
            <button type = "submit">Add</button>

        </form>
    )
}