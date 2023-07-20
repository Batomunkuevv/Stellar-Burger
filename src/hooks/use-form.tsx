import { useState, ChangeEvent } from 'react';

const useForm = (inputValues: {[value: string]: string}) => {
    const [values, setValues] = useState(inputValues);

    const handleChange = (event: ChangeEvent<HTMLInputElement>)  => {
        const { value, name } = event.target;
        setValues({ ...values, [name]: value });
    };
    
    return { values, handleChange, setValues };
}

export default useForm