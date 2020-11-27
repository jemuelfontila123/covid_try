import {useState} from 'react'



const useField = type => {
    const [value, setValue] = ('')

    const onChange = (event) => setValue(event.target.value)
    // const filter
    return{
        type,
        value,
        onChange,
        // filter,
    }
}