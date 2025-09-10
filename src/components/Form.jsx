import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// CRIAR O ITEM e ADICIONAR ITEM

const schema = yup.object({
  quantity: yup.string().required("Quantidade é obrigatória"),
  description: yup.string().required("Descrição é obrigatória"),
});

export function Form({ addItems, item }) {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      quantity: "",
      description: "",
    },

    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);

    const newItem = {
        ...data,
        id : Date.now(),
        packed: false
    }

    addItems(newItem);
    console.log(item);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit(onSubmit)}>
      <h3>O que você precisa para a viagem?</h3>
      <Controller
        control={control}
        name="quantity"
        render={({ field }) => (
          <select {...field}>
            {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
              <option value={num} key={num}>
                {" "}
                {num}{" "}
              </option>
            ))}
          </select>
        )}
      />

      <Controller
        control={control}
        name="description"
        render={({ field }) => (
          <input type="text" placeholder="item..." {...field} />
        )}
      />

      <button type="submit">Add</button>
    </form>
  );
}
