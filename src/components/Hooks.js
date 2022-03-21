import { useState } from "react";
export function useFormInputs(initialState){
    const [value,setValue] = useState(initialState);

    function onChange(e){
        setValue(e.target.value)
    }
    return{
        value,
        onChange,
    }
}